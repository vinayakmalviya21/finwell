// Import the functions you need from the SDKs you need 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use 
// https://firebase.google.com/docs/web/setup#available-libraries 

// Your web app's Firebase configuration 
const firebaseConfig = {
    apiKey: "AIzaSyD_DHHxK-q73lRmKQ4vdvOnW_s-tAoLdRs",
    authDomain: "blogsite-d80c3.firebaseapp.com",
    projectId: "blogsite-d80c3",
    storageBucket: "blogsite-d80c3.appspot.com",
    messagingSenderId: "1075006013547",
    appId: "1:1075006013547:web:a23a1687da2266cddb312e"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCJ67fgSadxBvm2KkS5JdJ49y2ojBOXk4g",
//   authDomain: "expensify-b8232.firebaseapp.com",
//   projectId: "expensify-b8232",
//   storageBucket: "expensify-b8232.appspot.com",
//   messagingSenderId: "728336357786",
//   appId: "1:728336357786:web:221f580f94a982fb23c223"
// };

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const auth = getAuth();
// export {auth}