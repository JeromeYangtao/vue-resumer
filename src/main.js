// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入第三方CSS，webpack会自动去找，module
import 'normalize.css'
//引入自己写的CSS
import './assets/reset.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    // es6中如果key和value完全相同，可以缩写成一个
    //如果template中出现'App'，则解释为App这个变量
    components: { App }
})