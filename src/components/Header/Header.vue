<template>
  <v-row class="bg-color">
    <v-col>
      <h1 style="color: white" @click="moveToStart">
        PET Quiz App
      </h1>
    </v-col>
    <v-divider></v-divider>
    <v-col align-self="center">
      <RetryRefresh :buttonText="RefreshQuiz" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RetryRefresh from "@/components/RetryRefresh/RetryRefresh.vue";
import { RouterName } from "@/router/types";

@Component({
  components: {
    RetryRefresh
  }
})
export default class Header extends Vue {
  RefreshQuiz = "Refresh Quiz";

  moveToStart() {
    if (this.$router.currentRoute.name != RouterName.StartView) {
      this.$router.push({ name: RouterName.StartView });
    }
  }
}
</script>

<style lang="scss">
.bg-color {
  background-color: darkslategray;
}
</style>
