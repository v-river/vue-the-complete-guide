<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: { ErrorAlert },

  data() {
    return {
      inputIsInvalid: false,
    };
  },

  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (!enteredValue) {
        this.inputIsInvalid = true;
      }
    },

    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
      <ErrorAlert v-if="inputIsInvalid">
        <h2>Input is invalid</h2>
        <p>Please enter at least more characters</p>
        <button @click="confirmError">OKey</button>
      </ErrorAlert>
    </teleport>
  </div>
</template>
