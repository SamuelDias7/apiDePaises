//voltando a codar

function metodo(numero, container){

    //DOM serve pra que o javascript tenha acesso ao HTMl(acesse, manipule e interaja)
    document.addEventListener("DOMContentLoaded", function() {

        fetch('http://localhost:8080/exibir/' + numero)
            .then(response => response.json())
            .then(data => {

                var NovoParagrafo = document.createElement("h1");
                NovoParagrafo.textContent = data.pais;

                var Capital = document.createElement("p");
                Capital.textContent = "capital: "+ data.capital;

                var Continente = document.createElement("p")
                Continente.textContent = "continente: " + data.continente;

                var Idioma = document.createElement("p")
                Idioma.textContent = "idioma: "+ data.idioma;

                var Presidente = document.createElement("p")
                Presidente.textContent = "presidente: " + data.presidente;



                    var Container = document.getElementById("container-pais" + container);
                    Container.appendChild(NovoParagrafo)
                    Container.appendChild(Capital)
                    Container.appendChild(Continente)
                    Container.appendChild(Idioma)
                    Container.appendChild(Presidente)

                    let insta = document.getElementById("insta")
                    insta.innerText = "Instagram: samuel.dias7 ";

                    let email = document.getElementById("email")
                    email.innerText = "Email: dias7.sam@gmail.com";

                    let github = document.getElementById("github")
                    github.innerHTML = "GitHub: SamuelDias7";

                    let barraDePesquisa = document.getElementById("pesquisar").value
            })

            .catch(error => console.error('Erro ao buscar dados:', error));

});

}

let numeroAleatorio = 0;
let numeroAleatorioInteiro = 0;
let testando = 9;
var array_name = []
var array_repetidos = [9]

let checar = 0;

function gerarNumero(){

    //Gera o numero Aleatorio
    numeroAleatorio = Math.random();
    numeroAleatorio = numeroAleatorio * 10 + 1;
    numeroAleatorioInteiro = parseInt(numeroAleatorio)
    console.log("O numero alatorio é:" + numeroAleatorioInteiro)


    console.log("Os numeros que foram encontrados são: "+ array_repetidos)

    if(array_repetidos.includes(numeroAleatorioInteiro)){
        console.log("Esta incluso");

    }else{

        console.log("nao esta incluso");
        array_name.push(numeroAleatorioInteiro)
        console.log("Numero que nao foram repetidos:" + array_name)
    }

    array_repetidos.push(numeroAleatorioInteiro);


}

//O Erro do codigo acontece quando o if aonde esta escrito "Esta incluso" entra em cena


//Otimizar isto aqui, pois essa falta de organização esta atrapalhando a resolução de bugs
gerarNumero();
metodo(array_name[0],1);
gerarNumero();
metodo(array_name[1],2);
gerarNumero();
metodo(array_name[2],3);
gerarNumero();
metodo(array_name[3],4);
gerarNumero();
metodo(array_name[4],5);
gerarNumero();
metodo(array_name[5],6);
gerarNumero();
metodo(array_name[6],7);
gerarNumero();
metodo(array_name[7],8);
gerarNumero();
metodo(array_name[8],8);
gerarNumero();

function pegarDado(){
    let campo = document.getElementById("Input-pesquisar").value
    alert(campo)

    let limpar = document.getElementById("Input-pesquisar").value = "";



    /*
    window.location.href = "http://localhost:8080/exibir/4";

    */
}