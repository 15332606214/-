// 引入vue
import Vue from "vue"
// 引入App
import App from './App.vue'

// 关闭Vue生产提示
Vue.config.productionTip = false

// 创建Vue
new Vue({
    el:'#App',
    render: h => h(App)
})