<template>
  <v-btn @click="retryRefreshQuiz"> {{ buttonText }} </v-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import { QUESTION_VIEW_STATE } from "@/views/QuestionsView/store";
import { RouterName } from "@/router/types";

@Component
export default class RetryRefresh extends Vue {
  @Prop() readonly buttonText!: string;

  @Action("saveAnswerOne", { namespace: QUESTION_VIEW_STATE })
  saveAnswerOne!: Function;
  @Action("saveAnswerTwo", { namespace: QUESTION_VIEW_STATE })
  saveAnswerTwo!: Function;
  @Action("saveAnswerThree", { namespace: QUESTION_VIEW_STATE })
  saveAnswerThree!: Function;
  @Action("setNumberOfQuestion", { namespace: QUESTION_VIEW_STATE })
  setNumberOfQuestion!: Function;

  retryRefreshQuiz() {
    this.setNumberOfQuestion(0);
    this.saveAnswerOne("");
    this.saveAnswerTwo("");
    this.saveAnswerTwo("");

    if (this.$router.currentRoute.name != RouterName.QuestionView)
      this.$router.push({ name: RouterName.QuestionView });
  }
}
</script>
