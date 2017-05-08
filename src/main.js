// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

import PageDemo from './components/PageDemo'
import mainBox from './components/mainBox'
import letter from './components/letter'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
    {
        path: '/',
        component: mainBox,
        redirect:'/index',
        children: [
            {
                path: 'index',
                component: require('./components/index')
            },
            {
                path: 'demo',
                component: PageDemo
            },
            {
                path: 'reward',
                component: require('./components/reward')
            },
            {
                path: 'movie',
                component: require('./components/recMovie')
            }
        ]
    },
    {
        path: '/letter',
        component: letter
    }
]

const router = new VueRouter({
    routes
})
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
  created: function () {
      this.$router.push('/index')
    }
}).$mount('#app')
