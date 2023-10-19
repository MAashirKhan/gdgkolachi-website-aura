<template>
  <div :id="pageName">
    <v-container fluid class="">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <template v-if="pageName === 'devfest-2023'">
            <devfest2023 />
          </template>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import devfest2023 from "../../components/devfest/devfest2023.vue";

export default {
  name: "Event",
  components: {
    devfest2023,
  },
  computed: {
    pageName() {
      return this.$route.params.eventId;
    },
  },
};
</script>

<style scoped>
#devfest-2023 {
  background-color: #fdf9e6;
  height: 100%;
}
</style>
