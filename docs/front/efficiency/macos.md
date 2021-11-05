Start with intel NUC *nuc8i5beh* / 程序员内功系列

- Software
  - brew
- System
  - Opencore
    - github.com/woq/nuc8i5beh-hackintosh
  - Hackintosh



## HomeBrew

国内源

- 推荐USTC
  - https://mirrors.ustc.edu.cn/help/brew.git.html
- 备用Tsinghua
  - https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/

常用命令

- 查看brew版本：brew -v
- 更新brew版本：brew update
- 本地软件库列表：brew list
- 查看软件库版本：brew list --versions
- 查找软件包：brew search xxx （xxx为要查找软件的关键词）
- **安装软件包：brew install xxx （xxx为软件包名称）**
- 卸载软件包：brew uninstall xxx
- **安装软件：brew install --cask xxx（xxx为软件名称）**
- 卸载软件：brew uninstall --cask xxx
- 查找软件安装位置：which xxx （xxx为软件名称）

官方软件库

- `https://formulae.brew.sh/analytics/`

## 加速

### Docker

阿里容器镜像加速服务

* 只加速官方镜像

https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors

## Setup

### 安全警告

`sudo spctl --master-disable`

### 软件

cask

```sh
github				obsidian
google-chrome			opencore-configurator
hackintool			osxfuse
iina				termius
iterm2				typora
microsoft-remote-desktop	utools
notion				v2rayu
nutstore			visual-studio-code
obs ntfstool vox
```

normal

```zsh
neofetch zsh youtube-dl ffmpeg 
```

### 一些系统设置

```sh
// 120 分钟后进入休眠，延长清醒时间
sudo pmset -c sleep 120
// 显示器休眠时间：30 分钟
sudo pmset -c displaysleep 30
// 硬盘休眠时间：60 分钟
sudo pmset -c disksleep 60
// 内存供电，内存镜像不写入硬盘
sudo pmset -c hibernatemode 0
// 关闭 standby 模式
sudo pmset -c standby 0
// 关闭 autopoweroff
sudo pmset -c autopoweroff 0
// 休眠时持续联网
sudo pmset -c tcpkeepalive 1
```

### 编程相关

```sh
//git相关
git config --global http.proxy 'socks5://127.0.0.1:1080'
git config --global https.proxy 'socks5://127.0.0.1:1080'

//前端相关
export NODE_MIRROR=https://mirrors.tuna.tsinghua.edu.cn/nodejs-release/
npm config set registry https://registry.npm.taobao.org
yarn config set registry https://registry.npm.taobao.org

// setup. 
https://github.com/Loyalsoldier/v2ray-rules-dat. 
display packge content. 
geosite:geolocation-!cn. 
geoip:cn, geosite:cn, geosite:private. 
geosite:category-ads-all
```



### System Update 系统更新

```
sudo softwareupdate --ignore "macOS Catalina"
defaults write com.apple.systempreferences AttentionPrefBundleIDs 0 
killall Dock 
```

```hosts
127.0.0.1 swscan.apple.com
127.0.0.1 swdist.apple.com
127.0.0.1 swcdn.apple.com
127.0.0.1 swquery.apple.com
127.0.0.1 swdownload.apple.com
```

---

## 硬件

### BIOS

F2 LOAD BIOS | F7 Update BIOS | F10 Seletct Boot Device

1. Boot >> 
   1. Secure Boot *Disable*
   2. Boot Network Devices Last *Disable*
   3. Wake on LAN from S4/S5 Disable
2. BIOS版本默认不用更新
   1. 注（我的设备是2021年2月出厂，BIOS版本未看，全程安装没有任何问题）
   2. 如果进行过其他设置，建议加载默认配置，然后禁用上面三项其他默认即可
   3. 如果有问题 再考虑更新到最新BIOS , 或者搜索问题看有无解决方案

### 硬件

未做任何改动

> *原生*
>
> 2 内存插槽        (最大单条支持到 32GB DDR4,需要BIOS/OS 额外改动)
>
> 1 M.2 硬盘插槽 (适配全长/半长)
>
> 1 SATA硬盘位  （2.5英寸）
>
> 
>
> 有其他空位, 但需要额外动手能力
>
> 关于硬改方案
>
> ​	主要是网卡以及蓝牙（有解，但针对免驱卡还有一定差距）
>
> ​    博通拆机卡, 占用M.2插槽 或其他方式



----

- Ref
  - https://www.36kr.com/p/1722811777025
  - https://segmentfault.com/a/1190000010748343?utm_source=sf-similar-article