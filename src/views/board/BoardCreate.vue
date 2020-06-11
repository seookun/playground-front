<template>
  <v-card
    class="mx-auto"
    width="700px"
    outlined
  >
    <v-card-title>
      <v-text-field
        v-model="board.title"
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
        v-model="board.content"
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
        @click="onWrite"
      >
        Write
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import axios from 'axios';

export default {
  name: 'BoardCreate',
  data() {
    return {
      board: {
        title: '',
        content: '',
      },
    };
  },
  methods: {
    async onWrite() {
      const res = await axios.post('http://localhost:3000/board/create', this.board);
      if (res) {
        this.$router.push(`/board/${res.data.id}`);
      }
    },
  },
};
</script>
