import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'

/* eslint-disable */
new Vue({
  store, // inject store to all children
  el: 'body',
  components: { App }
})
/* eslint-disable */