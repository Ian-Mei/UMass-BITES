import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';

export const getDb = (): Firestore => {
  const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: 'umass-nuts',
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  };
  let db = null;

  return db === null ? db = getFirestore(initializeApp(firebaseConfig)) : db;
}
