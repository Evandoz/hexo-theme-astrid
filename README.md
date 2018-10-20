# Astrid

[![Build Status](https://travis-ci.org/Evandoz/hexo-theme-astrid.svg?branch=master)](https://travis-ci.org/Evandoz/hexo-theme-astrid)   [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Evandoz/hexo-theme-astrid/blob/master/LICENSE)

A theme for Hexo.

[**Live Preview**](https://evandoz.github.io/hexo-theme-astrid/)  |   [**中文文档**](https://github.com/Evandoz/hexo-theme-astrid/blob/master/README.zh.md)


![Desktop Preview](source/preview/preview-desktop.png?raw=true)

![Mobile Preview](source/preview/preview-mobile.png?raw=true)

<!--more-->

## Installation

 1. Get it from GitHub

 ```shell
 $ git clone https://github.com/Evandoz/hexo-theme-astrid.git themes/astrid
 ```
 2. Enable

 Modify `theme` setting in `_config.yml` to `astrid`.
 ```
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 ## Themes: http://hexo.io/themes/
 theme: astrid
 ```
 3. Update

 ```shell
 $ cd themes/Astrid
 $ git pull
 ```

## Configuration

### Theme configuration example

``` yml
# ---------------------------------------------------------------
# Site Information Settings
# ---------------------------------------------------------------

# Header Menu
menu:
  Home: /
  Archives: /archives
  Categories: /categories
  Tags: /tags
  #About: /about

# Specify the date when the site was setup
since: 2016

# Set default keywords (Use a comma to separate)
keywords: ""

# Put your favicon.ico into `/themes/astrid/source/` directory.
# Of course you can use a target link instead.
# (E.g. `http://abc.com/favicon.ico` or `css/images/favicon.ico`)
favicon: css/images/favicon.ico

# Social Links
# Key is the name of social.
# Value is the target link
social:
  Github: https://github.com
  Facebook: https://www.facebook.com
  Google+: https://plus.google.com
  Weibo: http://www.weibo.com

# Code Highlight theme
# Available value:
#    normal | night | night eighties | night blue | night bright
highlight_theme: normal

# widget behavior
archive_type: 'monthly'
show_count: true

# Webmaster tools verification setting
google_site_verification:
baidu_site_verification:
qihu_site_verification:

# MathJax Support
mathjax:
  enable: false
  per_page: false
```

## Browser support

![](source/preview/browser-support.png?raw=true)


## Contributing

All kinds of contributions (enhancements, new features, documentation & code improvements, issues & bugs reporting) are welcome.

Looking forward to your pull request.

[Hexo]: https://hexo.io/
[Font Awesome]: http://fontawesome.io/
