<template lang="pug">
    .data-view
        DeviceOnline
        AuditAnalysis
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import DeviceOnline from "./device-online/index.vue";
    import AuditAnalysis from "./audit-analysis/index.vue";

    @Component({
        components: {
            DeviceOnline,
            AuditAnalysis
        }
    })
    export default class DataView extends Vue {
        public msg = "实时信息";
    }
</script>

<style lang="sass" scoped>
    .data-view
        position: absolute
        & > div
            position: absolute
        .device-online
            left: .05rem
            top: .08rem
        .audit-analysis
            left: .09rem
            top: 3.48rem
</style>