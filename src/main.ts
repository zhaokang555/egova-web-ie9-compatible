import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './stores/index';
import iView from "iview";
import "iview/dist/styles/iview.css";
// import '@/assets/bootstrap/css/bootstrap.min.css';
// import '@/assets/bootstrap/css/bootstrap-theme.min.css';

Vue.config.productionTip = false;
Vue.use(iView);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
