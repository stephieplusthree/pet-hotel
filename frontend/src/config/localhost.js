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
// const backendUrl = `http://localhost:5000/${
//   firebaseConfig.projectId
// }/us-central1/api/graphql`;

// App Engine / Debug
const backendUrl = `http://localhost:8080`;

export default {
  firebaseConfig,
  backendUrl,
};
