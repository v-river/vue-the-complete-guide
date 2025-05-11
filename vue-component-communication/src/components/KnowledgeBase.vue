<script>
import KnowledgeGrid from "./KnowledgeGrid.vue";

export default {
  components: { KnowledgeGrid },

  // props: ["topics"],

  // emits: ["select-topic"],
};
</script>

<template>
  <section>
    <h2>Select a Topic</h2>
    <!-- <knowledge-grid :topics="topics" @select-topic="$emit('select-topic', $event)"></knowledge-grid> -->
    <knowledge-grid></knowledge-grid>
  </section>
</template>
