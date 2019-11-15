# dd-share

> 基于share.js封装的一键分享插件

## Build Setup

``` bash
# install modules
npm install dd-share

# in main.js
import DdShare from 'dd-share'
Vue.use(DdShare)

# use
<template>
  <div class="share-demo">
    <dd-share class="social-share" :share-config="config"></dd-share>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        url: "", // 网址，默认使用 window.location.href
        source: "", // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="https://github.com/dongdong-cloud/dd-share" />
        title: "", // 标题，默认读取 document.title 或者 <meta name="title" content="vue一键分享组件" />
        description: "", // 描述, 默认读取head标签：<meta name="description" content="基于share.js封装的vue组件，一键分享到微博、QQ空间、QQ好友、微信、腾讯微博、豆瓣、Facebook、Twitter、Linkedin、Google+、点点等社交网站。" />
        image: "", // 图片, 默认取网页中第一个img标签
        disabled: ["google", "facebook", "twitter"], // 禁用的站点 可用站点['weibo', 'qq', 'wechat', 'douban', 'qzone', 'linkedin', 'facebook', 'twitter', 'google']
        wechatQrcodeTitle: "微信扫一扫：分享", // 微信二维码提示文字
        wechatQrcodeHelper:
          "<p>微信里点“发现”，扫一扫</p><p>二维码便可将本文分享至朋友圈。</p>"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.share-demo {
  margin-top: 200px;
  text-align: center;
}
</style>
```
