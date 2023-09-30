export const MeetupAPI = {
  urlname: "GDG-Kolachi" // Example GDG-Jalandhar  CHAPTER_URL_NAME
};

export const FirebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGE_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
};

// For urlname: extract the urlname from meetup chapter link-> https://meetup.com/GDG-Jalandhar
