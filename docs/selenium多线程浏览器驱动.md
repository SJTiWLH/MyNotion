---
title: selenium多线程存在的驱动问题
# 标签
tags: [selenium,多线程]
coverImg: docs\.vitepress\images\卡布达(1).jpg
---

# 多线程浏览器驱动问题：


单线程开发启动浏览器时，因为使用的是虚拟环境，所以启动浏览器不需要规定chromedriver的位置，程序会自动寻找。直接使用 driver = webdriver.Chrome() 就能成功打开浏览器。尽管当前这种简单的用法成功了，然而，多线程环境、服务器环境或其他复杂的场景中这些问题就暴露出来。


## 解决办法：明确驱动的地址。

### 1、下载：

手动下载与当前浏览器相匹配的chromedriver，将其解压到虚拟环境的Scripts文件夹中。

```python
下载地址：<https://googlechromelabs.github.io/chrome-for-testing/#stable>
```

### 2、配置：

在“系统变量”区域中找到名为“Path”的变量，双击它，点击“新建”并输入 chromedriver 的解压路径。

### 3、代码：

```python
chrome_driver_path = r'C:\Slot\UK\python\ALL_BLS\venv\Scripts\chromedriver.exe'（驱动的位置）
service = Service(executable_path=chrome_driver_path)
driver = webdriver.Chrome(service=service)
driver.get(WebSize)
```