<template>
    <div class="audit">
        {{msg}}
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Audit extends Vue {
        public msg = "审核处理";
    }
</script>