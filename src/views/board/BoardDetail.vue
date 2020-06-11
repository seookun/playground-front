<template>
  <v-card
    class="mx-auto"
    width="700px"
    outlined
  >
    <v-card-title>
      <span class="title">
        {{ board.title }}
      </span>
      <v-spacer />
      <span class="caption mr-2">
        {{ board.author }}
      </span>
      <span class="caption">
        {{ time(board.createTime) }}
      </span>
    </v-card-title>
    <v-divider />
    <v-card-text
      style="height: calc(100vh - 230px); overflow: auto;"
    >
      {{ board.content }}
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-spacer />
      <v-btn
        outlined
        color="primary"
        :to="`/board/edit/${id}`"
      >
        Edit
      </v-btn>
      <v-btn
        outlined
        @click="onDelete()"
      >
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'BoardDetail',
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      today: moment().endOf('day'),
      board: {},
    };
  },
  async created() {
    const res = await axios.get(`http://localhost:3000/board/${this.id}`);
    if (res) {
      const { title, content, createTime } = res.data;
      this.board = { title, content, createTime };
    }
  },
  methods: {
    time(ts) {
      return moment(ts).format('YYYY.MM.DD HH:mm');
    },
    async onDelete() {
      const res = await axios.post(`http://localhost:3000/board/delete/${this.id}`);
      if (res) {
        this.$router.push('/board');
      }
    },
  },
};
</script>
