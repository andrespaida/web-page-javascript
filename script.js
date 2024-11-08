// Obtener el botón por su ID
const boton = document.getElementById('cambiar-color');

// Función para cambiar el color de fondo
function cambiarFondo() {
    const colores = ['#f39c12', '#e74c3c', '#2ecc71', '#9b59b6', '#3498db'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}

// Asignar la función al evento de clic en el botón
boton.addEventListener('click', cambiarFondo);
