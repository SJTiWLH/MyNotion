
## 问题背景

  在一个项目中，我需要通过 JavaScript 代码动态地修改一个下拉框（`<select>` 元素）的值。这个下拉框用于选择国家。直接用 `.value` 赋值的话。并没有激活你的选择，提交按钮并没有收到修改信息，导致无法点击。

```markdown
const selectElement = document.getElementById('select-country');
selectElement.value = 'gb';
```

我通过 `document.getElementById` 方法获取了 `id` 为 `select-country` 的下拉框元素，然后将其 `value` 属性设置为 `'gb'`，表示选择了英国。然而，当我运行这段代码时，发现虽然下拉框的值确实被修改了，但页面并没有执行与选择英国相关的操作，导致无法点击提交按钮。

## 解决方案

 在 HTML 中，当用户手动选择下拉框中的某个选项时，浏览器会自动触发 `change` 事件。但当我们通过 JavaScript 代码动态修改下拉框的值时，浏览器并不会自动触发这个事件。因此，我们需要手动创建并触发 `change` 事件

```html
const selectElement = document.getElementById('select-country');
selectElement.value = 'gb';

// 创建一个 change 事件
const changeEvent = new Event('change');
// 触发 change 事件
selectElement.dispatchEvent(changeEvent);
```

在这段代码中，我们首先使用 `new Event('change')` 创建了一个 `change` 事件对象，然后通过 `selectElement.dispatchEvent(changeEvent)` 方法手动触发了这个事件。这样，当我们动态修改下拉框的值后，页面就会像用户手动选择选项一样，执行与 `change` 事件相关的操作。

## **总结**

通过这个例子，我们可以看到，在开发中，仅仅给表单元素赋值是不够的，有时候还需要手动触发相应的事件，以确保页面能够正确响应这些变化。在处理下拉框、输入框等表单元素时，我们要特别注意这一点，避免出现一些难以调试的问题。