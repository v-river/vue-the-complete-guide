const app = Vue.createApp({
  data() {
    return {
      title: "Events in <i>Action</i>",
      counter: 0,
      counterChangeMsg: "",
      name: "",
      lastName: "",
      confirmedName: "",
      salary: "",
    };
  },

  computed: {
    fullName() {
      return `${this.confirmedName} ${this.lastName}`;
    },
  },

  watch: {
    counter(newValue, oldValue) {
      const diff = newValue - oldValue;
      const message = diff >= 0 ? "Increased" : "Decreased";
      this.counterChangeMsg = `${message} by ${Math.abs(diff)}`;
    },
  },

  methods: {
    increment(num) {
      this.counter += num;
    },

    decrement(num) {
      this.counter -= num;
    },

    setName(event) {
      this.name = event.target.value;
    },

    confirmName() {
      this.confirmedName = this.name;
    },

    setLastName(event) {
      this.lastName = event.target.value;
    },

    // Using a method call in interpolation - causes rendering
    // even when changes occur in neighboring elements
    // use computed instead
    outputFullName() {
      return `${this.confirmedName} ${this.lastName}`;
    },

    resetInput() {
      this.lastName = "";
    },

    setSalary(sign, event) {
      this.salary = `${sign}${event.target.value}`;
    },

    submitForm() {
      alert("Submitted!");
    },
  },
});

app.mount("#events");
