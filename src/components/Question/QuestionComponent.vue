<template>
  <v-col>
    <v-card class="mx-auto" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">
            {{ question.question }}
          </div>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions class="action-buttons">
        <v-btn
          v-for="(answer, i) in question.answers"
          outlined
          rounded
          text
          class="m5"
          :key="i"
          @click="chosenAnswer(answer)"
        >
          {{ answer }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IQuestion } from "./types";

@Component
export default class QuestionComponent extends Vue {
  @Prop() readonly question!: IQuestion;
  @Prop() readonly currentQuestion!: number;

  chosenAnswer(answer: string) {
    this.$emit("answer", answer, this.currentQuestion);
  }
}
</script>

<style lang="scss">
.m5 {
  margin: 5px;
}
.action-buttons {
  display: flex;
  justify-content: space-around;
}
</style>
