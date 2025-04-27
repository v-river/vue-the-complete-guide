const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
      userMessage: "This is ref!",
    };
  },

  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },

    setText() {
      this.message = this.currentUserInput;
    },

    setUserText() {
      this.userMessage = this.$refs.userText.value;
    },
  },

  beforeCreate() {
    console.log("beforeCreate()");
  },

  created() {
    console.log("created()");
  },

  beforeMount() {
    console.log("beforeMount()");
  },

  mounted() {
    console.log("mounted()");
  },

  beforeUpdate() {
    console.log("beforeUpdate()");
  },

  updated() {
    console.log("updated()");
  },

  beforeUnmount() {
    console.log("beforeUnmount()");
  },

  unmounted() {
    console.log("unmounted()");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 10000);

const appTwo = Vue.createApp({
  template: `
    <p>{{ name }}</p>
  `,

  data() {
    return {
      name: "Bob",
    };
  },
});

appTwo.mount("#app-two");
