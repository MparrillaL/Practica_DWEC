// 02 Origen del clic y elemento que escucha
// Comprueba: Al pulsar el texto, el origen es SPAN y quien escucha es BUTTON. En el relleno del botón, ambos son BUTTON.

const boton = document.getElementById('accion');
const output = document.getElementById('info');

let clics = 0; // fuera del manejador para que no se reinicie en cada clic

boton.addEventListener('click', (event) => {
    clics++;
    output.textContent = `Origen: ${event.target.tagName}, Escucha: ${event.currentTarget.tagName}, Clics: ${clics}`;
});

