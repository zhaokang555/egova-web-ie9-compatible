<template>
    <div class="data-search">
        {{msg}}
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class DataSearch extends Vue {
        public msg = "数据检索";
    }
</script>