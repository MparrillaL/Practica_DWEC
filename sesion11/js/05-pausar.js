// 05 Pausar y reanudar un manejador
// Comprueba: Cuenta dos veces, pausa y pulsa Contar: sigue en 2. Reanuda tres veces y pulsa Contar una vez: aparece 3.

const contar = document.getElementById('contar');
const pausar = document.getElementById('pausar');
const reanudar = document.getElementById('reanudar');
const cuenta = document.getElementById('cuenta');

let n = 0; // fuera del manejador: pausar no borra la cuenta

// Función CON NOMBRE: removeEventListener necesita la misma referencia
// que se usó al registrarla. Con una función flecha anónima no funcionaría.
function incrementar() {
    n++;
    cuenta.textContent = n;
}

contar.addEventListener('click', incrementar);

pausar.addEventListener('click', () => {
    contar.removeEventListener('click', incrementar);
});

// Registrar la misma función varias veces en el mismo evento no la duplica,
// así que reanudar tres veces sigue sumando de uno en uno.
reanudar.addEventListener('click', () => {
    contar.addEventListener('click', incrementar);
});
