<template>
  <div class="mt-5">
    <Start />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Start from "@/components/Start/Start.vue";

@Component({
  components: {
    Start
  }
})
export default class StartView extends Vue {}
</script>
