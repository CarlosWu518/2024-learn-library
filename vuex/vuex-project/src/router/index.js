import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/Home",
      name: "Home",
      component: () => import("../views/Home.vue")
    }
  ]
})