<template>
    <div class="system-manage">
        {{msg}}
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class SystemManage extends Vue {
        public msg = "系统管理";
    }
</script>