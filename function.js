
function getBlinkShort() {
    var valor = document.getElementById("link").value; /// Acessando URL original no form
    $.getJSON("https://is.gd/create.php?callback=?", { /// Retornando dados do servidor em formato JSON
        url: valor,
        format: "json"
    }).done(function (data) { /// Chamada da função com os dados retornados como parâmetro
        let novaUrl = data.shorturl;
        console.log(novaUrl);
        if (novaUrl !== undefined) /// Testando link 
        {
            document.getElementById("url_encurtada").innerHTML = novaUrl;
        } else
        {
            document.getElementById("url_encurtada").innerHTML = "Erro ao gerar link";
        }
    });
}

function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log("signUp called", email, password);
  
    // Criar conta usando email e senha
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        // Registro bem-sucedido
        var user = userCredential.user;
        alert("Conta criada com sucesso!");
      })
      .catch(function (error) {
        // Lidar com erros de registro
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }
  
  function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        var user = userCredential.user;
        document.getElementById("login-container").style.display = "none";
        document.getElementById("user-info").style.display = "block";
        document.getElementById("user-email").innerText = user.email;
      })
      .catch(function (error) {
        // Lidar com erros de login
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }
  
  function signOut() {
    firebase.auth()
      .signOut()
      .then(function () {
        // Logout bem-sucedido
        document.getElementById("login-container").style.display = "block";
        document.getElementById("user-info").style.display = "none";
      })
      .catch(function (error) {
        // Lidar com erros de logout
        alert(error.message);
      });
  }