import { MutationTree } from "vuex";
import { QuestionViewState } from "@/views/QuestionsView/types";

export const mutations: MutationTree<QuestionViewState> = {
  setAnswerOne(state, questions: string) {
    state.answerOne = questions;
  },
  setAnswerTwo(state, questions: string) {
    state.answerTwo = questions;
  },
  setAnswerThree(state, questions: string) {
    state.answerThree = questions;
  },
  setNumberOfQuestion(state, numberOfQuestion: number) {
    state.currentQuestion = numberOfQuestion;
  }
};
