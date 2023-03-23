import TheZipInfo from "./components/TheZipInfo.vue";
import TheIpLookup from "./components/TheIpLookup.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: TheZipInfo },
  {
    path: "/ip-lookup",
    component: TheIpLookup,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
