// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHzBe6VKhxf-3dzCxOo5Jo-hfSF-4ndkU",
  authDomain: "komissarpro.firebaseapp.com",
  databaseURL: "https://komissarpro-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "komissarpro",
  storageBucket: "komissarpro.appspot.com",
  messagingSenderId: "188298072153",
  appId: "1:188298072153:web:a30b371ae48b57aea8a148",
  measurementId: "G-R1D76YR5KN"
};

console.log("Firebase скрипт успешно подключен");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

// Функция для отправки данных в коллекцию site_requests
async function sendRequestData(name, phone, date) {

  const requestRef = collection(db, "site_requests");

  try {
    // Добавляем новый документ с данными
    const docRef = await addDoc(requestRef, {
      name: name,
      phone: phone,
      date: date,
    });

    console.log("Данные успешно отправлены в Cloud Firestore!");
    console.log("ID документа:", docRef.id);
  } catch (error) {
    console.error("Ошибка при отправке данных:", error);
  }
}
