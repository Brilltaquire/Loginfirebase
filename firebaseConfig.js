import { initializeApp } from "firebase/app";
import { getApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCYh3V1p-qdd-99n6He-F_Eo7jvJaoSw4E",
    authDomain: "dbloginhelenn.firebaseapp.com",
    projectId: "dbloginhelenn",
    storageBucket: "dbloginhelenn.appspot.com",
    messagingSenderId: "896350744120",
    appId: "1:896350744120:web:e0cb8997a66cacb8b100cd"
  };
 if(!getApp.length){
   initializeApp( firebaseConfig);

}
 export{firebaseConfig};

const app = initializeApp(firebaseConfig);