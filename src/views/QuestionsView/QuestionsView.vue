<template>
  <div class="mt-5">
    <v-row justify="center">
      <v-divider />
      <QuestionComponent
        :question="questions[getNumberOfQuestion]"
        :currentQuestion="getNumberOfQuestion"
        v-on:answer="chosenAnswer"
      />
      <v-divider />
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { questions } from "@/helpers/constant";
import { RouterName } from "@/router/types";
import QuestionComponent from "@/components/Question/QuestionComponent.vue";
import { QUESTION_VIEW_STATE } from "@/views/QuestionsView/store";

@Component({
  components: {
    QuestionComponent
  }
})
export default class QuestionsView extends Vue {
  @Getter("getNumberOfQuestion", { namespace: QUESTION_VIEW_STATE })
  getNumberOfQuestion!: number;

  @Action("saveAnswerOne", { namespace: QUESTION_VIEW_STATE })
  saveAnswerOne!: Function;
  @Action("saveAnswerTwo", { namespace: QUESTION_VIEW_STATE })
  saveAnswerTwo!: Function;
  @Action("saveAnswerThree", { namespace: QUESTION_VIEW_STATE })
  saveAnswerThree!: Function;
  @Action("setNumberOfQuestion", { namespace: QUESTION_VIEW_STATE })
  setNumberOfQuestion!: Function;

  questions = questions;
  answers: string[] = [];

  get numberOfQuestion() {
    return this.$store.getters["questionsViewState/getNumberOfQuestion"];
  }

  chosenAnswer(answer: string, currentQuestion: number) {
    if (currentQuestion == 0) {
      this.saveAnswerOne(answer);
    }
    if (currentQuestion == 1) {
      this.saveAnswerTwo(answer);
    }
    if (currentQuestion == 2) {
      this.saveAnswerThree(answer);
    }

    if (this.getNumberOfQuestion < questions.length - 1) {
      this.setNumberOfQuestion(this.numberOfQuestion + 1);
    } else {
      this.$router.push({ name: RouterName.FinalAnswerView });
    }
  }
}
</script>
