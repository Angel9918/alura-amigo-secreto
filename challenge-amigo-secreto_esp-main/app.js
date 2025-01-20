// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let texto = input.value;

    if (texto != '') {
        amigos.push(texto);
        let listado = document.getElementById('listaAmigos');
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = texto;
        listado.appendChild(nuevoAmigo);
        input.value = "";
    } else {
        alert('Por favor, ingrese un nombre');}
}


function sortearAmigo() {
    if (amigos.length == 0) {
        alert('Por favor, ingrese al menos un amigo.');
    } else {
        let listaAmigos = document.getElementById('listaAmigos');
        let textoResultado = document.getElementById('resultado');
        let listaAmigosArray = Array.from(listaAmigos.children);
        let arrayAmigos = listaAmigosArray.length;

        let seleccion = Math.floor(Math.random() * arrayAmigos) + 1;
        listaAmigos.textContent = '';
        textoResultado.textContent = `El amigo secreto sorteado es ${listaAmigosArray[seleccion - 1].textContent}`;
    }
}