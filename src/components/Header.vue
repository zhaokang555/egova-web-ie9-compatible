<template>
    <div class="header">
        <div class="title">城管视频分析系统</div>
        <div class="links">
            <router-link to="/" exact>实时信息</router-link>
            <router-link to="/data-search" exact>数据检索</router-link>
            <router-link to="/audit" exact>审核处理</router-link>
            <router-link to="/system-manage" exact>系统管理</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Header extends Vue {

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .header {
        overflow: hidden;
        height: .6rem;
        background-image: url("../assets/images/header/bg.png");
        background-size: 100% 100%;
        .title {
            position: relative;
            left: .89rem;
            top: .06rem;
            font-size: .35rem;
            text-shadow: 0 0 .08rem #ffffff;
        }
        .links {
            position: relative;
            left: 5.85rem;
            top: -0.42rem;

            a {
                font-size: .2rem;
                display: inline-block;
                width: 1.69rem;
                height: .47rem;
                padding-top: .14rem;
                /*line-height: .47rem;*/
                background-image: url("../assets/images/header/link.png");
                background-size: 100% 100%;
                color: #cccccc;
                margin-right: .28rem;
                text-align: center;
                text-decoration: none;
                &:hover, &.router-link-exact-active {
                    color: #fff;
                    text-shadow: 0 0 .08rem #ffffff;
                }
            }
        }
    }
</style>
