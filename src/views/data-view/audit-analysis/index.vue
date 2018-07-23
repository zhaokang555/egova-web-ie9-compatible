<template lang="pug">
    .audit-analysis
        .title 审核率分析
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class AuditAnalysis extends Vue {

    }
</script>

<style lang="less" scoped>
    .audit-analysis {
        background-image: url("../../../assets/images/data-view/audit-analysis/bg.png");
        background-size: 100% 100%;
        width: 4.60rem;
        height: 3.23rem;
        & > .title {
            position: absolute;
            left: .7rem;
            text-shadow: 0 0 .08rem #ffffff;
            font-size: .18rem;
            letter-spacing: .02rem;
        }

    }
</style>