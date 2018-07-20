<template>
    <div class="data-view">
        {{msg}}
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class DataView extends Vue {
        public msg = "实时信息";
    }
</script>