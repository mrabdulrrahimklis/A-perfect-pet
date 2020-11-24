<template>
  <v-container class="height">
    <v-row justify="center" align="center">
      <v-col>
        <h2 class="my-50">
          Welcome to Pet quiz
        </h2>
        <v-row justify="space-around">
          <v-col>
            <v-btn @click="moveToQuestions">
              START
            </v-btn>
          </v-col>
          <v-col>
            <v-btn @click="randomizeQuestions">
              RANDOMIZE
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { RouterName } from "@/router/types";
import { Action } from "vuex-class";
import { QUESTION_VIEW_STATE } from "@/views/QuestionsView/store";
import { questions } from "@/helpers/constant";

@Component
export default class Start extends Vue {
  @Action("saveAnswerOne", { namespace: QUESTION_VIEW_STATE })
  saveAnswerOne!: Function;
  @Action("saveAnswerTwo", { namespace: QUESTION_VIEW_STATE })
  saveAnswerTwo!: Function;
  @Action("saveAnswerThree", { namespace: QUESTION_VIEW_STATE })
  saveAnswerThree!: Function;

  questions = questions;

  moveToQuestions() {
    this.$router.push({ name: RouterName.QuestionView });
  }

  randomNumber() {
    return Math.floor(Math.random() * 4);
  }

  randomizeQuestions() {
    this.saveAnswerOne(questions[0].answers[this.randomNumber()]);
    this.saveAnswerTwo(questions[1].answers[this.randomNumber()]);
    this.saveAnswerThree(questions[2].answers[this.randomNumber()]);
    this.$router.push({ name: RouterName.FinalAnswerView });
  }
}
</script>

<style lang="scss" scoped>
.height {
  height: 50vh;
}
.my-50 {
  margin: 50px 0;
}
</style>
