import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC8-RoJLnUPKntUHdYj9w1dVkL7oxAFqA0',
  authDomain: 'vuex4-fb9-auth.firebaseapp.com',
  projectId: 'vuex4-fb9-auth',
  storageBucket: 'vuex4-fb9-auth.appspot.com',
  messagingSenderId: '562859238522',
  appId: '1:562859238522:web:13ff8c3659968ccdb387c3',
};

// initialize firebase
initializeApp(firebaseConfig);

// initialize firebase auth
const auth = getAuth();

export { auth };
