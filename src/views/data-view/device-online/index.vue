<template>
    <div class="device-online">
        <div class="title">今日设备在线统计</div>
        <div class="lines">
            <div class="line">
                <div class="icon"></div>
                <div class="text">设备总数</div>
                <div class="bar-wrapper">
                    <div class="bar" :style="{width: 100 + '%'}"></div>
                </div>
                <div class="count">10000</div>
            </div>
            <div class="line">
                <div class="icon"></div>
                <div class="text">设备在线数</div>
                <div class="bar-wrapper">
                    <div class="bar" :style="{width: 77 + '%'}"></div>
                </div>
                <div class="count">7777</div>
            </div>
            <div class="line">
                <div class="icon"></div>
                <div class="text">设备离线数</div>
                <div class="bar-wrapper">
                    <div class="bar" :style="{width: 33 + '%'}"></div>
                </div>
                <div class="count">3333</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class DeviceOnline extends Vue {

    }
</script>

<style lang="less" scoped>
    .device-online {
        background-image: url("../../../assets/images/data-view/device-online/bg.png");
        background-size: 100% 100%;
        width: 4.69rem;
        height: 3.31rem;
        & > .title {
            position: absolute;
            left: .7rem;
            text-shadow: 0 0 .08rem #ffffff;
            font-size: .18rem;
            letter-spacing: .02rem;
        }
        & > .lines {
            position: absolute;
            left: .52rem;
            top: .65rem;
            width: 3.95rem;
            /*height: 2.36rem;*/
            .line {
                height: .8rem;
                &:nth-of-type(1) {
                    .icon {
                        background-image: url("../../../assets/images/data-view/device-online/total.png");
                    }
                    .bar {
                        background-color: #48ae5b;
                    }
                }
                &:nth-of-type(2) {
                    .icon {
                        background-image: url("../../../assets/images/data-view/device-online/online.png");
                    }
                    .bar {
                        background-color: #53e2fc;
                    }
                }
                &:nth-of-type(3) {
                    .icon {
                        background-image: url("../../../assets/images/data-view/device-online/offline.png");
                    }
                    .bar {
                        background-color: #ff6553;
                    }
                }
                .icon {
                    width: .6rem;
                    height: .6rem;
                    background-size: 100% 100%;
                }
                .text {
                    position: relative;
                    left: .7rem;
                    top: -0.5rem;
                }
                .bar-wrapper {
                    position: relative;
                    left: .7rem;
                    top: -0.46rem;
                    height: .14rem;
                    width: 1.52rem;
                    .bar {
                        height: 100%;
                    }
                }
                .count {
                    position: relative;
                    left: 2.5rem;
                    top: -0.76rem;
                    font-size: .28rem;
                }
            }
        }
    }
</style>