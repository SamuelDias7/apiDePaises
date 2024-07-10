function metodo(numero, container){
    document.addEventListener("DOMContentLoaded", function() {

        fetch('http://localhost:8080/exibir/' + numero)
            .then(response => response.json())
            .then(data => {

                var NovoParagrafo = document.createElement("h1");
                NovoParagrafo.textContent = data.pais;

                var Capital = document.createElement("p");
                Capital.textContent = "capital: " +data.capital;

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


            })

            
            .catch(error => console.error('Erro ao buscar dados:', error));

});
}

metodo(1,1);
metodo(2,2);
metodo(3,3);
metodo(4,4);
metodo(5,5);
metodo(6,6);
metodo(7,7);
metodo(8,8);