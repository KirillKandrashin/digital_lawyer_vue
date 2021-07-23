<template>
  <div class="form pt-6">
    <p>ХУЙ</p>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import {notGmail, isEmailAvailable } from "Vue_Auth_Valid_not_working/validators";
import EmailComponent from "./EmailComponent";

export default {
  name: "FormComponent",

  components: {EmailComponent},

  data() {
    return {
      form: {
        email: ""
      }
    };
  },

  validations: {
    form: {
      email: { required, email, notGmail, isEmailAvailable }
    }
  },

  methods: {
    submit() {
      this.$v.form.$touch();
      // if its still pending or an error is returned do not submit
      if (this.$v.form.$pending || this.$v.form.$error) return;
      // to form submit after this
      alert("Form submitted");
    }
  }
};
</script>