// 引入vue
import Vue from "vue"
// 引入App
import App from './App.vue'
// 关闭Vue生产提示
Vue.config.productionTip = false

// 全局混入
// import { hunhe } from "./mixin";
// vue.mixin(hunhe)

// 创建Vue
new Vue({
    el:'#App',
    render: h => h(App)
})