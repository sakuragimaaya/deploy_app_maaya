import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MESSAGINGSENDER_ID,
};
// Initialize Firebas,
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export const createMydata = async (first, last, born) => {

    await db
        .collection('users')
        .add({
            first: first,
            last: last,
            born: born,
        })
        .then(function (docRef) {
            console.log('Document written with ID:', docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
};

export const createData = async () => {
    await db
        .collection('users')
        .add({
            first: 'sakuragi',
            last: 'maaya',
            born: 1825,
        })
        .then(function (docRef) {
            console.log('Document written with ID:', docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
};

export const readData = async () => {
    await db
        .collection('users')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`first:${doc.data().first}`);
                console.log(`last:${doc.data().last}`);
                console.log(`born:${doc.data().born}`);
            });
        });
};

export const updateData = async () => {
    const ref = await db.collection('users').doc('Ys3AisOP1UpuCviGAzLS');

    return ref
        .update({
            fist: 'sakuragi',
            last: 'maaya',
            born: 1992,
        })
        .then(function () {
            console.log('Document succressfully updated!');
        })
        .catch(function (error) {
            console.log('Error updating document:', error);
        });
};

export const deleteData = async () => {
    await db.collection('users').doc('Ys3AisOP1UpuCviGAzLS').delete()
        .then(function () {
            console.log('stor')
        })
}

export default firebase;