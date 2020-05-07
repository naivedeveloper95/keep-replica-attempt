import * as firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCoo_wheI8R2hlGoUxAzg1fg-vIIBOPeE8',
  authDomain: 'keep-replica-attempt.firebaseapp.com',
  databaseURL: 'https://keep-replica-attempt.firebaseio.com',
  projectId: 'keep-replica-attempt',
  storageBucket: 'keep-replica-attempt.appspot.com',
  messagingSenderId: '1098621352118',
  appId: '1:1098621352118:web:ec9d4729b15993e78bce17',
  measurementId: 'G-M5GY2YCSHY'
}

export const app = firebase.initializeApp(firebaseConfig)
