<template>
  <v-container>
    <v-layout
      class="agenda-section"
      wrap
      align-center
      justify-center
      row
      fill-height
    >
      <v-flex xs12 sm7 md8 lg8 xl8 class="pa-3">
        <p
          class="google-font mb-1"
          style="font-weight: 350; color: #0a0a0a; font-size: 300%"
        >
          <b>Agenda</b>
        </p>
        <p
          class="google-font mt-0"
          style="color: #727272; font-weight: 500; font-size: 180%"
        >
          Devfest Sindh <span style="color: #fff">2023</span>
        </p>
        <p class="google-font" style="font-size: 110%">
          {{ chapterDetails.ChapterShortDescription }}
        </p>
      </v-flex>
      <v-flex xs12 sm5 md3 lg3 xl3 class="text-xs-center pa-3">
        <v-img
          :src="require('@/assets/img/gdgkolachilogo.png')"
          :lazy-src="require('@/assets/img/gdgkolachilogo.png')"
          width="100%"
        >
          <v-layout
            slot="placeholder"
            fill-height
            align-center
            justify-center
            ma-0
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-layout>
        </v-img>
      </v-flex>
    </v-layout>
    <div class="agenda-details">
      <v-btn
        :href="agenda"
        round
        color="black"
        style="
          text-transform: capitalize;
          border-radius: 5px;
          text-transform: capitalize;
        "
        outline
        class="ml-0"
        dark
      >
        Day 01 - HYDERABAD
      </v-btn>
      <v-btn
        :href="agenda"
        round
        color="black"
        style="
          text-transform: capitalize;
          border-radius: 5px;
          text-transform: capitalize;
        "
        outline
        class="ml-0"
        dark
      >
        Day 02 - KARACHI
      </v-btn>
      <v-btn
        :href="agenda"
        round
        color="black"
        style="
          text-transform: capitalize;
          border-radius: 5px;
          text-transform: capitalize;
        "
        outline
        class="ml-0"
        dark
      >
        Day 03 - KARACHI
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
export default {
  data() {
    return {
      chapterDetails: ChapterDetails,
    };
  },
};
</script>

<style>
.agenda-section {
  background: #ffcf10;
  border: 2px solid black;
  border-radius: 20px;
  padding-top: 10px !important;
}
.agenda-details {
  margin-top: 20px;
}
.card-section {
  margin: auto;
  height: 20rem;
}
</style>
