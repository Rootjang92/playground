import firebase from 'firebase/app';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyDl07FqvEMGDkX-MlNOTs4UP33N-GnDBHE",
  authDomain: "image-upload-react-b9a0a.firebaseapp.com",
  databaseURL: "https://image-upload-react-b9a0a.firebaseio.com",
  projectId: "image-upload-react-b9a0a",
  storageBucket: "image-upload-react-b9a0a.appspot.com",
  messagingSenderId: "229849509462",
  appId: "1:229849509462:web:e9fff764b3a318776d55f7"
}

firebase.initializeApp(config);

const storage = firebase.storage();

export {
  storage, firebase as default
};
