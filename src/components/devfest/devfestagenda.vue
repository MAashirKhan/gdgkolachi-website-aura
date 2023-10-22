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
                <p class="google-font schedule-ribbon mt-0">Venue</p>
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
                <p class="google-font schedule-ribbon">Schedule</p>
                <!--SCHEDULE ITEMS-->
                <div class="flex-container">
                  <!-- Left Column -->
                  <div class="left-column">
                    <div class="topic">Keynote</div>
                    <div class="speaker">Hira Tariq</div>
                    <div class="agenda_session_session_time">
                      10:00 AM — 10:20 AM PST
                    </div>
                  </div>

                  <!-- Right Column -->
                  <div class="right-column">
                    <img
                      src="https://media.licdn.com/dms/image/C560BAQHnbvmW4GCNAg/company-logo_200_200/0/1570554491270?e=2147483647&v=beta&t=DYXCICo5jWFRVrd9PNTtyoTn2_dfsbpt2d5xg_7m5Mc"
                      alt="Speaker"
                      class="speaker-pic"
                    />
                  </div>
                </div>
                <div class="flex-container mt-4">
                  <!-- Left Column -->
                  <div class="left-column">
                    <div class="topic">Shayari by Bard</div>
                    <div class="speaker">Umar Ahmed | Hassam Jawed</div>
                    <div class="agenda_session_session__time">
                      10:00 AM — 10:20 AM PST
                    </div>
                  </div>

                  <!-- Right Column -->
                  <div class="right-column">
                    <img
                      src="https://media.licdn.com/dms/image/C560BAQHnbvmW4GCNAg/company-logo_200_200/0/1570554491270?e=2147483647&v=beta&t=DYXCICo5jWFRVrd9PNTtyoTn2_dfsbpt2d5xg_7m5Mc"
                      alt="Speaker"
                      class="speaker-pic"
                    />
                  </div>
                </div>
                <!--END OF SCHEDULE ITEMS-->
              </div>
            </div>
          </div>
          <!--End of 1st Content Day 01-->
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
                <p class="google-font schedule-ribbon mt-0">Venue</p>
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
                <v-divider style="color: #0a0a0a"></v-divider>
                <p class="google-font schedule-ribbon">Schedule</p>
                <!--SCHEDULE ITEMS-->
                <div
                  class="flex-container"
                  style="border-left: 3px solid #ea4334"
                >
                  <!-- Left Column -->
                  <div class="left-column">
                    <div class="topic">Keynote</div>
                    <div class="speaker">Hira Tariq</div>
                    <div class="agenda_session_session_time">
                      10:00 AM — 10:20 AM PST
                    </div>
                  </div>

                  <!-- Right Column -->
                  <div class="right-column">
                    <img
                      src="https://media.licdn.com/dms/image/C560BAQHnbvmW4GCNAg/company-logo_200_200/0/1570554491270?e=2147483647&v=beta&t=DYXCICo5jWFRVrd9PNTtyoTn2_dfsbpt2d5xg_7m5Mc"
                      alt="Speaker"
                      class="speaker-pic"
                    />
                  </div>
                </div>
                <div
                  class="flex-container mt-4"
                  style="border-left: 3px solid #ea4334"
                >
                  <!-- Left Column -->
                  <div class="left-column">
                    <div class="topic">Keynote</div>
                    <div class="speaker">Hira Tariq</div>
                    <div class="agenda_session_session_time">
                      10:00 AM — 10:20 AM PST
                    </div>
                  </div>

                  <!-- Right Column -->
                  <div class="right-column">
                    <img
                      src="https://media.licdn.com/dms/image/C560BAQHnbvmW4GCNAg/company-logo_200_200/0/1570554491270?e=2147483647&v=beta&t=DYXCICo5jWFRVrd9PNTtyoTn2_dfsbpt2d5xg_7m5Mc"
                      alt="Speaker"
                      class="speaker-pic"
                    />
                  </div>
                </div>
                <div
                  class="flex-container mt-4"
                  style="border-left: 3px solid #ea4334"
                >
                  <!-- Left Column -->
                  <div class="left-column">
                    <div class="topic">Talk on Android</div>
                    <div class="speaker">Wajahat Karim</div>
                    <div class="agenda_session_session__time">
                      11:00 AM — 11:30 AM PST
                    </div>
                  </div>

                  <!-- Right Column -->
                  <div class="right-column">
                    <img
                      src="https://media.licdn.com/dms/image/C560BAQHnbvmW4GCNAg/company-logo_200_200/0/1570554491270?e=2147483647&v=beta&t=DYXCICo5jWFRVrd9PNTtyoTn2_dfsbpt2d5xg_7m5Mc"
                      alt="Speaker"
                      class="speaker-pic"
                    />
                  </div>
                </div>
                <!--END OF SCHEDULE ITEMS-->
              </div>
            </div>
          </div>
          <!--End of 1st Content Day 01-->
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
                <p class="google-font schedule-ribbon mt-0">Venue</p>
                <div class="agenda_session_session__time">
                  10:00 AM — 05:00 PM PST
                </div>
                <div class="session__speakers">
                  <div class="session_speakers__list">
                    <div class="speaker_profile_image">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/1/1e/Institute_of_Business_Administration%2C_Karachi_%28logo%29.png"
                      />
                    </div>
                    <div class="speaker-detls">
                      <h4>IBA City Campus</h4>
                      <p>Karachi<br /></p>
                    </div>
                  </div>
                </div>
                <v-divider style="color: #0a0a0a"></v-divider>
                <p class="google-font schedule-ribbon">Schedule</p>
                <!--SCHEDULE ITEMS-->
                <div
                  class="flex-container"
                  style="border-left: 3px solid #ffcf10"
                >
                  <!-- Left Column -->
                  <div class="left-column">
                    <div class="topic">Keynote</div>
                    <div class="speaker">Hira Tariq</div>
                    <div class="agenda_session_session_time">
                      10:00 AM — 10:20 AM PST
                    </div>
                  </div>

                  <!-- Right Column -->
                  <div class="right-column">
                    <img
                      src="https://media.licdn.com/dms/image/C560BAQHnbvmW4GCNAg/company-logo_200_200/0/1570554491270?e=2147483647&v=beta&t=DYXCICo5jWFRVrd9PNTtyoTn2_dfsbpt2d5xg_7m5Mc"
                      alt="Speaker"
                      class="speaker-pic"
                    />
                  </div>
                </div>
                <div
                  class="flex-container mt-4"
                  style="border-left: 3px solid #ffcf10"
                >
                  <!-- Left Column -->
                  <div class="left-column">
                    <div class="topic">Shayari by Bard</div>
                    <div class="speaker">Umar Ahmed | Hassam Jawed</div>
                    <div class="agenda_session_session__time">
                      10:00 AM — 10:20 AM PST
                    </div>
                  </div>

                  <!-- Right Column -->
                  <div class="right-column">
                    <img
                      src="https://media.licdn.com/dms/image/C560BAQHnbvmW4GCNAg/company-logo_200_200/0/1570554491270?e=2147483647&v=beta&t=DYXCICo5jWFRVrd9PNTtyoTn2_dfsbpt2d5xg_7m5Mc"
                      alt="Speaker"
                      class="speaker-pic"
                    />
                  </div>
                </div>
                <!--END OF SCHEDULE ITEMS-->
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
  width: 100%;
  font-size: 14px;
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

