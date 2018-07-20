import Vue from 'vue';
import Router from 'vue-router';
import DataView from './views/data-view/index.vue';
import DataSearch from './views/data-search/index.vue';
import Audit from './views/audit/index.vue';
import SystemManage from './views/syste-mmanage/index.vue';
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
