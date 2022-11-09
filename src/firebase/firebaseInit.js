/* eslint-disable no-unused-vars */
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCDYN1SgdAFxoeZS7tlMTKkGu6vl5Tqj80',
    authDomain: 'fireblogs-f7f71.firebaseapp.com',
    projectId: 'fireblogs-f7f71',
    storageBucket: 'fireblogs-f7f71.appspot.com',
    messagingSenderId: '198034155700',
    appId: '1:198034155700:web:a353a358c75f235486cfe1',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