.schedule-ribbon {
  margin-top: 5px;
  width: 40%;
  background-color: #ffcf10;
  color: #0e0d0d;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  border: 2px solid #0e0d0d;
  border-radius: 20px;
}

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border-left: 3px solid #4285f4;
}
.left-column {
  flex: 1;
  margin-left: 10px;
  text-align: left;
}

.right-column {
  flex: 1;
  text-align: right;
}

.speaker-pic {
  width: 100%;
  max-width: 60px;
  height: auto;
  border: 2px solid #0e0d0d;
}

.topic {
  font-size: 16px;
  font-weight: bold;
}

.speaker {
  font-size: 14px;
  color: #0e0d0d;
}

/* Add this CSS to your existing styles */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .agenda-section {
    padding-top: 15px !important;
  }
  .agenda-sessioncontent-inner {
    flex-direction: column;
  }
  .agenda-session-details,
  .agenda-session-accordion {
    flex-basis: 100%;
  }
  .flex-container {
    border-left: none;
  }
  .left-column,
  .right-column {
    flex: 1;
    margin-left: 10;
    margin-top: 10px;
  }
  .speaker-pic {
    max-width: 100px;
  }
  .track_type__track {
    font-size: 12px;
    padding: 2px 6px;
  }
  .agenda-session-session__time {
    font-size: 12px;
  }
  .schedule-ribbon {
    font-size: 20px;
    width: 40%;
  }
  .agenda-session-accordion .Session__right_content .session__speakers {
    grid-template-columns: 1fr;
  }
  .session_speakers__list {
    flex-direction: row;
    align-items: center;
  }
  .flex-container {
    border-left: 3px solid #4285f4;
  }
}

/*For Mobile*/
@media only screen and (max-width: 600px) {
  .agenda-container {
    flex-direction: column;
  }
  .agenda-daycontainer {
    font-size: 24px;
  }
  .agenda-sessioncontent-inner {
    flex-direction: column;
  }
  .agenda-section {
    padding-top: 20px !important;
  }
  .agenda-details {
    margin-top: 10px;
  }
  .agenda-schedule {
    margin: 15px 0;
  }
  .agenda-day {
    font-size: 20px;
    padding: 15px 0px 6px 17.5px;
  }
  .agenda-session-details {
    flex-basis: 100%;
    padding-bottom: 0;
  }
  .agenda-session-accordion {
    flex-basis: 100%;
  }
  .track_type__track {
    font-size: 14px;
    padding: 2px 8px;
  }
  .session_contentDescription {
    margin-bottom: 0;
  }
  .session_contentDescription h5 {
    font-size: 18px;
  }
  .session_contentDescription p {
    font-size: 14px;
    line-height: 20px;
  }
  .agenda-session-session__time {
    font-size: 14px;
  }
  .schedule-ribbon {
    font-size: 16px;
    width: 70%;
  }
  .speaker-pic {
    max-width: 80px;
  }
  .session__speakers {
    grid-template-columns: 1fr;
  }
  .flex-container {
    flex-direction: row;
  }
  .left-column,
  .right-column {
    flex: 1;
  }
}
</style>
