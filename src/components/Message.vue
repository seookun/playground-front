<template>
  <v-subheader
    v-if="item.header"
    style="font-size: 1.0em;"
    v-text="item.text"
  />
  <v-list-item
    v-else-if="item.me"
    class="px-2 py-0"
    style="float: right; clear: both; max-width: 70%;"
  >
    <v-list-item-content
      class="mb-2 pa-0"
    >
      <v-list-item-title>
        <p
          class="ma-0 pa-3 primary lighten-4"
          style="white-space: normal; font-size: 1.2em;"
        >
          {{ item.text }}
        </p>
        <span style="font-size: 0.7em">
          {{ time(item.ts) }}
        </span>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <v-list-item
    v-else
    class="px-2 py-0"
    style="float: left; clear: both; max-width: 60%;"
  >
    <v-list-item-content
      class="mb-2 pa-0"
    >
      <v-list-item-title>
        <span style="font-size: 0.9em">
          {{ item.userName }}
        </span>
      </v-list-item-title>
      <v-list-item-title>
        <p
          class="pa-3 mb-0 grey lighten-2"
          style="white-space: normal; font-size: 1.2em;"
        >
          {{ item.text }}
        </p>
        <span style="font-size: 0.7em; float: right">
          {{ time(item.ts) }}
        </span>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
import moment from 'moment';

export default {
  name: 'Message',
  props: {
    item: { type: Object, required: true },
  },
  methods: {
    time(ts) {
      return moment(ts).format('LT');
    },
  },
};
</script>
