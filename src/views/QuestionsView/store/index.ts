import { RootState } from "@/store/RootStore";
import { Module } from "vuex";
import { mutations } from "@/views/QuestionsView/store/mutations";
import { actions } from "@/views/QuestionsView/store/actions";
import { getters } from "@/views/QuestionsView/store/getters";
import { QuestionViewState } from "@/views/QuestionsView/types";

export const state: QuestionViewState = {
  answerOne: null,
  answerTwo: null,
  answerThree: null,
  currentQuestion: 0
};

export const QUESTION_VIEW_STATE = "questionsViewState";

const namespaced = true;

export const questionsViewState: Module<QuestionViewState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
