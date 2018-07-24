import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './stores/index';
// import iView from "iview";
import "iview/dist/styles/iview.css";
import iviews from "./components/iview";

// import '@/assets/bootstrap/css/bootstrap.min.css';
// import '@/assets/bootstrap/css/bootstrap-theme.min.css';

Vue.config.productionTip = false;
// Vue.use(iView);

Object.keys(iviews).forEach(key => {
    // 先以原始名字注册一下组件
    Vue.component(key, iviews[key]);

    // iview 组件统一加小写 "i" 标识
    // 最终在模板中使用组件时以类似 "i-button", "i-icon", "i-table" 方式引用
    if (key[0] !== "i") {
        Vue.component("i" + key, iviews[key]);
    }
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
