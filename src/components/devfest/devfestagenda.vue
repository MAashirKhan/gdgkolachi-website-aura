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
          style="color: #656363; font-weight: 500; font-size: 180%"
        >
          Devfest Sindh <span style="color: #fff">2023</span>
        </p>
        <p class="google-font" style="font-size: 110%">
          {{ chapterDetails.ChapterShortDescription }}
        </p>
      </v-flex>
      <v-flex xs12 sm5 md3 lg3 xl3 class="text-xs-center pa-2">
        <v-img
          :src="require('@/assets/img/devfestsindh.png')"
          :lazy-src="require('@/assets/img/devfestsindh.png')"
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
        Day 01 - HYD
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
        Day 02 - KHI
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
        Day 03 - KHI
      </v-btn>
    </div>

    <div class="agenda-schedule">
      <div class="agenda-topborder"></div>
      <div class="agenda-container">
        <div class="agenda-daycontainer">
          <div class="agenda-day google-font">Day 01 - HYD</div>
        </div>
        <div class="agenda-sessioncontent">
          <!--1st Content Day 01-->
          <div class="agenda-sessioncontent-inner">
            <div class="agenda-session-details">
              <div class="agenda-session-title">
                <div class="track_type">
                  <span class="track_type__track">ML and Cloud Day</span>
                </div>
              </div>
              <!--end Detail_heading-->
              <div class="session_contentDescription">
                <h5 class="google-font">Day Hand's on with Bard AI</h5>
                <p></p>
                <p class="google-font">
                  Join Miro's Developer Relations team and learn how to enhance
                  your everyday workflows. Miro's Developer Platform can help
                  you quickly boot up apps that make your life easier. In this
                  session, you will learn more about the Web SDK and the art of
                  creating Miro Apps. Whether you're a Miro user or a seasoned
                  developer, you'll be able to build Miro apps of your own in no
                  time.
                </p>
                <p></p>
              </div>
            </div>
            <div class="agenda-session-accordion">
              <div class="Session__right_content">
                <div class="agenda_session_session__time">
                  10:00 AM — 05:00 PM PST
                </div>
                <div class="session__speakers">
                  <div class="session_speakers__list">
                    <div class="speaker_profile_image">
                      <img
                        src="https://yt3.googleusercontent.com/8i1-Iyp8fJMV89bgXK9241Fy5PLocEbvd2BlzTgBppiG3tqsiTXeDo8UsiUQj3CrtvodGtOpTg=s900-c-k-c0x00ffffff-no-rj"
                      />
                    </div>
                    <div class="speaker-detls">
                      <h4>National Incubation Center</h4>
                      <p>Hyderabad<br /></p>
                    </div>
                  </div>
                </div>
                <v-divider style="color: #0a0a0a"></v-divider>
                <p
                  class="google-font mt-2"
                  style="
                    width: 40%;
                    background-color: #ffcf10;
                    color: #0e0d0d;
                    font-weight: 600;
                    font-size: 18px;
                    text-align: center;
                    border: 2px solid #0e0d0d;
                    border-radius: 20px;
                  "
                >
                  Schedule
                </p>
                <div class="agenda-details d-flex">
                  <div style="width: 50%; background-color: #ea4334">H</div>
                  <div style="width: 50%">W</div>
                </div>
              </div>
            </div>
          </div>
          <!--End of 1st Content Day 01-->

          <!--2nd Content Day 01-->
          <div class="agenda-sessioncontent-inner">
            <div class="agenda-session-details">
              <div class="agenda-session-title">
                <div class="track_type">
                  <span class="track_type__track">ML and Cloud Day</span>
                </div>
              </div>
              <!--end Detail_heading-->
              <div class="session_contentDescription">
                <h5 class="google-font">Day Hand's on with Bard AI</h5>
                <p></p>
                <p class="google-font">
                  Join Miro's Developer Relations team and learn how to enhance
                  your everyday workflows. Miro's Developer Platform can help
                  you quickly boot up apps that make your life easier. In this
                  session, you will learn more about the Web SDK and the art of
                  creating Miro Apps. Whether you're a Miro user or a seasoned
                  developer, you'll be able to build Miro apps of your own in no
                  time.
                </p>
                <p></p>
              </div>
            </div>
            <div class="agenda-session-accordion">
              <div class="Session__right_content">
                <div class="agenda_session_session__time">
                  10:00 AM — 05:00 PM PST
                </div>
                <div class="session__speakers">
                  <div class="session_speakers__list">
                    <div class="speaker_profile_image">
                      <img
                        src="https://yt3.googleusercontent.com/8i1-Iyp8fJMV89bgXK9241Fy5PLocEbvd2BlzTgBppiG3tqsiTXeDo8UsiUQj3CrtvodGtOpTg=s900-c-k-c0x00ffffff-no-rj"
                      />
                    </div>
                    <div class="speaker-detls">
                      <h4>National Incubation Center</h4>
                      <p>Hyderabad<br /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--End of 2nd Content Day 01-->
        </div>
      </div>

      <!--KHI EVENT DAY 01-->
      <div class="agenda-container">
        <div class="agenda-daycontainer">
          <div class="agenda-day google-font">Day 01 - KHI</div>
        </div>
        <div class="agenda-sessioncontent">
          <!--1st Content Day 01-->
          <div class="agenda-sessioncontent-inner">
            <div class="agenda-session-details">
              <div class="agenda-session-title">
                <div class="track_type">
                  <span
                    class="track_type__track"
                    style="background-color: #ea4334"
                    >Web and Android Day</span
                  >
                </div>
              </div>
              <!--end Detail_heading-->
              <div class="session_contentDescription">
                <h5 class="google-font">Day Hand's on with Bard AI</h5>
                <p></p>
                <p class="google-font">
                  Join Miro's Developer Relations team and learn how to enhance
                  your everyday workflows. Miro's Developer Platform can help
                  you quickly boot up apps that make your life easier. In this
                  session, you will learn more about the Web SDK and the art of
                  creating Miro Apps. Whether you're a Miro user or a seasoned
                  developer, you'll be able to build Miro apps of your own in no
                  time.
                </p>
                <p></p>
              </div>
            </div>
            <div class="agenda-session-accordion">
              <div class="Session__right_content">
                <div class="agenda_session_session__time">
                  10:00 AM — 05:00 PM PST
                </div>
                <div class="session__speakers">
                  <div class="session_speakers__list">
                    <div class="speaker_profile_image">
                      <img
                        src="https://media.licdn.com/dms/image/C560BAQHnbvmW4GCNAg/company-logo_200_200/0/1570554491270?e=2147483647&v=beta&t=DYXCICo5jWFRVrd9PNTtyoTn2_dfsbpt2d5xg_7m5Mc"
                      />
                    </div>
                    <div class="speaker-detls">
                      <h4>10 Pearls Office</h4>
                      <p>Karachi<br /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--End of 1st Content Day 01-->

          <!--2nd Content Day 01-->
          <div class="agenda-sessioncontent-inner">
            <div class="agenda-session-details">
              <div class="agenda-session-title">
                <div class="track_type">
                  <span
                    class="track_type__track"
                    style="background-color: #ea4334"
                    >Web and Android Day</span
                  >
                </div>
              </div>
              <!--end Detail_heading-->
              <div class="session_contentDescription">
                <h5 class="google-font">Day Hand's on with Bard AI</h5>
                <p></p>
                <p class="google-font">
                  Join Miro's Developer Relations team and learn how to enhance
                  your everyday workflows. Miro's Developer Platform can help
                  you quickly boot up apps that make your life easier. In this
                  session, you will learn more about the Web SDK and the art of
                  creating Miro Apps. Whether you're a Miro user or a seasoned
                  developer, you'll be able to build Miro apps of your own in no
                  time.
                </p>
                <p></p>
              </div>
            </div>
            <div class="agenda-session-accordion">
              <div class="Session__right_content">
                <div class="agenda_session_session__time">
                  10:00 AM — 05:00 PM PST
                </div>
                <div class="session__speakers">
                  <div class="session_speakers__list">
                    <div class="speaker_profile_image">
                      <img
                        src="https://media.licdn.com/dms/image/C560BAQHnbvmW4GCNAg/company-logo_200_200/0/1570554491270?e=2147483647&v=beta&t=DYXCICo5jWFRVrd9PNTtyoTn2_dfsbpt2d5xg_7m5Mc"
                      />
                    </div>
                    <div class="speaker-detls">
                      <h4>10 Pearls Office</h4>
                      <p>Karachi<br /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--End of 2nd Content Day 01-->
        </div>
      </div>

      <!--KHI EVENT DAY 02-->
      <div class="agenda-container">
        <div class="agenda-daycontainer">
          <div class="agenda-day google-font">Day 02 - KHI</div>
        </div>
        <div class="agenda-sessioncontent">
          <!--1st Content Day 01-->
          <div class="agenda-sessioncontent-inner">
            <div class="agenda-session-details">
              <div class="agenda-session-title">
                <div class="track_type">
                  <span
                    class="track_type__track"
                    style="background-color: #ffcf10; color: #0a0a0a"
                    >The Grand Show</span
                  >
                </div>
              </div>
              <!--end Detail_heading-->
              <div class="session_contentDescription">
                <h5 class="google-font">Day Hand's on with Bard AI</h5>
                <p></p>
                <p class="google-font">
                  Join Miro's Developer Relations team and learn how to enhance
                  your everyday workflows. Miro's Developer Platform can help
                  you quickly boot up apps that make your life easier. In this
                  session, you will learn more about the Web SDK and the art of
                  creating Miro Apps. Whether you're a Miro user or a seasoned
                  developer, you'll be able to build Miro apps of your own in no
                  time.
                </p>
                <p></p>
              </div>
            </div>
            <div class="agenda-session-accordion">
              <div class="Session__right_content">
                <div class="agenda_session_session__time">
                  10:00 AM — 05:00 PM PST
                </div>
                <div class="session__speakers">
                  <div class="session_speakers__list">
                    <div class="speaker_profile_image">
                      <img
                        src="https://play-lh.googleusercontent.com/DPJeO5IXVXyB4V6x2NN31mtFYl1bmyZms-UECiglfa33-kQ_o0AJCfAhE-qHKD5LqkQ"
                      />
                    </div>
                    <div class="speaker-detls">
                      <h4>IBA City Campus</h4>
                      <p>Karachi<br /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--End of 1st Content Day 01-->

          <!--1st Content Day 01-->
          <div class="agenda-sessioncontent-inner">
            <div class="agenda-session-details">
              <div class="agenda-session-title">
                <div class="track_type">
                  <span
                    class="track_type__track"
                    style="background-color: #ffcf10; color: #0a0a0a"
                    >The Grand Show</span
                  >
                </div>
              </div>
              <!--end Detail_heading-->
              <div class="session_contentDescription">
                <h5 class="google-font">Day Hand's on with Bard AI</h5>
                <p></p>
                <p class="google-font">
                  Join Miro's Developer Relations team and learn how to enhance
                  your everyday workflows. Miro's Developer Platform can help
                  you quickly boot up apps that make your life easier. In this
                  session, you will learn more about the Web SDK and the art of
                  creating Miro Apps. Whether you're a Miro user or a seasoned
                  developer, you'll be able to build Miro apps of your own in no
                  time.
                </p>
                <p></p>
              </div>
            </div>
            <div class="agenda-session-accordion">
              <div class="Session__right_content">
                <div class="agenda_session_session__time">
                  10:00 AM — 05:00 PM PST
                </div>
                <div class="session__speakers">
                  <div class="session_speakers__list">
                    <div class="speaker_profile_image">
                      <img
                        src="https://play-lh.googleusercontent.com/DPJeO5IXVXyB4V6x2NN31mtFYl1bmyZms-UECiglfa33-kQ_o0AJCfAhE-qHKD5LqkQ"
                      />
                    </div>
                    <div class="speaker-detls">
                      <h4>IBA City Campus</h4>
                      <p>Karachi<br /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--End of 1st Content Day 01-->
        </div>
      </div>
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

