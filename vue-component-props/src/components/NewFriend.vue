<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },

  emits: ["add-contact"],

  methods: {
    submitData() {
      this.$emit("add-contact", this.enteredName, this.enteredPhone, this.enteredEmail);
    },
  },
};
</script>

<template>
  <form @submit.prevent="submitData">
    <div><label>Name</label><input type="text" v-model="enteredName" /></div>
    <div><label>Phone</label><input type="tel" v-model="enteredPhone" /></div>
    <div><label>E-Mail</label><input type="email" v-model="enteredEmail" /></div>
    <div><button>Add Contact</button></div>
  </form>
</template>
