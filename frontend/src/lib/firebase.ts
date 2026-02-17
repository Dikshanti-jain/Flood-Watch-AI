import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB4VQTkbZww26YPnvDVjBVk3j1_8axZb-0",
    authDomain: "equinox-auth.firebaseapp.com",
    projectId: "equinox-auth",
    storageBucket: "equinox-auth.firebasestorage.app",
    messagingSenderId: "642419106933",
    appId: "1:642419106933:web:b5c202a6b4e47ef25c043c",
    measurementId: "G-2G934489X9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
