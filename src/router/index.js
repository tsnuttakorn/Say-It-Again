import { createRouter, createWebHashHistory } from "vue-router"

import Home from "../views/Home.vue"
import Numbers from "../views/Numbers.vue"
import Days from "../views/Days.vue"
import Months from "../views/Months..vue"
import Daily from "../views/Daily.vue"

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/numbers", component: Numbers },
    { path: "/days", component: Days },
    { path: "/months", component: Months },
    { path: "/daily", component: Daily },
  ],
})
