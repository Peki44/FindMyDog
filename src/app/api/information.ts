/*
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
    // TODO: add your firebase configuration for web
};

const app = initializeApp(firebaseConfig);

export async function getInformation(userId : Number, dogId : Number) {
    const db = getDatabase(app);
    const usersRef = ref(db, 'Users/' + userId + '/Dogs/' + dogId); // TODO: fix this path
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      // TODO: do something with the dog information

      return {
        name: data.name,
        breed: data.breed,
        age: data.age,
        weight: data.weight,
        owner: data.owner,
        address: data.address,
      }
    });
}
*/