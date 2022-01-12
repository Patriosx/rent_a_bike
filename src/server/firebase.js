// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { collection, getDocs, updateDoc } from "firebase/firestore/lite";
import {
  doc,
  getFirestore,
  onSnapshot,
  collection,
  getDocs,
  updateDoc,
  orderBy,
  query,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: `${process.env.REACT_APP_PROJECTID}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_MSGIDSENDER,
  appId: process.env.REACT_APP_APPIDI,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//collection Ref
const colRef = collection(db, "schedules");

export async function getSchedulesFirebase() {
  try {
    const q = query(colRef, orderBy("time", "asc"));
    /*opcion 1
    const scheduleRef = await getDocs(collection(db, "schedules"));
    const scheduleList = scheduleRef.docs.map((doc) => doc.data());
    return scheduleList;
    */
    /* opcion 2*/
    const querySnapshot = await getDocs(q);
    const tmp = [];
    querySnapshot.forEach((doc) => {
      tmp.push({ id: doc.id, ...doc.data() });
    });
    return tmp;
  } catch (error) {
    console.log(error);
  }
}

export async function bookingBikeFirebase(schedule, user) {
  try {
    const docRef = doc(db, "schedules", schedule.id);
    let isCurrentUser = schedule.customers.includes(user);
    //Añade
    if (!isCurrentUser) {
      if (schedule.available === 0) return;
      const tmp = [...schedule.customers, user];
      await updateDoc(docRef, {
        available: schedule.available - 1,
        customers: tmp,
      });
    } else {
      //Elimina
      const tmp = schedule.customers.filter((customer) => customer !== user);
      console.log(tmp);
      await updateDoc(docRef, {
        available: schedule.available + 1,
        customers: tmp,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
