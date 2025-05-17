<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  components: { StoredResources, AddResource },

  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official vue.js documetation.",
          link: "https://vuejs.org/",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google.",
          link: "https://www.google.com",
        },
      ],
    };
  },

  computed: {
    storedResButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },

    addResButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },

  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },

  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },

    addResource(title, description, url) {
      this.storedResources.unshift({ id: Date.now().toString(), title, description, link: url });
      this.selectedTab = "stored-resources";
    },

    removeResource(resId) {
      // this won't work
      // this.storedResources = this.storedResources.filter((res) => res.id !== resId);
      const index = this.storedResources.findIndex((res) => res.id === resId);
      index > -1 && this.storedResources.splice(index, 1);
    },
  },
};
</script>

<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>
