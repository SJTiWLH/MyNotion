---
title: Linux部署python项目
# 侧边栏短标题（可选）
sidebar_label: 打印机共享
# 排序
order: 1
# 标签
tags: [Linux,python]
---


本文适用于 **Termius 远程连接 Linux 服务器**，解决 Python 环境搭建、代码格式报错、权限不足、关闭终端程序停止运行等问题，实现 `app.py` 永久后台常驻运行。

## 一、安装 Python 基础环境

确保服务器自带 Python3，安装虚拟环境依赖

```Plain
# 更新软件源
sudo apt update

# 安装 python3 虚拟环境组件
sudo apt install python3.10-venv -y
```

## 二、创建 Python 虚拟环境

统一环境依赖，避免全局包冲突

```Plain
# 创建虚拟环境（文件夹名统一为 MyVenv）
python3 -m venv MyVenv

# 激活 Linux 虚拟环境
source MyVenv/bin/activate
```

激活成功后，终端前缀会显示 `(MyVenv)`

## 三、安装项目依赖库与工具

```Plain
# 安装图像处理 PIL 库
pip install Pillow

# 安装换行格式转换工具（解决 Windows 脚本上传 Linux 报错）
sudo apt-get install dos2unix -y
```

## 四、修复 Windows 转 Linux 代码格式报错

本地 Windows 编写的 `app.py` 上传服务器会出现换行符异常、解析失败，需要格式转换

```Plain
# 转换文件编码与换行格式
dos2unix app.py
```

## 五、赋予脚本执行权限

```Plain
# 给 app.py 添加可执行权限
chmod +x app.py
```

## 六、解决关闭 Termius 程序停止问题（重点）

### 问题原因

直接在终端运行`python3 app.py`，属于**前台进程**，关闭 Termius 终端、断开 SSH 连接，系统会发送挂起信号，程序直接终止。

### 后台常驻运行命令（永久生效）

```Plain
# nohup 后台运行，忽略挂断信号，退出终端不停止
nohup python3 app.py 
```

### 命令说明

- `nohup`：让进程忽略 SIGHUP 挂起信号，关闭终端不退出
    
- &：放入后台运行
    
- 自动生成 `nohup.out` 文件，存储程序所有日志、报错、输出信息
    

## 七、查看程序运行状态与日志

```Plain
# 实时查看运行日志
tail -f nohup.out

# 查看全部日志内容
cat nohup.out

# 查看 Python 后台进程是否在运行
ps -ef | grep app.py
```

## 八、停止后台运行的程序

```Plain
# 先查询进程 PID
ps -ef | grep app.py

# 杀死进程（替换 PID 为查到的数字）
kill -9 PID
```

## 九、全套启动总结（一键流程）

```Plain
source MyVenv/bin/activate
dos2unix app.py
chmod +x app.py
nohup python3 app.py 
```