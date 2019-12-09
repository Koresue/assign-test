import Vue from 'vue'
import App from './App.vue'
import router from "./router"

Vue.config.productionTip = false

Vue.store= Vue.prototype.store = []

var app = new Vue({
    router,
    render: h => h(App),
    el: '#app',


})

