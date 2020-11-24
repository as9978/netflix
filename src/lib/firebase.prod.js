import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyD8UpxKQOSKTZgwG-tz2Nc_gJxjEQIa_j4',
  authDomain: 'netflix-clone-95db2.firebaseapp.com',
  databaseURL: 'https://netflix-clone-95db2.firebaseio.com',
  projectId: 'netflix-clone-95db2',
  storageBucket: 'netflix-clone-95db2.appspot.com',
  messagingSenderId: '79368524453',
  appId: '1:79368524453:web:bbe94eb3038d8295e1734c',
  measurementId: 'G-K6P6CH2SM0',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
