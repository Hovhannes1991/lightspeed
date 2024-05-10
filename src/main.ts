import {createApp} from "vue";
import {createPinia} from "pinia";
import {router} from "@/router/index.ts";
import "./style.css";
import "./services/axios-config.ts";

import PrimeVue from "primevue/config";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/aura-light-green/theme.css";

import "vue3-toastify/dist/index.css";

import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia()

app.use(pinia);
app.use(router);
app.use(PrimeVue);
app.mount('#app')
