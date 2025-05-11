<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
    // isFavorite: {
    //   type: String,
    //   required: false,
    //   default: "0",
    //   validator: (value) => value === "0" || value === "1",
    // },
  },

  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite: this.isFavorite,
    };
  },

  emits: ["toggle-favorite", "delete"],
  // emits: {
  //   "toggle-favorite": (id) => {
  //     if (id) return true;

  //     console.warn("Event validation failed for event 'toggle-favorite'");
  //     return false;
  //   },
  // },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    // toggleFavorite() {
    //   if (this.friendIsFavorite === "1") {
    //     // this.isFavorite = "0"; - this won't work
    //     this.friendIsFavorite = "0";
    //   } else {
    //     this.friendIsFavorite = "1";
    //   }
    // },

    // toggleFavorite() {
    //   this.friendIsFavorite = !this.friendIsFavorite
    // },

    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>

<template>
  <li>
    <!-- <h2>{{ name }} {{ friendIsFavorite ? "(Favorite)" : "" }}</h2> -->
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? "Hide" : "Show" }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>
