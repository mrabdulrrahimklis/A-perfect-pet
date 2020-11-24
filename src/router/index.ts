import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { RouterName, RouterPath } from "@/router/types";
import StartView from "@/views/StartView/StartView.vue";
import QuestionsView from "@/views/QuestionsView/QuestionsView.vue";
import FinalAnswerView from "@/views/FinalAnswerView/FinalAnswerView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: RouterPath.StartView,
    name: RouterName.StartView,
    component: StartView
  },
  {
    path: RouterPath.QuestionView,
    name: RouterName.QuestionView,
    component: QuestionsView
  },
  {
    path: RouterPath.FinalAnswerView,
    name: RouterName.FinalAnswerView,
    component: FinalAnswerView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
