<template>
    <div class="audit">
        {{msg}}
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import View from "../../view";

    @Component
    export default class Audit extends View {
        public msg = "审核处理";
        private mounted() {
            this.$notice.error({title: "ffffffff"});
        }
    }
</script>