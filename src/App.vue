<template>
  <v-app>
    <v-app-bar
      app
      flat
    >
      <v-toolbar-title class="text-uppercase font-weight-medium">
        Playground
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
