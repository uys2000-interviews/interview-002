import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "quasar/dist/quasar.sass";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

const app = createApp(App);
app.use(Quasar, quasarUserOptions);
app.use(router);
app.mount("#app");
