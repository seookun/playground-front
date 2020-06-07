<template>
  <v-app>
    <v-app-bar
      app
      flat
    >
      <v-toolbar-title
        class="text-uppercase font-weight-medium"
        style="cursor: pointer;"
        @click="refresh()"
      >
        Playground
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        v-for="(menu, i) in menus"
        :key="i"
        :to="menu.to"
        text
      >
        {{ menu.title }}
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menus: [
        { title: 'Board', to: '/board' },
        { title: 'Chat', to: '/chat' },
      ],
    };
  },
  methods: {
    refresh() {
      window.location.replace('/home');
    },
  },
};
</script>
