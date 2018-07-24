<template>
    <div id="app">
        <Header></Header>
        <router-view/>
    </div>
</template>

<script lang="ts">
    import Header from "@/components/header.vue";
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import View from "./view";

    @Component({
        components: {
            Header,
        },
    })
    export default class App extends View {

    }
</script>

<style lang="less">
    html {
        height: 100%;
        body {
            height: 100%;
            #app {
                width: 19.2rem;
                height: 100%;
                background-image: url("./assets/images/bg.png");
                background-size: cover;
                color: white;
            }
        }
    }
</style>
