<template>
  <div class="event-page">
    <v-snackbar v-model="alertState" bottom left>
      {{ alertMsg }}
      <v-btn color="pink" flat @click="alertState = false">Close</v-btn>
    </v-snackbar>

    <!-- <div class="hero-section">
      <div class="header">DevFest Sindh 2023</div>
    </div> -->

    <!--Agenda-->
    <div>
      <devfestagenda />
    </div>

    <!--End of Agenda-->

    <div class="registration-form">
      <template v-if="!formSubmittedSuccess">
        <div class="header">Registration Form</div>
        <form :disabled="isLoading">
          <v-container class="pa-0" grid-list-md text-xs-center>
            <v-layout row wrap>
              <v-flex xs6>
                <v-text-field
                  color="devfest-theme"
                  v-model="firstname"
                  :error-messages="firstNameErrors"
                  label="First Name"
                  required
                  solo
                  flat
                  class="form-border"
                  @input="$v.firstname.$touch()"
                  @blur="$v.firstname.$touch()"
                ></v-text-field>
              </v-flex>

              <v-flex xs6>
                <v-text-field
                  color="devfest-theme"
                  v-model="lastname"
                  :error-messages="lastNameErrors"
                  label="Last Name"
                  required
                  solo
                  flat
                  class="form-border"
                  @input="$v.lastname.$touch()"
                  @blur="$v.lastname.$touch()"
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field
                  color="devfest-theme"
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                  solo
                  flat
                  class="form-border"
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field
                  color="devfest-theme"
                  v-model="phonenumber"
                  :error-messages="phoneNumberErrors"
                  label="Phone Number"
                  required
                  solo
                  flat
                  class="form-border"
                  @input="$v.phonenumber.$touch()"
                  @blur="$v.phonenumber.$touch()"
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field
                  mask="##### - ####### - #"
                  color="devfest-theme"
                  v-model="cnic"
                  :error-messages="cnicErrors"
                  label="CNIC"
                  required
                  solo
                  flat
                  class="form-border"
                  @input="$v.cnic.$touch()"
                  @blur="$v.cnic.$touch()"
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-select
                  color="devfest-theme"
                  v-model="city"
                  :items="cities"
                  :error-messages="cityErrors"
                  label="City"
                  required
                  solo
                  flat
                  class="form-border"
                  @change="$v.city.$touch()"
                  @blur="$v.city.$touch()"
                ></v-select>
              </v-flex>

              <v-flex xs12>
                <v-select
                  color="devfest-theme"
                  v-model="ticket"
                  :items="tickets"
                  :error-messages="ticketErrors"
                  label="Ticket"
                  required
                  solo
                  flat
                  chips
                  multiple
                  class="form-border"
                  @change="$v.ticket.$touch()"
                  @blur="$v.ticket.$touch()"
                ></v-select>
              </v-flex>

              <v-flex xs12>
                <v-checkbox
                  class="ma-0"
                  color="devfest-theme"
                  v-model="agreetoterms"
                  :error-messages="agreeToTermsErrors"
                  required
                  @change="$v.agreetoterms.$touch()"
                  @blur="$v.agreetoterms.$touch()"
                >
                  <template v-slot:label>
                    <div>
                      By checking this box I acknowledge GDG Kolachi's Privacy
                      Policy and consent to GDG Kolachi’s Event Terms and
                      Conditions.
                    </div>
                  </template>
                </v-checkbox>
              </v-flex>

              <v-flex xs12>
                <v-btn
                  :disabled="!$v.$dirty || $v.$error"
                  class="google-font elevation-0 form-border"
                  color="devfest-theme"
                  block
                  style="
                    text-transform: capitalize;
                    border-radius: 12px;
                    font-weight: 600;
                    height: 44px;
                  "
                  @click="onSubmitFormHandler"
                >
                  Register here - it's free! &nbsp;

                  <v-icon>fa fa-caret-right</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </form>
      </template>
      <template v-else>
        <div class="confirmation">
          <div class="header">Thank you for Registering</div>

          <p class="text-center">
            The details to redeem your ticket have been sent to your email.
            Check your inbox for more information.
          </p>

          <p class="text-center" style="font-size: 2rem; font-weight: 700">
            OR
          </p>

          <p class="text-center">
            You can view your ticket by clicking the
            <b>"Add to Google Wallet"</b>
            button below.
          </p>
          <v-btn id="google-wallet-btn" flat :href="ticketLink" target="_blank">
            <svg
              width="240"
              height="26"
              viewBox="0 0 240 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="google-wallet-graphics">
                <g id="wallet">
                  <path
                    id="Vector"
                    d="M30 10H0V5C0 2.2857 2.2018 0 4.8165 0H25.1835C27.7982 0 30 2.2857 30 5V10Z"
                    fill="#34A853"
                  />
                  <path
                    id="Vector_2"
                    d="M30 14.0527H0V9.05273C0 6.33843 2.2018 4.05273 4.8165 4.05273H25.1835C27.7982 4.05273 30 6.33843 30 9.05273V14.0527Z"
                    fill="#FBBC04"
                  />
                  <path
                    id="Vector_3"
                    d="M30 18.2461H0V13.2461C0 10.5318 2.2018 8.24609 4.8165 8.24609H25.1835C27.7982 8.24609 30 10.5318 30 13.2461V18.2461Z"
                    fill="#EA4335"
                  />
                  <path
                    id="Vector_4"
                    d="M0 11.2752L19.0411 15.6789C21.2329 16.2294 23.6986 15.6789 25.4795 14.3028L30 11V21.3211C30 23.9358 27.8082 26 25.2055 26H4.7945C2.1918 26 0 23.9358 0 21.3211V11.2752Z"
                    fill="url(#paint0_linear_75_15)"
                  />
                </g>
                <g id="text">
                  <path
                    id="Vector_5"
                    d="M42.2998 19.9997L47.6998 5.67969H50.1998L55.6198 19.9997H53.1998L51.8798 16.3197H46.0398L44.7198 19.9997H42.2998ZM48.3598 9.89969L46.7798 14.2797H51.1398L49.5598 9.89969L49.0198 8.25969H48.8998L48.3598 9.89969ZM61.2526 20.3197C60.3326 20.3197 59.4993 20.093 58.7526 19.6397C58.0193 19.173 57.4326 18.533 56.9926 17.7197C56.5659 16.893 56.3526 15.953 56.3526 14.8997C56.3526 13.8464 56.5659 12.913 56.9926 12.0997C57.4326 11.2864 58.0193 10.6464 58.7526 10.1797C59.4993 9.71299 60.3326 9.47969 61.2526 9.47969C62.0393 9.47969 62.7126 9.65299 63.2726 9.99969C63.8459 10.3464 64.2659 10.7397 64.5326 11.1797H64.6526L64.5326 9.75969V5.67969H66.6726V19.9997H64.6526V18.6397H64.5326C64.2659 19.0797 63.8459 19.473 63.2726 19.8197C62.7126 20.153 62.0393 20.3197 61.2526 20.3197ZM61.5726 18.3397C62.1059 18.3397 62.6059 18.1997 63.0726 17.9197C63.5526 17.6397 63.9326 17.2464 64.2126 16.7397C64.5059 16.2197 64.6526 15.6064 64.6526 14.8997C64.6526 14.193 64.5059 13.5864 64.2126 13.0797C63.9326 12.5597 63.5526 12.1597 63.0726 11.8797C62.6059 11.5997 62.1059 11.4597 61.5726 11.4597C61.0393 11.4597 60.5393 11.5997 60.0726 11.8797C59.6059 12.1597 59.2259 12.5597 58.9326 13.0797C58.6393 13.5864 58.4926 14.193 58.4926 14.8997C58.4926 15.6064 58.6393 16.2197 58.9326 16.7397C59.2259 17.2464 59.6059 17.6397 60.0726 17.9197C60.5393 18.1997 61.0393 18.3397 61.5726 18.3397ZM73.4792 20.3197C72.5592 20.3197 71.7258 20.093 70.9792 19.6397C70.2458 19.173 69.6592 18.533 69.2192 17.7197C68.7925 16.893 68.5792 15.953 68.5792 14.8997C68.5792 13.8464 68.7925 12.913 69.2192 12.0997C69.6592 11.2864 70.2458 10.6464 70.9792 10.1797C71.7258 9.71299 72.5592 9.47969 73.4792 9.47969C74.2658 9.47969 74.9392 9.65299 75.4992 9.99969C76.0725 10.3464 76.4925 10.7397 76.7592 11.1797H76.8792L76.7592 9.75969V5.67969H78.8992V19.9997H76.8792V18.6397H76.7592C76.4925 19.0797 76.0725 19.473 75.4992 19.8197C74.9392 20.153 74.2658 20.3197 73.4792 20.3197ZM73.7992 18.3397C74.3325 18.3397 74.8325 18.1997 75.2992 17.9197C75.7792 17.6397 76.1592 17.2464 76.4392 16.7397C76.7325 16.2197 76.8792 15.6064 76.8792 14.8997C76.8792 14.193 76.7325 13.5864 76.4392 13.0797C76.1592 12.5597 75.7792 12.1597 75.2992 11.8797C74.8325 11.5997 74.3325 11.4597 73.7992 11.4597C73.2658 11.4597 72.7658 11.5997 72.2992 11.8797C71.8325 12.1597 71.4525 12.5597 71.1592 13.0797C70.8658 13.5864 70.7192 14.193 70.7192 14.8997C70.7192 15.6064 70.8658 16.2197 71.1592 16.7397C71.4525 17.2464 71.8325 17.6397 72.2992 17.9197C72.7658 18.1997 73.2658 18.3397 73.7992 18.3397ZM87.1918 17.0397V11.6797H85.4118V9.79969H87.1918V6.91969H89.3518V9.79969H91.8518V11.6797H89.3518V16.5797C89.3518 17.0864 89.4518 17.473 89.6518 17.7397C89.8648 18.0064 90.2178 18.1397 90.7118 18.1397C90.9648 18.1397 91.1778 18.1064 91.3518 18.0397C91.5378 17.973 91.7248 17.8797 91.9118 17.7597V19.8597C91.6848 19.953 91.4448 20.0264 91.1918 20.0797C90.9378 20.133 90.6378 20.1597 90.2918 20.1597C89.3448 20.1597 88.5918 19.8864 88.0318 19.3397C87.4718 18.7797 87.1918 18.013 87.1918 17.0397ZM98.3328 20.3197C97.2798 20.3197 96.3528 20.0797 95.5528 19.5997C94.7528 19.1197 94.1268 18.473 93.6728 17.6597C93.2198 16.8464 92.9928 15.9264 92.9928 14.8997C92.9928 13.8864 93.2198 12.973 93.6728 12.1597C94.1268 11.333 94.7528 10.6797 95.5528 10.1997C96.3528 9.71969 97.2798 9.47969 98.3328 9.47969C99.3728 9.47969 100.293 9.71969 101.093 10.1997C101.893 10.6797 102.52 11.333 102.973 12.1597C103.427 12.973 103.653 13.8864 103.653 14.8997C103.653 15.9264 103.427 16.8464 102.973 17.6597C102.52 18.473 101.893 19.1197 101.093 19.5997C100.293 20.0797 99.3728 20.3197 98.3328 20.3197ZM98.3328 18.3397C98.8928 18.3397 99.4128 18.2064 99.8928 17.9397C100.373 17.6597 100.76 17.2664 101.053 16.7597C101.36 16.2397 101.513 15.6197 101.513 14.8997C101.513 14.1797 101.36 13.5664 101.053 13.0597C100.76 12.5397 100.373 12.1464 99.8928 11.8797C99.4128 11.5997 98.8928 11.4597 98.3328 11.4597C97.7728 11.4597 97.2468 11.5997 96.7528 11.8797C96.2728 12.1464 95.8798 12.5397 95.5728 13.0597C95.2798 13.5664 95.1328 14.1797 95.1328 14.8997C95.1328 15.6197 95.2798 16.2397 95.5728 16.7597C95.8798 17.2664 96.2728 17.6597 96.7528 17.9397C97.2468 18.2064 97.7728 18.3397 98.3328 18.3397Z"
                    fill="white"
                  />
                  <path
                    id="Vector_6"
                    d="M118.4 20.3194C117.373 20.3194 116.407 20.1327 115.5 19.7594C114.607 19.3861 113.813 18.8661 113.12 18.1994C112.427 17.5194 111.88 16.7261 111.48 15.8194C111.093 14.8994 110.9 13.9061 110.9 12.8394C110.9 11.7727 111.093 10.7861 111.48 9.87937C111.88 8.95937 112.42 8.16607 113.1 7.49937C113.793 6.81937 114.593 6.29267 115.5 5.91937C116.407 5.54607 117.373 5.35938 118.4 5.35938C119.493 5.35938 120.5 5.55267 121.42 5.93937C122.353 6.32607 123.133 6.86607 123.76 7.55937L122.24 9.05937C121.773 8.53937 121.213 8.13938 120.56 7.85938C119.92 7.57937 119.2 7.43937 118.4 7.43937C117.453 7.43937 116.58 7.66608 115.78 8.11938C114.98 8.55938 114.333 9.18607 113.84 9.99937C113.36 10.7994 113.12 11.7461 113.12 12.8394C113.12 13.9327 113.367 14.8861 113.86 15.6994C114.353 16.4994 115 17.1261 115.8 17.5794C116.6 18.0194 117.473 18.2394 118.42 18.2394C119.287 18.2394 120.073 18.0794 120.78 17.7594C121.487 17.4261 122.053 16.9594 122.48 16.3594C122.92 15.7594 123.187 15.0394 123.28 14.1994H118.38V12.2594H125.34C125.42 12.6194 125.46 12.9994 125.46 13.3994V13.4194C125.46 14.8061 125.153 16.0194 124.54 17.0594C123.94 18.0861 123.107 18.8861 122.04 19.4594C120.973 20.0327 119.76 20.3194 118.4 20.3194ZM131.9 20.3194C130.847 20.3194 129.92 20.0794 129.12 19.5994C128.32 19.1194 127.693 18.4727 127.24 17.6594C126.787 16.8461 126.56 15.9261 126.56 14.8994C126.56 13.8861 126.787 12.9727 127.24 12.1594C127.693 11.3327 128.32 10.6794 129.12 10.1994C129.92 9.71938 130.847 9.47937 131.9 9.47937C132.94 9.47937 133.86 9.71938 134.66 10.1994C135.46 10.6794 136.087 11.3327 136.54 12.1594C136.993 12.9727 137.22 13.8861 137.22 14.8994C137.22 15.9261 136.993 16.8461 136.54 17.6594C136.087 18.4727 135.46 19.1194 134.66 19.5994C133.86 20.0794 132.94 20.3194 131.9 20.3194ZM131.9 18.3394C132.46 18.3394 132.98 18.2061 133.46 17.9394C133.94 17.6594 134.327 17.2661 134.62 16.7594C134.927 16.2394 135.08 15.6194 135.08 14.8994C135.08 14.1794 134.927 13.5661 134.62 13.0594C134.327 12.5394 133.94 12.1461 133.46 11.8794C132.98 11.5994 132.46 11.4594 131.9 11.4594C131.34 11.4594 130.813 11.5994 130.32 11.8794C129.84 12.1461 129.447 12.5394 129.14 13.0594C128.847 13.5661 128.7 14.1794 128.7 14.8994C128.7 15.6194 128.847 16.2394 129.14 16.7594C129.447 17.2661 129.84 17.6594 130.32 17.9394C130.813 18.2061 131.34 18.3394 131.9 18.3394ZM144.009 20.3194C142.956 20.3194 142.029 20.0794 141.229 19.5994C140.429 19.1194 139.803 18.4727 139.349 17.6594C138.896 16.8461 138.669 15.9261 138.669 14.8994C138.669 13.8861 138.896 12.9727 139.349 12.1594C139.803 11.3327 140.429 10.6794 141.229 10.1994C142.029 9.71938 142.956 9.47937 144.009 9.47937C145.049 9.47937 145.969 9.71938 146.769 10.1994C147.569 10.6794 148.196 11.3327 148.649 12.1594C149.103 12.9727 149.329 13.8861 149.329 14.8994C149.329 15.9261 149.103 16.8461 148.649 17.6594C148.196 18.4727 147.569 19.1194 146.769 19.5994C145.969 20.0794 145.049 20.3194 144.009 20.3194ZM144.009 18.3394C144.569 18.3394 145.089 18.2061 145.569 17.9394C146.049 17.6594 146.436 17.2661 146.729 16.7594C147.036 16.2394 147.189 15.6194 147.189 14.8994C147.189 14.1794 147.036 13.5661 146.729 13.0594C146.436 12.5394 146.049 12.1461 145.569 11.8794C145.089 11.5994 144.569 11.4594 144.009 11.4594C143.449 11.4594 142.923 11.5994 142.429 11.8794C141.949 12.1461 141.556 12.5394 141.249 13.0594C140.956 13.5661 140.809 14.1794 140.809 14.8994C140.809 15.6194 140.956 16.2394 141.249 16.7594C141.556 17.2661 141.949 17.6594 142.429 17.9394C142.923 18.2061 143.449 18.3394 144.009 18.3394ZM155.919 24.6394C155.025 24.6394 154.252 24.4927 153.599 24.1994C152.959 23.9194 152.439 23.5527 152.039 23.0994C151.639 22.6594 151.352 22.2061 151.179 21.7394L153.179 20.8994C153.392 21.4327 153.732 21.8661 154.199 22.1994C154.679 22.5461 155.252 22.7194 155.919 22.7194C156.852 22.7194 157.585 22.4394 158.119 21.8794C158.665 21.3194 158.939 20.5261 158.939 19.4994V18.5194H158.819C158.499 18.9994 158.052 19.3861 157.479 19.6794C156.919 19.9594 156.279 20.0994 155.559 20.0994C154.692 20.0994 153.899 19.8794 153.179 19.4394C152.459 18.9994 151.879 18.3861 151.439 17.5994C150.999 16.7994 150.779 15.8661 150.779 14.7994C150.779 13.7194 150.999 12.7861 151.439 11.9994C151.879 11.1994 152.459 10.5794 153.179 10.1394C153.899 9.69937 154.692 9.47937 155.559 9.47937C156.279 9.47937 156.919 9.62607 157.479 9.91937C158.052 10.2127 158.499 10.5994 158.819 11.0794H158.939V9.79937H160.999V19.4594C160.999 20.5661 160.779 21.5061 160.339 22.2794C159.912 23.0527 159.319 23.6394 158.559 24.0394C157.799 24.4394 156.919 24.6394 155.919 24.6394ZM155.939 18.1394C156.472 18.1394 156.965 18.0127 157.419 17.7594C157.872 17.4927 158.239 17.1127 158.519 16.6194C158.799 16.1127 158.939 15.5061 158.939 14.7994C158.939 14.0661 158.799 13.4527 158.519 12.9594C158.239 12.4527 157.872 12.0727 157.419 11.8194C156.965 11.5661 156.472 11.4394 155.939 11.4394C155.405 11.4394 154.905 11.5727 154.439 11.8394C153.985 12.0927 153.619 12.4661 153.339 12.9594C153.059 13.4527 152.919 14.0661 152.919 14.7994C152.919 15.5194 153.059 16.1327 153.339 16.6394C153.619 17.1327 153.985 17.5061 154.439 17.7594C154.905 18.0127 155.405 18.1394 155.939 18.1394ZM163.546 19.9994V5.67937H165.706V19.9994H163.546ZM172.815 20.3194C171.815 20.3194 170.921 20.0861 170.135 19.6194C169.348 19.1527 168.728 18.5127 168.275 17.6994C167.835 16.8861 167.615 15.9594 167.615 14.9194C167.615 13.9461 167.828 13.0461 168.255 12.2194C168.681 11.3927 169.275 10.7327 170.035 10.2394C170.808 9.73267 171.695 9.47937 172.695 9.47937C173.748 9.47937 174.641 9.70607 175.375 10.1594C176.121 10.6127 176.688 11.2327 177.075 12.0194C177.461 12.8061 177.655 13.6927 177.655 14.6794C177.655 14.8261 177.648 14.9594 177.635 15.0794C177.635 15.1994 177.628 15.2927 177.615 15.3594H169.735C169.841 16.3727 170.195 17.1327 170.795 17.6394C171.408 18.1461 172.101 18.3994 172.875 18.3994C173.568 18.3994 174.141 18.2461 174.595 17.9394C175.048 17.6194 175.408 17.2261 175.675 16.7594L177.455 17.6194C177.015 18.4194 176.415 19.0727 175.655 19.5794C174.895 20.0727 173.948 20.3194 172.815 20.3194ZM172.715 11.3194C171.995 11.3194 171.381 11.5394 170.875 11.9794C170.368 12.4194 170.028 13.0061 169.855 13.7394H175.515C175.488 13.3927 175.375 13.0327 175.175 12.6594C174.975 12.2861 174.668 11.9727 174.255 11.7194C173.855 11.4527 173.341 11.3194 172.715 11.3194ZM186.446 19.9994L182.606 5.67937H185.046L187.326 14.9794L187.566 16.2194H187.686L187.986 14.9794L190.866 5.67937H193.066L195.826 14.9794L196.126 16.1994H196.246L196.486 14.9794L198.766 5.67937H201.186L197.406 19.9994H195.086L192.346 10.4994L192.026 9.15937H191.906L191.566 10.4994L188.706 19.9994H186.446ZM205.202 20.3194C204.469 20.3194 203.816 20.1794 203.242 19.8994C202.669 19.6061 202.222 19.1994 201.902 18.6794C201.582 18.1594 201.422 17.5661 201.422 16.8994C201.422 16.1794 201.609 15.5661 201.982 15.0594C202.369 14.5394 202.882 14.1461 203.522 13.8794C204.162 13.6127 204.869 13.4794 205.642 13.4794C206.282 13.4794 206.842 13.5394 207.322 13.6594C207.816 13.7794 208.189 13.9061 208.442 14.0394V13.4994C208.442 12.8327 208.202 12.2994 207.722 11.8994C207.242 11.4994 206.622 11.2994 205.862 11.2994C205.342 11.2994 204.849 11.4194 204.382 11.6594C203.916 11.8861 203.542 12.1994 203.262 12.5994L201.782 11.4594C202.222 10.8461 202.802 10.3661 203.522 10.0194C204.256 9.65937 205.056 9.47937 205.922 9.47937C207.402 9.47937 208.542 9.84607 209.342 10.5794C210.142 11.2994 210.542 12.3127 210.542 13.6194V19.9994H208.442V18.7394H208.322C208.056 19.1527 207.656 19.5194 207.122 19.8394C206.589 20.1594 205.949 20.3194 205.202 20.3194ZM205.582 18.5594C206.142 18.5594 206.636 18.4261 207.062 18.1594C207.489 17.8927 207.822 17.5461 208.062 17.1194C208.316 16.6794 208.442 16.2061 208.442 15.6994C208.136 15.5261 207.776 15.3861 207.362 15.2794C206.949 15.1594 206.509 15.0994 206.042 15.0994C205.162 15.0994 204.536 15.2794 204.162 15.6394C203.789 15.9861 203.602 16.4127 203.602 16.9194C203.602 17.3994 203.782 17.7927 204.142 18.0994C204.502 18.4061 204.982 18.5594 205.582 18.5594ZM212.94 19.9994V5.67937H215.1V19.9994H212.94ZM217.667 19.9994V5.67937H219.827V19.9994H217.667ZM226.936 20.3194C225.936 20.3194 225.042 20.0861 224.256 19.6194C223.469 19.1527 222.849 18.5127 222.396 17.6994C221.956 16.8861 221.736 15.9594 221.736 14.9194C221.736 13.9461 221.949 13.0461 222.376 12.2194C222.802 11.3927 223.396 10.7327 224.156 10.2394C224.929 9.73267 225.816 9.47937 226.816 9.47937C227.869 9.47937 228.762 9.70607 229.496 10.1594C230.242 10.6127 230.809 11.2327 231.196 12.0194C231.582 12.8061 231.776 13.6927 231.776 14.6794C231.776 14.8261 231.769 14.9594 231.756 15.0794C231.756 15.1994 231.749 15.2927 231.736 15.3594H223.856C223.962 16.3727 224.316 17.1327 224.916 17.6394C225.529 18.1461 226.222 18.3994 226.996 18.3994C227.689 18.3994 228.262 18.2461 228.716 17.9394C229.169 17.6194 229.529 17.2261 229.796 16.7594L231.576 17.6194C231.136 18.4194 230.536 19.0727 229.776 19.5794C229.016 20.0727 228.069 20.3194 226.936 20.3194ZM226.836 11.3194C226.116 11.3194 225.502 11.5394 224.996 11.9794C224.489 12.4194 224.149 13.0061 223.976 13.7394H229.636C229.609 13.3927 229.496 13.0327 229.296 12.6594C229.096 12.2861 228.789 11.9727 228.376 11.7194C227.976 11.4527 227.462 11.3194 226.836 11.3194ZM234.567 17.0394V11.6794H232.787V9.79937H234.567V6.91937H236.727V9.79937H239.227V11.6794H236.727V16.5794C236.727 17.0861 236.827 17.4727 237.027 17.7394C237.24 18.0061 237.593 18.1394 238.087 18.1394C238.34 18.1394 238.553 18.1061 238.727 18.0394C238.913 17.9727 239.1 17.8794 239.287 17.7594V19.8594C239.06 19.9527 238.82 20.0261 238.567 20.0794C238.313 20.1327 238.013 20.1594 237.667 20.1594C236.72 20.1594 235.967 19.8861 235.407 19.3394C234.847 18.7794 234.567 18.0127 234.567 17.0394Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_75_15"
                  x1="13.5703"
                  y1="18.7864"
                  x2="-2.2691"
                  y2="36.9133"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4285F4" />
                  <stop offset="1" stop-color="#1B74E8" />
                </linearGradient>
              </defs>
            </svg>
          </v-btn>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import devfestagenda from "./devfestagenda.vue";
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  minLength,
  email,
} from "vuelidate/lib/validators";

