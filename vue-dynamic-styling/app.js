Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },

  computed: {
    boxBClasses() {
      return { demo: true, active: this.boxBSelected };
    },
  },

  methods: {
    boxSelected(box) {
      this[`box${box}Selected`] = !this[`box${box}Selected`];
    },
  },
}).mount("#styling");
