<template>
  <v-app>
    <v-app-bar
      dense
      flat
    >
      <v-toolbar-title class="text-uppercase font-weight-medium">
        Playground
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data() {
    return {

    };
  },
  created() {
    console.log(this);
  },
};
</script>
