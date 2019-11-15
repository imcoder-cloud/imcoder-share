import DdShare from './dd-share.vue'
const ddShare = {
  install: function(Vue) {
    Vue.component("DdShare", DdShare)
  }
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(ddShare) 
}
// 导出模块
export default ddShare
