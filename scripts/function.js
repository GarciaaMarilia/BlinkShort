
function getBlinkShort() {
    console.log('oiiii')
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
