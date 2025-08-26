let amigos =[];
const maxAmigos = 5;

function agregarAmigo(){

  const inputAmigo=document.getElementById("amigo");
  const listaAmigos=document.getElementById("listaAmigos");
  const nombre=inputAmigo.value.trim();


 
   if (nombre === '') {
                alert('Por favor, ingresa un nombre válido.');
                return;
            } 
if (amigos.length >= maxAmigos) {
                alert(`Solo puedes agregar hasta ${maxAmigos} amigos.`);
                return;
                 }
if (amigos.includes(nombre)) {
                alert('Este nombre ya está en la lista.');
                return;
                }
                amigos.push(nombre);
                inputAmigo.value = '';
            inputAmigo.focus();
           


}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
