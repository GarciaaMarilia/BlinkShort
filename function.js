function validar() {

    var Login = document.getElementById("Tlogin").value;
    var Senha = document.getElementById("Tsenha").value;

    var firebaseConfig = { /// Inicializando Banco de Dados Firebase
        apiKey: "AIzaSyAkmx63ZhPAlaalV2MSeRzamt7vuXQNl-g",
        authDomain: "marilia-proj.firebaseapp.com",
        projectId: "marilia-proj",
        storageBucket: "marilia-proj.appspot.com",
        messagingSenderId: "287774404730",
        appId: "1:287774404730:web:76ac67286a1dfd1c844bc3"
    };

    firebase.initializeApp(firebaseConfig);

    var tabLogon = db.collection("Logon"); 

    const dbRef = firebase.database().ref();
    dbRef.child("Logon").child(logon).get().then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            return true;
        } else {
            console.log("No data available");
            return false;
        }
    }).catch((error) => {
        console.error(error);
    });
}

function EncURL() {
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