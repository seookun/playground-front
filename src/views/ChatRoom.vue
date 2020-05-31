<template>
  <v-card
    outlined
    class="mx-auto"
    width="1000"
  >
    <V-card-title>
      {{ roomName }}
      <v-spacer />
      <v-btn
        outlined
        color="primary"
        to="/chat/lobby"
      >
        Leave
      </v-btn>
    </V-card-title>
    <v-divider />
    <v-card-text
      ref="chat-body"
      style="height: calc(100vh - 270px); overflow: auto;"
      @scroll="onScroll"
    >
      <v-list
        dense
      >
        <template v-for="(message, i) in messages">
          <message
            :key="i"
            :item="message"
          />
        </template>
      </v-list>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-text-field
        v-model="text"
        class="mx-6"
        label="Message"
        append-outer-icon="mdi-send"
        @keydown.enter="sendMessage"
        @click:append-outer="sendMessage"
      />
    </v-card-actions>
  </v-card>
</template>
<script>
import io from 'socket.io-client';
import Message from '@/components/Message';

let socket = null;

export default {
  name: 'ChatRoom',
  components: {
    Message,
  },
  props: {
    roomName: { type: String, required: true },
    userName: { type: String, required: true },
  },
  data() {
    return {
      bottom: true,
      text: '',
      messages: [],
    };
  },
  mounted() {
    socket = io('http://localhost:3000');

    socket.on('connect', () => {
      const { roomName, userName } = this;
      socket.emit('join', { roomName, userName });

      socket.on('message', (payload) => {
        // eslint-disable-next-line no-param-reassign
        this.messages.push({ me: payload.userName === this.userName, ...payload });

        if (this.bottom) {
          this.$nextTick(() => {
            this.$refs['chat-body'].scrollTop = 9999;
          });
        }
      });
    });
  },
  destroyed() {
    if (socket) {
      socket.close();
      socket = null;
    }
  },
  methods: {
    sendMessage() {
      if (this.text.length > 0) {
        const payload = {
          roomName: this.roomName,
          userName: this.userName,
          text: this.text,
          ts: Date.now(),
        };

        this.text = '';
        this.bottom = true;

        socket.emit('message', payload);
      }
    },
    onScroll(e) {
      const { scrollHeight, scrollTop, clientHeight } = e.target;
      this.bottom = Math.abs(scrollHeight - (scrollTop + clientHeight)) < 1;
    },
  },
};
</script>
