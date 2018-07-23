<template src="./index.html"></template>

<style scoped src="./index.less"></style>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class SystemManage extends Vue {
        public msg = "系统管理";
    }
</script>

