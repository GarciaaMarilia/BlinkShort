// app.js

const firebaseConfig = {
 apiKey: "AIzaSyBeUqPyYJxOSKRk1dcGW3M0FKonfzlnKR0",
 authDomain: "blinkshort-4f6dc.firebaseapp.com",
 projectId: "blinkshort-4f6dc",
 storageBucket: "blinkshort-4f6dc.appspot.com",
 messagingSenderId: "128874598957",
 appId: "1:128874598957:web:bdd3b9a32027a852155ea4",
 measurementId: "G-HQ9MM24F6W",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

let userInput = document.getElementById("loginEmail");
let passwordInput = document.getElementById("loginPassword");

let createUser = document.getElementById("createUser");

createUser.addEventListener("click", () => {
 if (userInput.value || passwordInput.value != "") {
  signUp();
 }
});

function signUp() {
 let email = userInput.value;
 let password = passwordInput.value;

 document.getElementById("createUser").addEventListener("click", function () {
  var emailInput = document.getElementById("loginEmail").value;

  if (!validator.isEmail(emailInput)) {
   alert("Por favor, insira um endereço de e-mail válido.");
   return;
  }
 });

 auth
  .createUserWithEmailAndPassword(email, password)
  .then((data) => {
   db.collection("users").doc(data.user.uid).set({
    email: email,
    password: password,
   });
   alert("Usuário criado com Sucesso! :)");
   setTimeout(() => {
    window.location.replace("../index.html");
   }, 1000);
  })
  .catch((err) => {
   alert("Favor, verifique os dados digitados");
   console.error(err);
  });
}

function signIn() {
 var email = document.getElementById("loginEmail").value;
 var password = document.getElementById("loginPassword").value;

 auth
  .signInWithEmailAndPassword(email, password)
  .then(function (userCredential) {
   var user = userCredential.user;
   document.getElementById("userInfo").style.display = "block";
   document.getElementById("userEmail").innerText = user.email;
  })
  .catch(function (error) {
   alert(error.message);
  });
}

function signOut() {
 auth
  .signOut()
  .then(function () {
   document.getElementById("userInfo").style.display = "none";
  })
  .catch(function (error) {
   alert(error.message);
  });
}
