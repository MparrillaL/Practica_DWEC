// 04 Contar tipos de eventos
// Comprueba: Haz un doble clic: en el gesto habitual se registran dos click y un dblclick. Sal y vuelve a entrar con el puntero para aumentar mouseover.

const zona = document.getElementById('zona');
const cuentas = document.getElementById('cuentas');
const aviso = document.getElementById('aviso');

// Los tres contadores, fuera de los manejadores para que no se reinicien
let clicks = 0;
let dobles = 0;
let pasos = 0;

// Única función que pinta los contadores (\n = salto de línea dentro del <pre>)
function pintar() {
    cuentas.textContent = `click: ${clicks}\ndblclick: ${dobles}\nmouseover: ${pasos}`;
}

zona.addEventListener('click', () => {
    clicks++;
    pintar();
});

zona.addEventListener('dblclick', () => {
    dobles++;
    pintar();
});

zona.addEventListener('mouseover', () => {
    pasos++;
    pintar();
});

// Manejador aparte con once: se ejecuta en el primer click y se retira solo
zona.addEventListener('click', () => {
    aviso.textContent = 'Primer uso';
}, { once: true });

pintar(); // al cargar, para que se vean los contadores a 0
