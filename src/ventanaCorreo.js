
const botonesEmail = document.querySelectorAll('[data-action="abrir-ventana-correo"]');
const botonesCerrar = document.querySelectorAll('[data-action="cerrar-ventana"]');
const ventanaCorreo = document.getElementById('ventana-correo');


botonesEmail.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        ventanaCorreo.classList.add('ventana--active')
    });
});

botonesCerrar.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        ventanaCorreo.classList.remove('ventana--active');
    })
});