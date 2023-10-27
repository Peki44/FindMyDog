'use client'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAA4NkW--hFiUn7E1l2oconhJGBzzhIHtQ",
  authDomain: "find-my-dog-7c135.firebaseapp.com",
  databaseURL: "https://find-my-dog-7c135-default-rtdb.firebaseio.com",
  projectId: "find-my-dog-7c135",
  storageBucket: "find-my-dog-7c135.appspot.com",
  messagingSenderId: "733494555982",
  appId: "1:733494555982:web:89a263f15aa332bdde5a1f",
  measurementId: "G-V86J1C4QML"
};


const app = initializeApp(firebaseConfig);

export async function getInformation(userId : String, dogId : String) {
  const db = getDatabase(app);
  const usersRef = ref(db, 'Users/' + userId + '/Dogs/' + dogId);
  let result = null;

  onValue(usersRef, (snapshot) => {
    const data = snapshot.val();
    result = data;
    return data;
  });

  return result;
}

/////////////////////////////////////////////////////////////////////////

// const db = getDatabase(app);
// const dbRef = ref(db, 'Users');

// const dbRef = ref(getDatabase());
// get(child(dbRef, `Users/EhjsdCvTTab9kwDdrGRauZpgAuA2`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });

// const db = getDatabase();
// const starCountRef = ref(db, 'Users/' + 'EhjsdCvTTab9kwDdrGRauZpgAuA2');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
// });

// onValue(dbRef, (snapshot) => {
//   snapshot.forEach((childSnapshot) => {
//     const childKey = childSnapshot.key;
//     const childData = childSnapshot.val();
//     console.log(childData);
//   });
//   return snapshot;
// });

// export async function getAllDataOnce(){
//   // const dbref=ref(db);
//   const dbRef = ref(db, 'Users');
//   onValue(dbRef,(snapshot)=>{
//       const allusers: any[] =[];

//       snapshot.forEach(childSnapshot=>{
//           allusers.push(childSnapshot.val());

//       });
//       return allusers;
//   });
// }

