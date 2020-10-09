import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC78DNbQrpkdMLZNLkRGGmnWuBhIwSAgfA",
    authDomain: "react-airbnb-clone-5d85d.firebaseapp.com",
    databaseURL: "https://react-airbnb-clone-5d85d.firebaseio.com",
    projectId: "react-airbnb-clone-5d85d",
    storageBucket: "react-airbnb-clone-5d85d.appspot.com",
    messagingSenderId: "486874725759",
    appId: "1:486874725759:web:de619fe5d8b1e8d8432e4a",
    measurementId: "G-VX74YVYG44"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

export default db;