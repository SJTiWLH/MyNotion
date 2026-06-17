B站搜索视频批量爬取与下载教程（requests + you-get 完整版）

如何爬取B站的视频呢。比如像要批量爬取某些视频，当你搜索之后，把搜索页面的视频全都爬取下来。这是一个批量爬取B站视频的方法。 首先，思路是，用request方法，获取B站视频的BVID，然后拿到视频链接之后，使用you-get方法下载视频。（高清下载视频需要登陆，下面有方法详情。）

## 一、核心需求与实现思路

**目标**：批量爬取 B 站搜索结果页面中的视频，实现自动化下载。

**技术路线**：通过网络请求获取视频元数据 → 解析提取视频标识（BVID）→ 调用下载工具获取视频文件。

## 二、具体实现步骤

### 1. 获取 B 站搜索页面的视频 BVID

**技术选择**：使用`requests`库发送 HTTP 请求，结合正则表达式解析 HTML，批量提取当前搜索页所有视频的 BVID。

B站前端页面会将所有视频信息内嵌在网页源码中，包含视频标题、BVID、播放量等数据。相比于调用接口，直接爬取搜索页 HTML 更加简单、无需复杂鉴权，适合新手批量采集。

**核心原理**：

- 模拟浏览器请求 B 站搜索页面，携带 UA 请求头，防止被拦截 403
    
- 获取网页完整 HTML 源码
    
- 通过正则匹配所有视频的 `bvid` 唯一标识
    
- 去重、整理得到当前页面所有视频链接
    

### 2. 拼接标准B站视频链接

B站所有视频通用链接格式：

`https://www.bilibili.com/video/【BVID】`

通过提取到的 BVID，即可批量拼接出每一个视频的完整可访问链接，为后续下载做准备。

### 3. 调用 you-get 批量下载视频

获取全部视频链接列表后，通过 Python 调用系统命令，批量执行 `you-get` 下载命令，自动保存视频到本地文件夹。

### 4. 高清视频登录鉴权方案

未登录状态下，you-get 只能下载 360P/480P 标清画质。想要下载 **720P、1080P、4K、大会员画质**，需要配置B站登录 Cookie。

只需在本地 `you-get` 配置文件中写入B站登录Cookie，即可永久高清下载。

---

## 三、环境依赖安装

执行以下命令安装全部所需库与工具：

```Plain
pip install requests
pip install beautifulsoup4
pip install you-get
```

---

## 四、完整可运行代码（批量爬取搜索页+批量下载）

功能：输入关键词 → 爬取当前搜索页所有视频BVID → 自动批量下载

```Plain
import requests
import re
import subprocess
import time

# 请求头，模拟浏览器访问
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": "https://www.bilibili.com/"
}

def get_bilibili_bvid_list(keyword):
    """
    根据搜索关键词，爬取搜索页所有视频BVID
    """
    # 拼接B站搜索链接
    url = f"https://search.bilibili.com/all?keyword={keyword}"
    res = requests.get(url, headers=HEADERS)
    html = res.text

    # 正则匹配所有bvid
    bvid_pattern = re.compile(r'"bvid":"(BV.*?)"')
    bvid_list = bvid_pattern.findall(html)

    # 列表去重
    bvid_list = list(set(bvid_list))
    print(f"成功爬取到 {len(bvid_list)} 个视频BVID")
    return bvid_list

def download_bilibili_video(bvid):
    """
    通过you-get下载单个视频
    """
    video_url = f"https://www.bilibili.com/video/{bvid}"
    print(f"正在下载：{video_url}")
    # 调用you-get命令下载
    subprocess.run(["you-get", video_url])
    time.sleep(1)

if __name__ == "__main__":
    # 在这里输入你要爬取的关键词
    key = input("请输入B站搜索关键词：")
    bv_list = get_bilibili_bvid_list(key)

    # 批量下载所有视频
    for bv in bv_list:
        download_bilibili_video(bv)
```

---

## 五、高清视频 Cookie 配置教程（关键）

### 1. 获取B站Cookie

- 浏览器登录B站官网
    
- F12开发者工具 → Application → Cookie → 复制 `SESSDATA` 值
    

### 2. 配置 you-get 高清权限

在电脑用户目录新建/修改配置文件 `~/.you-get/cookies.conf`，写入：

```Plain
[bilibili.com]
cookie = SESSDATA=你复制的SESSDATA值;
```

配置完成后，重启程序，即可直接下载 **1080P、4K 高清视频**。

---

## 六、优化功能拓展（可自行添加）

### 1. 分页爬取（多页全部下载）

修改搜索链接参数 `&page=2、3、4`，循环遍历页码，实现全站搜索结果爬取。

### 2. 指定画质下载

you-get 指定画质参数：

```Plain
you-get --format=1080 视频链接
```

### 3. 自定义保存文件夹

```Plain
you-get -o ./bilibili_video 视频链接
```

---

## 七、注意事项与合规声明

- 本代码仅用于**个人学习、本地收藏**，禁止商用、批量搬运、二次分发
    
- 爬虫需添加延时，禁止高频批量请求，避免IP封禁
    
- 严格遵守B站用户协议与网络安全法规