export default {
  components: {
    devfestagenda,
  },
  mixins: [validationMixin],
  validations: {
    firstname: { required, maxLength: maxLength(20) },
    lastname: { required, maxLength: maxLength(20) },
    email: { required, email },
    phonenumber: { required, maxLength: minLength(11) },
    cnic: { required, maxLength: minLength(13) },
    city: { required },
    ticket: { required },
    agreetoterms: {
      checked(val) {
        return val;
      },
    },
  },
  data: () => ({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    cnic: "",
    city: null,
    ticket: null,
    agreetoterms: false,
    cities: ["Karachi", "Hyderabad"],
    tickets: [
      "Day 1 - 9th, Dec - HYD",
      "Day 2 - 16th, Dec - KHI",
      "Day 3 - 30th, Dec - KHI",
    ],
    alertState: false,
    alertMsg: "",
    ticketLink: "",
    isLoading: false,
    formSubmittedSuccess: false,
    baseUrl: process.env.VUE_APP_BASE_API_URL,
  }),
  computed: {
    firstNameErrors() {
      const errors = [];
      if (!this.$v.firstname.$dirty) return errors;
      !this.$v.firstname.maxLength &&
        errors.push("First Name must be at most 20 characters long");
      !this.$v.firstname.required && errors.push("First Name is required.");
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.lastname.$dirty) return errors;
      !this.$v.lastname.maxLength &&
        errors.push("Last Name must be at most 10 characters long");
      !this.$v.lastname.required && errors.push("Last Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    phoneNumberErrors() {
      const errors = [];
      if (!this.$v.phonenumber.$dirty) return errors;
      !this.$v.phonenumber.maxLength &&
        errors.push("Phone Number must be 11 characters long");
      !this.$v.phonenumber.required && errors.push("Phone Number is required.");
      return errors;
    },
    cnicErrors() {
      const errors = [];
      if (!this.$v.cnic.$dirty) return errors;
      !this.$v.cnic.maxLength && errors.push("CNIC must be 13 characters long");
      !this.$v.cnic.required && errors.push("CNIC is required.");
      return errors;
    },
    cityErrors() {
      const errors = [];
      if (!this.$v.city.$dirty) return errors;
      !this.$v.city.required && errors.push("City is required");
      return errors;
    },
    ticketErrors() {
      const errors = [];
      if (!this.$v.ticket.$dirty) return errors;
      !this.$v.ticket.required && errors.push("Ticket is required");
      return errors;
    },
    agreeToTermsErrors() {
      const errors = [];
      if (!this.$v.agreetoterms.$dirty) return errors;
      !this.$v.agreetoterms.checked &&
        errors.push("You must agree to continue!");
      return errors;
    },
  },
  destroyed() {
    this.clear();
  },
  methods: {
    async onSubmitFormHandler() {
      if (this.$v.$error) {
        return;
      }

      this.isLoading = true;

      const getTicket = (name) => this.ticket.filter((t) => t.startsWith(name));

      const tickets = {
        ticket1: getTicket("Day 1") ? getTicket("Day 1") : "",
        ticket2: getTicket("Day 2") ? getTicket("Day 2") : "",
        ticket3: getTicket("Day 3") ? getTicket("Day 3") : "",
      };

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      var urlencoded = new URLSearchParams();
      urlencoded.append("firstname", this.firstname);
      urlencoded.append("lastname", this.lastname);
      urlencoded.append("email", this.email);
      urlencoded.append("phonenumber", this.phonenumber);
      urlencoded.append("agreetoterms", this.agreetoterms);
      urlencoded.append("city", this.city);
      urlencoded.append("cnic", this.cnic);
      urlencoded.append("ticket1", tickets.ticket1);
      urlencoded.append("ticket2", tickets.ticket2);
      urlencoded.append("ticket3", tickets.ticket3);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          `${this.baseUrl}/v1/registration`,
          requestOptions
        );

        const responseData = await response.json();

        this.ticketLink = responseData.data.ticketLink;
        this.alertMsg = "Registration Successful!";
        this.alertState = true;
        this.formSubmittedSuccess = true;

        setTimeout(() => {
          this.clear();
        }, 1000);
      } catch (e) {
        this.errorMsg = "Issue found with " + e;
        this.alertState = true;
      } finally {
        this.isLoading = false;
      }
    },
    clear() {
      this.$v.$reset();
      this.firstname = "";
      this.lastname = "";
      this.email = "";
      this.phonenumber = "";
      this.city = null;
      this.ticket = null;
      this.agreetoterms = false;
    },
  },
};
</script>

