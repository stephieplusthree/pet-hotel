const firebaseConfig = {
  apiKey: "AIzaSyBLpKTq9knOHbpKjzYBO2KZEx_Y8WaPcX8",
  authDomain: "pet-hotel-prod-e409f.firebaseapp.com",
  databaseURL: "https://pet-hotel-prod-e409f.firebaseio.com",
  projectId: "pet-hotel-prod-e409f",
  storageBucket: "pet-hotel-prod-e409f.appspot.com",
  messagingSenderId: "110311653735",
  appId: "1:110311653735:web:f1f8b75661966213aa6fc2",
};

// Cloud Functions
const backendUrl = `https://us-central1-${
  firebaseConfig.projectId
}.cloudfunctions.net/api/graphql`;

// App Engine
// const backendUrl = `<insert app engine url here>`;

export default {
  firebaseConfig,
  backendUrl,
};
