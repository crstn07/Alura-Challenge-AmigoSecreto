// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo != "") {
        amigos.push(amigo)
        document.getElementById('amigo').value = "";
        actualizarLista();
    } else{
        alert("Por favor, inserte un nombre.")
    };
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let item = document.createElement('li');
        item.innerHTML = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = amigoSorteado;
}