<style scoped>
.hero-section {
  min-height: 400px;
  border-radius: 8px !important;
  background-color: #202124;
  .header {
    font-size: 5rem;
    font-weight: 900;
  }
}

.event-page {
  width: 100%;
}

.registration-form {
  max-width: 500px;
  margin: 5vh auto;

  .header {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 25px;
    text-align: center;
  }
}

[disabled] {
  opacity: 0.25;
  user-select: none;
  pointer-events: none;
}

.confirmation {
  opacity: 0;
  animation: fadein 1s 0s forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@keyframes fadein {
  to {
    opacity: 1;
  }
}

#google-wallet-btn {
  border-radius: 25px;
  border: 1px solid #747775;
  font-weight: 600;
  height: 50px;
  background-color: #1f1f1f;
  text-transform: capitalize;
  color: white;
  width: 50px;
  min-width: auto;
  position: relative;
  animation: animate-width 1s 1s forwards;
}

#google-wallet-btn svg {
  position: absolute;
  left: 9px;
  animation: animate-svg 1s 1.5s forwards;
}

#google-wallet-btn #text {
  opacity: 0;
  animation: animate-text 1s 1.5s forwards;
}

@keyframes animate-width {
  to {
    width: 272px;
  }
}

@keyframes animate-svg {
  to {
    position: static;
  }
}

@keyframes animate-text {
  to {
    opacity: 1;
  }
}
</style>

<style>
.form-border .v-input__slot,
.form-border.v-btn {
  border-radius: 8px !important;
  border: 2px solid #202124 !important;
}

.form-border.error--text .v-input__slot {
  border-color: red !important;
}
</style>
