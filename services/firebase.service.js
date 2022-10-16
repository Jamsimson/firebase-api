const {initializeApp} = require("firebase/app");
const getFirestore = require("firebase/firestore");
const {getAuth }= require("firebase/auth");
const {signInWithEmailAndPassword} = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyB7-yzZaYzwcniOocP3BumyDvqD5C0rH2w",
  authDomain: "fir-b1362.firebaseapp.com",
  projectId: "fir-b1362",
  storageBucket: "fir-b1362.appspot.com",
  messagingSenderId: "991788207502",
  appId: "1:991788207502:web:cfb27d25e722bf147968df",
  measurementId: "G-T7633N0CYG",
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const auth = getAuth(app);

//  sing-in auth.email, auth.password
async function singin(studentAuth) {
  const email = studentAuth.email
  const password = studentAuth.password
  console.log(`Sing-in:email ${email} Sing-in:password ${password}`);
  
  await signInWithEmailAndPassword(auth,email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("🚀 ~ .then ~ user", user);
      return user
    })
    .catch((error) => {
      console.log(`error sing-in`,error);
      
    });
}

module.exports = {
  singin
}
