<template>
  <div class="input1">
    <div class="text_email">Эл/почта</div>
    <input
        type="email"
        class="input"
        v-model="email"
        placeholder="user@yahoo.com"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    v: {
      type: Object,
      required: true
    }
  },
  computed: {
    email: {
      get() {
        return this.value;
      },
      set(value) {
        this.v.$touch();
        this.$emit("input", value);
      }
    }
  }
};
</script>