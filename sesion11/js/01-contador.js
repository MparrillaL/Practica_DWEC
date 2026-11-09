// 01 Contador con límites
const menos = document.getElementById('menos');
const mas = document.getElementById('mas');
const valor = document.getElementById('valor');

let cuenta = 0;
// Comprueba: Al cargar, Restar está deshabilitado. Tras diez incrementos aparece 10 y Sumar queda deshabilitado. Al restar vuelve a habilitarse.
menos.disabled = true;

mas.addEventListener('click', () => {
    cuenta++;
    valor.textContent = cuenta;
    menos.disabled = false;
    if (cuenta === 10) {
        mas.disabled = true;
    }
});

menos.addEventListener('click', () => {
    cuenta--;
    valor.textContent = cuenta;
    mas.disabled = false;
    if (cuenta === 0) {
        menos.disabled = true;
    }
});



