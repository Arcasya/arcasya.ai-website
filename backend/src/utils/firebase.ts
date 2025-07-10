// src/utils/firebase.ts
import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp(); // No service account — uses application default
}

export default admin;
