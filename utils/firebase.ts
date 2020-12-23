// Dependencies.
import FIREBASE from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Config.
const config = {
  apiKey: 'AIzaSyDONSUY3Ivn190pdNyHSEXO1_h98rRbzjk',
  authDomain: 'source-internet.firebaseapp.com',
  databaseURL: 'https://source-internet.firebaseio.com',
  projectId: 'source-internet',
  storageBucket: 'source-internet.appspot.com',
  messagingSenderId: '81625468759',
  appId: '1:81625468759:web:d3a02b26daa774df19f812',
  measurementId: 'G-EH59J96VBX'
}

// Initialize App.
const firebase = FIREBASE.apps.find(app => app.name === 'SOURCE_WEB') || FIREBASE.initializeApp(config, `SOURCE_WEB`)

// Auth.
const auth = firebase.auth()

const firestore = firebase.firestore()

// Export.
export {auth, firebase, firestore}