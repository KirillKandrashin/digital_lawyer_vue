import Vuelidate from "vuelidate";
import "./window.cssss";
import Vue from "vue";
import Valid from "./Valid";

Vue.config.productionTip = false;

Vue.use(Vuelidate);

/* eslint-disable no-new */
new Vue({
    el: "#app2",
    components: { Valid },
    template: "<Valid/>"
});