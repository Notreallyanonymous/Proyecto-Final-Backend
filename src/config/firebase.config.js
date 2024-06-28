import {getApp, getApps, initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'

// Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHO_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSENGING_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };

  const app = getApps.length>0 ? getApp() : initializeApp(firebaseConfig)
  const storage = getStorage(app)

  export {app, storage}