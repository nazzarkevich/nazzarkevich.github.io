import firebase from 'firebase';

const database = firebase.database();

const config = {
  apiKey: 'AIzaSyCnZ68Fa1Cb7sI2r6cTxvr_QnZmZMuKaA4',
  authDomain: 'guess-the-word-app.firebaseapp.com',
  databaseURL: 'https://guess-the-word-app.firebaseio.com',
  projectId: 'guess-the-word-app',
  storageBucket: '',
  messagingSenderId: '999865210476'
};

firebase.initializeApp(config);


export { firebase, database };