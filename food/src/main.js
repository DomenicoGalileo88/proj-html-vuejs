import Vue from "vue";
import App from "./App.vue";

import "@fontsource/vidaloka";
import "@fontsource/vidaloka/400.css";


/* Font Awesome icons*/
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons 👇 QUI AGGIUNGI LE ICONE che vuoi usare in camelCase */
import {
  faUserSecret,
  faMagnifyingGlass,
  faFolder,
  faBookOpen,
  faEarthAsia,
  faLocationDot,
  faPhoneFlip,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faComment,
} from "@fortawesome/free-regular-svg-icons";

import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

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
  faBookOpen,
  faComment,
  faEarthAsia,
  faPinterestP,
  faLocationDot,
  faPhoneFlip,
  faEnvelope,
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
