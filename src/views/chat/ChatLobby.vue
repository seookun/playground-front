<template>
  <v-form
    v-model="valid"
  >
    <v-card
      outlined
      class="mx-auto"
      width="500"
    >
      <V-card-title>
        A Simple web chat
      </V-card-title>
      <v-card-text>
        <v-text-field
          v-model="roomName"
          label="Room"
          :rules="[(v) => !!v || 'Room is required']"
        />
        <v-text-field
          v-model="userName"
          label="Name"
          :rules="[(v) => !!v || 'Name is required']"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          :disabled="!valid"
          outlined
          color="primary"
          @click="join"
        >
          Join
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>
<script>
export default {
  name: 'ChatLobby',
  data() {
    return {
      valid: false,
      roomName: '',
      userName: '',
    };
  },
  methods: {
    join() {
      const { roomName, userName } = this;
      this.$router.push(`/chat/room/${roomName}/${userName}`);
    },
  },
};
</script>
