<template>
  <v-app>
    <v-main>
      <constrained/>
    </v-main>
  </v-app>
</template>

<script>
import Constrained from './components/constrained.vue';

export default {
  name: 'App',

  components: {
    Constrained,
  },

  data: () => ({
    //
  }),
};
</script>
