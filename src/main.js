import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";
import storeConfigs from "./store";

const store = new createStore(storeConfigs);

const app = createApp(App);
app.use(store);
app.mount("#app");
