<template>
    <div class="header">
        <div class="title">城管视频分析系统</div>
        <div class="links">
            <router-link to="/" exact>实时信息</router-link>
            <router-link to="/data-search" exact>数据检索</router-link>
            <router-link to="/audit" exact>审核处理</router-link>
            <router-link to="/system-manage" exact>系统管理</router-link>
        </div>
        <div class="user-photo" :style="{backgroundImage: 'url(' + userPhoto + ')'}"></div>
        <div class="user-name">{{userName}}</div>
        <div class="time">{{time}}</div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import moment from "moment";
    import Timer = NodeJS.Timer;

    @Component
    export default class Header extends Vue {
        public tid!: Timer;
        public time = "";
        public get userName() {
            return this.$store.state.user.userName;
        }
        public get userPhoto() {
            return this.$store.state.user.userPhoto;
        }
        private mounted() {
            this.tid = setInterval(() => {
                this.time = moment().format("YYYY-MM-DD HH:mm:ss");
            }, 1000);
        }
        private beforeDestroy() {
            clearInterval(this.tid);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .header {
        overflow: hidden;
        height: .6rem;
        background-image: url("../assets/images/header/bg.png");
        background-size: 100% 100%;
        position: relative;
        top: .05rem;
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
            top: -0.46rem;

            a {
                font-size: .2rem;
                display: inline-block;
                width: 1.69rem;
                height: .47rem;
                padding-top: .14rem;
                /*line-height: .47rem;*/
                background-image: url("../assets/images/header/link.png");
                background-size: 100% 100%;
                color: #aaa;
                margin-right: .28rem;
                text-align: center;
                text-decoration: none;
                &:hover, &.router-link-exact-active {
                    color: #fff;
                    text-shadow: 0 0 .08rem #ffffff;
                }
            }
        }
        .time {
            position: relative;
            float: right;;
            top: -0.76rem;
            margin-right: .4rem;
            text-shadow: 0 0 .08rem #ffffff;
            font-size: .18rem;
        }
        .user-name {
            position: relative;
            float: right;
            top: -0.76rem;
            margin-right: .18rem;
            /*text-shadow: 0 0 .08rem #ffffff;*/
            font-size: .18rem;
        }
        .user-photo {
            position: relative;
            float: right;
            top: -0.82rem;
            margin-right: .32rem;
            width: .36rem;
            height: .36rem;
            border-radius: .18rem;
            background-size: 100% 100%;
            cursor: pointer;
        }
    }
</style>
