import Vue from 'vue';
import Router from 'vue-router';
import DataView from './views/DataView/DataView.vue';
import DataSearch from './views/DataSearch/DataSearch.vue';
import Audit from './views/Audit/Audit.vue';
import SystemManage from './views/SystemManage/SystemManage.vue';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: DataView,
        },
        {
            path: '/data-search',
            component: DataSearch,
        },
        {
            path: '/audit',
            component: Audit,
        },
        {
            path: '/system-manage',
            component: SystemManage,
        },
    ],
});
