<template>
  <div class="mt-5">
    <v-row>
      <v-divider />
      <v-col cols="6">
        <h3 v-if="!toggleScrambled" class="my-50">
          “My pet is <strong> {{ getAnswersOne }} </strong> and although he
          likes to <strong> {{ getAnswersTwo }} </strong> , he really hates
          <strong> {{ getAnswersThree }} </strong>.”
        </h3>

        <h3 v-if="toggleScrambled" class="my-50">
          “My pet is <strong> {{ scrambleAnswerOne }} </strong> and although he
          likes to <strong> {{ scrambleAnswerTwo }} </strong> , he really hates
          <strong> {{ scrambleAnswerThree }} </strong>.”
        </h3>

        <v-row>
          <v-col>
            <RetryRefresh :button-text="RetryQuiz" />
          </v-col>
          <v-col>
            <v-btn v-if="!toggleScrambled" @click="runScramble">
              SCRUMBLE
            </v-btn>
            <v-btn v-if="toggleScrambled" @click="resetScramble"> RESET </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-divider />
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { QUESTION_VIEW_STATE } from "@/views/QuestionsView/store";
import { QuestionViewState } from "@/views/QuestionsView/types";
import RetryRefresh from "@/components/RetryRefresh/RetryRefresh.vue";

@Component({
  components: {
    RetryRefresh
  }
})
export default class FinalAnswerView extends Vue {
  RetryQuiz = "Retry Quiz";
  @Getter("getAnswersOne", { namespace: QUESTION_VIEW_STATE })
  getAnswersOne!: QuestionViewState;
  @Getter("getAnswersTwo", { namespace: QUESTION_VIEW_STATE })
  getAnswersTwo!: QuestionViewState;
  @Getter("getAnswersThree", { namespace: QUESTION_VIEW_STATE })
  getAnswersThree!: QuestionViewState;

  scrambleAnswerOne = "";
  scrambleAnswerTwo = "";
  scrambleAnswerThree = "";
  toggleScrambled = false;

  scramble(a: any) {
    a = a.split("");
    for (let b = a.length - 1; 0 < b; b--) {
      const c = Math.floor(Math.random() * (b + 1));
      const d = a[b];
      a[b] = a[c];
      a[c] = d;
    }
    return a.join("");
  }

  runScramble() {
    this.scrambleAnswerOne = this.scramble(this.getAnswersOne);
    this.scrambleAnswerTwo = this.scramble(this.getAnswersTwo);
    this.scrambleAnswerThree = this.scramble(this.getAnswersThree);
    this.toggleScrambled = true;
  }

  resetScramble() {
    this.toggleScrambled = false;
  }
}
</script>

<style lang="scss" scoped>
.my-50 {
  margin: 50px 0;
}
</style>
