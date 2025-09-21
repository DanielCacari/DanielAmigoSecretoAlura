// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let ListaAmigos = []

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Agrega un amigo a la lista
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (ListaAmigos.includes(nombre)) {
        alert('El amigo ya está en la lista');
        return;
    }   else {
        // Verifica que el nombre no esté vacío
            if (nombre.trim() === '') {
                alert('No se puede agregar un nombre vacío');
                return;
            }
        //Agrega el nombre al arreglo de amigos    
        ListaAmigos.push(nombre);
        document.getElementById('amigo').value = '';
        console.log(ListaAmigos);
        // Actualiza la lista en el HTML en formato verticar con la etiqueta <br>
        document.getElementById('listaAmigos').innerHTML = ListaAmigos.join('<br>');  
    }
}

// Sortea un amigo de la lista y lo muestra en pantalla
function sortearAmigo() {
    if (ListaAmigos.length == 0) {
        alert('Ya no Hay amigos para sortear');
        return;
    } else {
        let indiceSorteado = Math.floor(Math.random() * ListaAmigos.length);
        let amigoSorteado = ListaAmigos[indiceSorteado];
        asignarTextoElemento('ul',`El amigo sorteado es: ${amigoSorteado}`);
        console.log(`El amigo sorteado es: ${amigoSorteado}`);
        // Elimina al amigo sorteado de la lista para que no pueda ser sorteado nuevamente
        ListaAmigos.splice(indiceSorteado, 1);
       
       
    }
}
// Crea una nueva lista de amigos, vaciando la lista actual y limpiando el HTML
function NuevaLista() {
    ListaAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
}   