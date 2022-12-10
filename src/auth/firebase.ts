// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
	getAuth,
	GoogleAuthProvider,
	FacebookAuthProvider,
	EmailAuthProvider,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCXzWsx9NUl0ZjuG7KOxbjr5myXH7IEMl8',
	authDomain: 'kfbmk-344618.firebaseapp.com',
	projectId: 'kfbmk-344618',
	storageBucket: 'kfbmk-344618.appspot.com',
	messagingSenderId: '495139186632',
	appId: '1:495139186632:web:de4c7a3bf0b4a715c9c2fd',
	measurementId: 'G-1GYZ28X74Y',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const firebase = getFirestore(app)
export const analytics = getAnalytics(app)
export const googleProvider = new GoogleAuthProvider()
export const emailAuthProvider = new EmailAuthProvider()
