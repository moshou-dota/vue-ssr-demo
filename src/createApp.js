import Vue from 'vue';
import App from './App';
import CreateRouter from './createRouter'
import createStore from './createStore';

export default function createApp () {
  const router = CreateRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });
  return {
    app, router, store
  };
}
