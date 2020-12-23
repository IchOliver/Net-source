// Dependencies.
import * as ADMIN from 'firebase-admin'

// Generate Admin Instance.
export const generateAdminInstance = () => ADMIN.apps.find(app => app.name === 'SOURCE_ADMIN') || ADMIN.initializeApp({
  credential: ADMIN.credential.cert(require('./admin.firebase.json')),
  databaseURL: 'https://source-internet.firebaseio.com'
}, `SOURCE_ADMIN`)