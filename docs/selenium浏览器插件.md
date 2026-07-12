---
title: selenium启动浏览器携带插件
# 标签
tags: [selenium,插件]
coverImg: docs\.vitepress\images\卡布达(1).jpg
---

# selenium带上浏览器插件启动浏览器

### 在使用selenium启动谷歌浏览器的时候，启动的是一个全新的浏览器。但是有一些需要需要识别实物的图片验证，需要用到YesCaptcha的浏览器插件去进行点击。我们就可以把插件存到本地然后在启动浏览器的时候提前配置进去。

### 1.打包扩展到本地

- 在浏览器找到该扩展，进入详细信息页面获取ID
- 在本地文件中搜索该ID，一般这个扩展所在的文件夹会以ID命名

```markdown
# 插件所在的默认位置，演示的是Edge浏览器的插件路径
C:\Users\用户名\AppData\Local\Microsoft\Edge\User Data\Default\Extensions\以ID命名的插件文件
```

- 进入该扩展文件夹，再进入版本号文件，复制该路径，到浏览器插件管理，会生成`crx` 插件文件及 `pem` 密钥文件。

### 2.在代码中配置

```python
# 创建ChromeOptions对象
chrome_options = ChromiumOptions()
```

```python
# 添加插件路径
plugin_path = r'C:\Users\pro_1.1.21.crx'  # 替换为实际插件路径
chrome_options.add_argument(f'--load-extension={plugin_path}')
```

```python
# 启动Chrome浏览器并加载插件
driver = webdriver.Chrome(options=chrome_options)
```