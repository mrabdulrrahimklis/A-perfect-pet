import { ActionTree } from "vuex";
import { RootState } from "@/store/RootStore";
import { QuestionViewState } from "@/views/QuestionsView/types";

export const actions: ActionTree<QuestionViewState, RootState> = {
  saveAnswerOne(context, answer: string): void {
    context.commit("setAnswerOne", answer);
  },
  saveAnswerTwo(context, answer: string): void {
    context.commit("setAnswerTwo", answer);
  },
  saveAnswerThree(context, answer: string): void {
    context.commit("setAnswerThree", answer);
  },
  setNumberOfQuestion(context, numberOfQuestion: number): void {
    context.commit("setNumberOfQuestion", numberOfQuestion);
  }
};
