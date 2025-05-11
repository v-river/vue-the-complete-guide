<script>
import BaseBadge from "./ui/BaseBadge.vue";

export default {
  components: { BaseBadge },

  props: ["fullName", "infoText", "role"],
};
</script>

<template>
  <section>
    <base-card>
      <template #header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>
