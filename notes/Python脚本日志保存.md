
### ✅ 通用日志保存代码（可直接复制到**任何 Python 程序**中使用，极简 + 万能）

这是抽离的 **纯日志功能核心代码**，无任何多余依赖，**粘贴即用**，所有 Python 脚本都能直接加，功能完美：

> ✔ 每次运行生成独立日志文件、永不覆盖历史日志

> ✔ 日志自动按【运行时间】命名，区分清晰

> ✔ 日志内容包含：运行时间、日志级别、具体内容

> ✔ 自动创建logs文件夹，无需手动新建

> ✔ 中文绝对无乱码、支持所有系统（Windows/Mac/Linux）

> ✔ 日志同时打印到控制台 + 写入本地文件 双输出

```python
import logging
import os
import traceback
from datetime import datetime
import sys

def init_logger():
    """初始化日志【增强版】：保存日志+控制台打印+异常栈完整记录+中文无乱码"""
    if not os.path.exists("./logs"):
        os.makedirs("./logs")
    
    log_file = f"./logs/{datetime.now().strftime('%Y%m%d_%H%M%S')}_run.log"
    
    # 创建日志格式器
    formatter = logging.Formatter(
        "%(asctime)s - %(levelname)s - %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S"
    )
    
    # 创建文件处理器（写日志文件）
    file_handler = logging.FileHandler(log_file, encoding="utf-8")
    file_handler.setFormatter(formatter)
    
    # 创建控制台处理器（打印到控制台）
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setFormatter(formatter)
    
    # 配置日志
    logger = logging.getLogger(__name__)
    logger.setLevel(logging.INFO)
    logger.addHandler(file_handler)
    logger.addHandler(console_handler)
    
    return logger

# ========== 初始化 ==========
logger = init_logger()
```

## ✅ 如何使用（3 行就会，超级简单）

### 步骤 1：把上面的日志代码，**粘贴到你的 Python 脚本的最顶部**

### 步骤 2：把你代码里所有的 `print()` 全部替换成下面的写法即可

```python
# 1. 打印【正常运行信息】→ 替换 print("内容")
logger.info("程序启动成功，开始执行xxx操作")

# 2. 打印【警告信息】→ 比如文件读取容错、格式转换等非错误的提醒
logger.warning("检测到大文件，自动切换为CSV格式保存")

# 3. 打印【错误信息】→ 比如文件读取失败、报错等异常
logger.error("读取文件失败，文件路径不存在")

# 4. 打印【带异常堆栈的详细错误】→ 推荐在try-except里用，能定位到报错代码行
try:
    # 你的业务代码
    1/0
except Exception as e:
    logger.error(f"程序执行报错：{str(e)}\n{traceback.format_exc()}")
```