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
        @click="onSave()"
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import axios from 'axios';

export default {
  name: 'BoardEdit',
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      board: {
        title: '',
        content: '',
      },
    };
  },
  async created() {
    const res = await axios.get(`http://localhost:3000/board/${this.id}`);
    if (res) {
      const {
        id, title, content, createTime,
      } = res.data;
      this.board = {
        id, title, content, createTime,
      };
    }
  },
  methods: {
    async onSave() {
      const res = await axios.post('http://localhost:3000/board/edit', this.board);
      if (res) {
        this.$router.push(`/board/${this.id}`);
      }
    },
  },
};
</script>
