<template>
  <v-card
    class="mx-auto"
    width="700px"
    outlined
  >
    <v-card-title>
      Board List
    </v-card-title>
    <v-simple-table
      fixed-header
      height="calc(100vh - 230px)"
    >
      <template>
        <thead>
          <tr>
            <th class="text-left">
              Title
            </th>
            <th
              class="text-center"
              style="width: 100px"
            >
              Author
            </th>
            <th
              class="text-center"
              style="width: 100px"
            >
              Create Time
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="board in boards"
            :key="board.id"
            style="cursor: pointer;"
            @click="$router.push(`/board/${board.id}`)"
          >
            <td class="text-left">
              {{ board.title }}
            </td>
            <td class="text-center">
              {{ board.author }}
            </td>
            <td class="text-center">
              {{ time(board.createTime) }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-card-actions>
      <v-spacer />
      <v-btn
        outlined
        color="primary"
        to="/board/create"
      >
        Write
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import moment from 'moment';

export default {
  name: 'BoardList',
  data() {
    return {
      today: moment().endOf('day'),
      boards: [
        {
          id: '1', title: '테스트a', author: '나나누', createTime: Date.now(),
        },
        {
          id: '2', title: '테스트', author: '나나누', createTime: Date.now(),
        },
        {
          id: '3', title: '테스트', author: '나나누', createTime: Date.now(),
        },
        {
          id: '4', title: '테스트', author: '나나누', createTime: Date.now(),
        },
      ],
    };
  },
  methods: {
    time(ts) {
      const today = this.today.diff(moment(ts), 'days') < 1;
      return moment(ts).format(today ? 'HH:mm' : 'YYYY.MM.DD');
    },
  },
};
</script>
