<template>
  <v-alert :value="alert" type="success" transition="scale-transition">
    {{ alertMessage }}
    <v-btn color="primary" @click="redirectToRegistration">Register Now</v-btn>
  </v-alert>
</template>

<script>
export default {
  data() {
    return {
      alert: true,
      alertMessage: "DevFest Sindh 2023 is here! Don't miss out.",
    };
  },
  methods: {
    redirectToRegistration() {
      // Add your logic to redirect users to the registration page here
      // You can use window.location or router.push() depending on your setup
    },
  },
};
</script>
