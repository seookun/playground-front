<template>
  <v-card
    class="mx-auto"
    width="700px"
    outlined
  >
    <v-card-title>
      <v-text-field
        outlined
        dense
        hide-details="auto"
      />
    </v-card-title>
    <v-divider />
    <v-card-text
      style="height: calc(100vh - 237px); overflow: auto;"
    >
      <v-textarea
        outlined
        auto-grow
      />
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-spacer />
      <v-btn
        outlined
        color="primary"
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'BoardCreate',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
