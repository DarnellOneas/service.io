// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
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

// Обработчик события для кнопки отправки формы
document.getElementById("form").addEventListener("submit", function(event) {
  console.log("Отправляет")
  event.preventDefault(); // Отменяем отправку формы по умолчанию

  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");

  const name = nameInput.value;
  const phone = phoneInput.value;
  const date = new Date().toISOString();

  sendRequestData(name, phone, date);

  // Очищаем поля ввода после отправки
  nameInput.value = "";
  phoneInput.value = "";
});