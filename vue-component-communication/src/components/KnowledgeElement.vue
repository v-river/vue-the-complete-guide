<script>
export default {
  props: ["id", "topicName", "description"],

  inject: ["selectTopic"],

  // emits: ["select-topic"],
};
</script>

<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <!-- <button @click="$emit('select-topic', id)">Learn More</button> -->
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>
