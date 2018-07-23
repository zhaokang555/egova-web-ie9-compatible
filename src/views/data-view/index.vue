<template>
    <div class="data-view">
        <DeviceOnline></DeviceOnline>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import DeviceOnline from "./device-online/index.vue";

    @Component({
        components: {
            DeviceOnline,
        }
    })
    export default class DataView extends Vue {
        public msg = "实时信息";
    }
</script>

<style lang="less" scoped>
    .data-view {
        position: absolute;
        & > div {
            position: absolute;
        }
        .device-online {
            left: .05rem;
            top: .08rem;
        }
    }
</style>