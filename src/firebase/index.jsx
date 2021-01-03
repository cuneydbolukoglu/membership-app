import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';
import firebaseConfig from './config';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();