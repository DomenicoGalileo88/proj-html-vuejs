import Vue from "vue";
import App from "./App.vue";

/* Font Awesome icons*/
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons 👇 QUI AGGIUNGI LE ICONE che vuoi usare in camelCase */
import {
  faUserSecret,
  faMagnifyingGlass,
  faFolder,
  
} from "@fortawesome/free-solid-svg-icons";

import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library 👇 QUI AGGIUNGI IL NOME DELL'ICONA in camelCase*/
library.add(
  faUserSecret,
  faMagnifyingGlass,
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
  faFolder,
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

/* bootstrap */
const bootstrap = require("bootstrap");
Vue.use(bootstrap);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
