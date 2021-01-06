import firebase from 'firebase';
import firebaseConfig from './config';

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;