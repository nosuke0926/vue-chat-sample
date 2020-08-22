import Vue from "vue";
import { firestorePlugin } from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(firestorePlugin);

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAqLG_awhox8j-v2F8ifSF1xnToT0YpIOg",
  authDomain: "chat-firestore-vue-sampl-ef33d.firebaseapp.com",
  databaseURL: "https://chat-firestore-vue-sampl-ef33d.firebaseio.com",
  projectId: "chat-firestore-vue-sampl-ef33d",
  storageBucket: "chat-firestore-vue-sampl-ef33d.appspot.com",
  messagingSenderId: "660015027834",
  appId: "1:660015027834:web:e1c421168bc10c0f994dc3",
  measurementId: "G-6X27LPNX77",
});

export const db = firebaseApp.firestore();
