// import Vue from 'vue'
import createApp from './createApp';

const {app, store, router} = createApp();

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  app.$mount('#app');
})
