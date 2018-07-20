import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/bootstrap/css/bootstrap.min.css';
import '@/assets/bootstrap/css/bootstrap-theme.min.css';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
