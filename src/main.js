import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


axios.defaults.baseURL = 'https://stage.api.mamonto.com/'
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    const userString = localStorage.getItem('user')

    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('auth/SET_USER_DATA', userData)
    }

    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          this.$store.dispatch('auth/logout')
        }
        return Promise.reject(error)
      }
    )
  },
  render: h => h(App)
}).$mount('#app')
