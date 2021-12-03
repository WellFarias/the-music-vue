<template>
  <v-app id="back">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
});
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
}

#back {
  background-color: #ededed;
}

</style>
