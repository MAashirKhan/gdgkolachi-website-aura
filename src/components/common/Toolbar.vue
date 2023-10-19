<template>
  <v-toolbar app color="white" scroll-off-screen>
    <v-container fluid class="py-0">
      <v-layout item-center justify-center row fill-height class="my-0 py-0">
        <v-flex id="toolbar-element" xs12 md10 sm10 lg10 class="py-0 my-0">
          <v-toolbar-side-icon class="hidden-md-and-up" @click="toggleDrawer" />

          <v-toolbar-title class="ml-0 pl-1 mr-1">
            <router-link
              :to="{ name: 'home' }"
              class="google-font"
              style="text-decoration: none; color: #656d72"
            >
              <v-layout
                align-center
                justify-center
                class="logo-head d-flex flex-row"
              >
                <v-img
                  :src="require('@/assets/img/logo.png')"
                  :lazy-src="require('@/assets/img/logo.png')"
                  width="52px"
                  height="30px"
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
                <div v-if="!isMobile">
                  {{ ChapterDetails.ChapterName }}
                </div>
              </v-layout>
            </router-link>
          </v-toolbar-title>
          <v-spacer />
          <template v-if="!isEventPage">
            <v-btn
              v-for="(link, i) in links"
              :key="i"
              :to="link.to"
              class="ml-0 google-font hidden-sm-and-down"
              style="text-transform: capitalize"
              flat
              @click="onClick($event, link)"
            >
              {{ link.text }}
            </v-btn>
          </template>
          <template v-else>
            <v-btn
              class="ma-0 google-font elevation-0 mr-2"
              color="devfest-theme"
              style="
                text-transform: capitalize;
                border-radius: 12px;
                font-weight: 600;
              "
            >
              Register here <template v-if="!isMobile"> - it's free</template> !
              &nbsp;

              <template v-if="!isMobile">
                <v-icon>fa fa-caret-right</v-icon>
              </template>
            </v-btn>
          </template>
          <!-- <v-btn
      v-if="!user.loggedIn"
      class="ml-0 google-font hidden-sm-and-down"
      style="text-transform: capitalize;"
      flat
      @click="signin"
    >Signin</v-btn>
    <Menu v-else :userData="user.data" @userLogout="logout" /> -->
        </v-flex>
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
// import Menu from "../helper/Menu";
// Utilities
import { mapGetters, mapMutations } from "vuex";
import firebase from "firebase";

export default {
  data() {
    return {
      ChapterDetails: ChapterDetails,
      menu: false,
    };
  },
  computed: {
    ...mapGetters(["links", "user"]),
    isEventPage() {
      return ["event"].includes(this.$route.name);
    },
    isMobile() {
      return window.innerWidth < 500;
    },
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    },
    // signin() {
    //   var provider = new firebase.auth.GoogleAuthProvider();

    //   firebase
    //     .auth()
    //     .signInWithPopup(provider)
    //     .then(result => {
    //       // token needs to be set in localStorage
    //       // var token = result.credential.accessToken;
    //       // let user = result.user;

    //       //will see if we need to manually set state. Otherwise main.js file will set it
    //       // this.setLoggedIn(true);
    //       // this.setUser(user);
    //     })
    //     .catch(error => {
    //       // Handle Errors here.
    //       // var errorCode = error.code;
    //       // var errorMessage = error.message;
    //       // The email of the user's account used.
    //       // var email = error.email;
    //       // The firebase.auth.AuthCredential type that was used.
    //       // var credential = error.credential;

    //       alert(error);
    //     });
    // },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function () {
          // this.setLoggedIn(false);
        })
        .catch(function (error) {
          alert(error);
        });
    },
  },
};
</script>

<style lang="css">
#toolbar-element {
  display: flex;
  height: 100%;
  align-items: center;
}
.v-toolbar__content {
  padding: 0;
}
</style>
