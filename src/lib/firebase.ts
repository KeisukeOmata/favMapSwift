import 'firebase/auth'
import 'firebase/firestore'
import firebase from 'firebase/app'

const config = {
  apiKey: 'AIzaSyB1S2hCnbLvXx2qa8y4__0AiM0ngQJ2IpY',
  authDomain: 'next-a-c9ca8.firebaseapp.com',
  databaseURL: 'https://next-a-c9ca8.firebaseio.com',
  projectId: 'next-a-c9ca8',
  storageBucket: 'next-a-c9ca8.appspot.com',
  messagingSenderId: '368240202434',
  appId: '1:368240202434:web:b188722c96e75b7fe8615b',
  measurementId: 'G-R79HM0MRNW',
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()
export { auth }
