// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getFirestore  } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
//* TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCde-1crTUJuPPwUixw2etCdbNTvsxM0n0",
    authDomain: "yatzi-jej.firebaseapp.com",
    projectId: "yatzi-jej",
    storageBucket: "yatzi-jej.firebasestorage.app",
    messagingSenderId: "119449277482",
    appId: "1:119449277482:web:7e8d3dd4a367f826e49f53",
    measurementId: "G-MYW6372PM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function createLobby() {
    let lobbyCode = "XXXXXX"; //TODO Generate code (A-Z & 0-9, 6 char ?)
    let isBound = false; // Choose where to put points or not

    await setDoc(doc(db, "lobby", lobbyCode), { //TODO Test
        players: {},
        initiative: [],
        rules: {
            bound: isBound
        }
    });
}
function joinLobby() {
    //TODO Join a lobby with the code given
}

function addPlayer() {
    //TODO Add a player to the db, and give initiative (users dont need to, they are then just spectators)
}

