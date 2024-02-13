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
 const auth = firebase.auth();

 function signOut() {
  const user = auth.currentUser;
  if (user) {
   auth
    .signOut()
    .then(function () {
     setTimeout(() => {
      window.location.replace(
       "/home/marilia/Documentos/encurtador/BlinkShort/index.html"
      );
     }, 500);
    })
    .catch(function (error) {
     alert(error.message);
    });
  }
 }

 function displayUserName() {
  const user = auth.currentUser;
  if (user) {
   const userName = user.displayName;
   document.getElementById(
    "userModalLabel"
   ).textContent = `Hello, ${userName}!`;
  } else {
   document.getElementById("userModalLabel").textContent =
    "Usuário não encontrado";
  }
 }

 document
  .getElementById("getUserButton")
  .addEventListener("click", displayUserName);

 document.getElementById("signoutButton").addEventListener("click", signOut);
});

function getBlinkShort() {
 var valor = document.getElementById("link").value;
 $.getJSON("https://is.gd/create.php?callback=?", {
  url: valor,
  format: "json",
 }).done(function (data) {
  let novaUrl = data.shorturl;

  if (novaUrl !== undefined) {
   document.getElementById("shortedLink").innerHTML = novaUrl;
  } else {
   document.getElementById("shortedLink").innerHTML = "Erro ao gerar link";
  }
 });
}
