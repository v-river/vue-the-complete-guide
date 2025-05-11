<script>
export default {
  data() {
    return {
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
};
</script>

<template>
  <ul>
    <li v-for="resource in storedResources" :key="resource.id">
      {{ resource.title }} {{ resource.description }} {{ resource.link }}
    </li>
  </ul>
</template>