.agenda-schedule {
  margin: 15px auto;
  border-bottom: 1px solid #afb1b2;
}

.agenda-topborder {
  position: sticky;
  top: 0;
  height: 1px;
  background: #afb1b2;
  margin: -1px 0 0px 0;
  max-width: 1384px;
  z-index: 1;
}
.agenda-container {
  display: flex;
  border-right: 1px solid #afb1b2;
  border-left: 1px solid #afb1b2;
  margin-top: -1px;
}

.agenda-daycontainer {
  min-width: 200px;
  border-right: 1px solid #afb1b2;
  border-top: 1px solid #afb1b2;
  border-bottom: 1px solid #afb1b2;
}

.agenda-day {
  position: sticky;
  padding: 20px 0px 11px 17.5px;
  font-size: 24px;
  font-weight: 600;
}

.agenda-sessioncontent-inner {
  display: flex;
  flex-direction: row;
  border-top: 1px solid #afb1b2;
}

.agenda-session-details {
  padding: 30px;
  flex-basis: 50%;
}

.agenda-session-title {
  display: flex;
  padding: 0px;
}

.track_type {
  display: flex;
  margin-right: 15px;
  width: auto;
}

.track_type__track {
  color: #ffffff;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  border-radius: 30px;
  line-height: 138%;
  letter-spacing: 0.02em;
  padding: 4px 8px;
  border: 2px solid black;
  background-color: #4285f4;
}

.session_contentDescription {
  margin-top: 40px;
  margin-bottom: 40px;
}

.session_contentDescription h5 {
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.022em;
  font-weight: 500;
}

.session_contentDescription p {
  font-size: 15px;
  line-height: 22px;
  text-align: justify;
}

.agenda-session-accordion {
  flex-basis: 50%;
}

.Session__right_content {
  padding: 30px;
}

.agenda_session_session__time {
  width: 50%;
}

.session__right_content .session__speakers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.session__speakers {
  margin-top: 10px;
  margin-bottom: 10px;
}

.session_speakers__list {
  display: flex;
  position: relative;
}

.speaker_profile_image {
  max-width: 50px;
  height: 50px;
  border-radius: 4px;
  padding: 1px;
  line-height: 29px;
  overflow: hidden;
  text-align: center;
  display: flex;
  justify-content: center;
  background: #000000;
}

.speaker-detls {
  margin-left: 10px;
}

.session_speakers__list h4 {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
}

.session_speakers__list p {
  font-size: 14px;
  line-height: 20px;
  margin: 0;
}
</style>
