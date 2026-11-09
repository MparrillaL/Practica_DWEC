// 03 Edición y teclado
// Comprueba: Pega texto con el ratón: la vista previa cambia. Enter confirma; Escape vacía campo y vista, pero conserva la confirmación anterior.

const texto = document.getElementById('texto');
const vista = document.getElementById('vista');
const confirmado = document.getElementById('confirmado');
const tecla = document.getElementById('tecla');

// input: salta con cualquier cambio del campo (teclear, pegar con el ratón, borrar...)
texto.addEventListener('input', () => {
    vista.textContent = texto.value;
});

// keydown: al PULSAR una tecla. Solo nos interesan Enter y Escape
texto.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        confirmado.textContent = texto.value;
    } else if (event.key === 'Escape') {
        texto.value = '';
        vista.textContent = '';   // la confirmación NO se toca
    }
});

// keyup: al SOLTAR una tecla, mostramos cuál fue
texto.addEventListener('keyup', (event) => {
    tecla.textContent = event.key;
});
