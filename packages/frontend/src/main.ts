import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { router } from "./router";
import "@/assets/index.css";
// import type { IShare } from "share";

const app = createApp(App);

// setup fake backend
import { fakeBackend } from "@/helpers";
fakeBackend();

app.use(createPinia());
app.use(router);
app.mount("#app");
