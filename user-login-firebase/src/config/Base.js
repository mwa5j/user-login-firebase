import firebase from 'firebase'

const Base = firebase.initializeApp({
    apiKey: "AIzaSyD7CEfAB4WBtNQGgExghjPPdPRjmAV2bk8",
    authDomain: "user-login-646f2.firebaseapp.com",
    databaseURL: "https://user-login-646f2.firebaseio.com",
    projectId: "user-login-646f2",
    storageBucket: "user-login-646f2.appspot.com",
    messagingSenderId: "541084465903"
})

export default Base