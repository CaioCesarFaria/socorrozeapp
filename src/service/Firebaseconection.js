import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDINzemr7rGzfl_QCVGjr9y14MvBxZ-81c",
    authDomain: "socorrozeapp.firebaseapp.com",
    projectId: "socorrozeapp",
    storageBucket: "socorrozeapp.firebasestorage.app",
    messagingSenderId: "720655632417",
    appId: "1:720655632417:web:0f24a15488f1ae25f87b60",
    measurementId: "G-6HXR5W2LYZ"
  };

  // Initialize Firebase
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {app, db}
