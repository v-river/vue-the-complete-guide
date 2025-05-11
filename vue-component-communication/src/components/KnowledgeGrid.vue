<script>
import KnowledgeElement from "./KnowledgeElement.vue";

export default {
  components: { KnowledgeElement },

  // props: ["topics"],

  inject: ["topics"],

  // emits: ["select-topic"],
};
</script>

<template>
  <ul>
    <!-- <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-element> -->
     <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>
