// firebase-initialization.js
document.addEventListener("DOMContentLoaded", function () {
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

 let userInputLogin = document.getElementById("loginEmail");
 let passwordInputLogin = document.getElementById("loginPassword");
 let userInputCreate = document.getElementById("signupEmail");
 let nameInputCreate = document.getElementById("signupName");
 let passwordInputCreate = document.getElementById("signupPassword");

 let createUser = document.getElementById("createUser");

 let signInUser = document.getElementById("signinButton");

 createUser &&
  createUser.addEventListener("click", () => {
   if (
    userInputCreate.value &&
    passwordInputCreate.value != "" &&
    nameInputCreate.value != ""
   ) {
    signUp();
   } else {
    alert("Por favor, preencha todos os campos.");
    return;
   }
  });

 signInUser &&
  signInUser.addEventListener("click", () => {
   if (userInputLogin.value || passwordInputLogin.value != "") {
    signIn();
   }
  });

 function signUp() {
  let email = userInputCreate.value;
  let password = passwordInputCreate.value;
  let name = nameInputCreate.value;
  console.log(email, password, name);
  if (!validator.isEmail(email)) {
   alert("Por favor, insira um endereço de e-mail válido.");
   return;
  }

  auth
   .createUserWithEmailAndPassword(email, password)
   .then((userCredential) => {
    return userCredential.user
     .updateProfile({
      displayName: name,
     })
     .then(() => {
      return db.collection("users").doc(userCredential.user.uid).set({
       email: email,
       password: password,
       displayName: name,
      });
     });
   })
   .then(() => {
    alert("Usuário criado com Sucesso! :)");
    setTimeout(() => {
     window.location.replace(
      "/home/marilia/Documentos/encurtador/BlinkShort/initialPage.html"
     );
    }, 1000);
   })
   .catch((err) => {
    alert("Favor, verifique os dados digitados");
    console.error(err);
   });
 }

 function signIn() {
  let email = userInputLogin.value;
  let password = passwordInputLogin.value;

  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
   auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
     console.log("Usuário logado");
     window.location.replace(
      "/home/marilia/Documentos/encurtador/BlinkShort/initialPage.html"
     );
    })
    .catch((error) => {
     alert(
      "Usuário não encontrado!\n Verifique seus dados ou crie um novo usuário :)"
     );
    });
  });
 }
});

function showSignInForm() {
 document.getElementById("signInForm").style.display = "block";
 document.getElementById("signUpForm").style.display = "none";
}

function showSignUpForm() {
 document.getElementById("signUpForm").style.display = "block";
 document.getElementById("signInForm").style.display = "none";
}
