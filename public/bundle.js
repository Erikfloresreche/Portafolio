'use strict';

const animarTexto = (texto) => {
    const numeroLetras = texto.dataset.texto.length;

    //Activamos el cursor cuando comienza la animación.
    const cursor = texto.querySelector('.hero__cursor');
    cursor.classList.add('hero__cursor--visible');

    //Por cada letra, la agregamos al DOM con 100ms de separación.
    for(let i = 0; i < numeroLetras; i++){
        setTimeout(() => {
            const letra = document.createElement('span');
            letra.append(texto.dataset.texto[i]);
            texto.append(letra);
        },100 * i);
    }

    setTimeout(() => {
        //Obtenemos los cursores:
        const cursores = [...texto.closest('.hero__header').querySelectorAll('.hero__cursor')];
        //Obtenemos el index del cursor actual
        const indexCursorActual = cursores.indexOf(cursor);
        
        //Comprobamos que el cursor no sea el ultimo:
        if(indexCursorActual < cursores.length - 1){
            cursor.classList.remove('hero__cursor--visible');
        } else {
            cursor.classList.add('hero__cursor--active');
        }
    }, numeroLetras * 100);

    //Retornamos una promesa para saber cuando la animacion acaba:
    return new Promise((resolve) => setTimeout(resolve, numeroLetras * 100))


};

const galeria  =  document.getElementById('trabajos');

const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting){
        const trabajos = galeria.querySelectorAll('.trabajos__imagenes a');
        trabajos.forEach((trabajo, index) => {
            setTimeout(() => {
                trabajo.classList.add('trabajos__trabajo--visible');

            }, 300 * index);
        });
    }
}, {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5,
});

observer.observe(galeria);

const trabajos = document.getElementById('trabajos');
const ventanaTrabajos = document.getElementById('ventana-trabajos');

const datos = [
    {
        id: '1',
        titulo: 'Galeria de Arte',
        texto: 'Explora el mundo del arte con esta galería creada con HTML, CSS y JavaScript. Sumérgete en las obras maestras de los 10 mejores pintores de todos los tiempos, mientras descubres sus 10 obras más emblemáticas. Desde el impresionismo hasta el renacimiento, esta galería te llevará en un viaje fascinante a través de la historia del arte.',
    },
    {
        id: '2',
        titulo: 'CineVerse',
        texto: 'Adéntrate en el mundo del cine y la televisión con esta aplicación, desarrollada con HTML, CSS y JavaScript, que utiliza la API de The Movie Database. Explora una amplia selección de películas y series, filtrando por género y año para encontrar la opción perfecta para ti. Con una función de paginación integrada que permite navegar fácilmente a través de los resultados.',
    },
    {
        id: '3',
        titulo: 'SneakersDeal',
        texto: '¿Te gustan las zapatillas? Con esta aplicación, puedes agregar al carrito tus bambas favoritas junto con su talla y color. Cuenta con un carrito inteligente que permite sumar y restar cantidades fácilmente. Puedes consultar reseñas detalladas del producto y una pequeña sección explicativa sobre el envío. Aunque actualmente solo cuenta con una variedad de una sola marca, pronto se podrá disfrutar de una amplia selección de bambas Nike y Adidas.',
    },
    {
        id: '4',
        titulo: 'SmartControl',
        texto: 'Administra tus gastos fácilmente con esta aplicación, donde puedes registrar gastos de comida u otros ítems. Tendrás la posibilidad de editar o eliminar cada entrada de gasto de tu lista. Además, la aplicación calcula automáticamente los gastos totales del mes, brindándote un resumen claro de tus finanzas.',
    },
    {
        id: '5',
        titulo: 'BankTransfer',
        texto: 'Con esta aplicación, podemos simular una transacción bancaria. Implementa rigurosas validaciones mediante Regex que aseguran que solo se avance al siguiente paso cuando se ingresen correctamente los valores requeridos. Con esta herramienta, disfruta de una experiencia segura y confiable en tus transacciones financieras.',
    },
    {
        id: '6',
        titulo: 'Tic Tac Toe',
        texto: 'Sumérgete en partidas emocionantes mientras disfrutas de la simplicidad y diversión de este clásico juego de estrategia creado con HTML, CSS y JavaScript.',
    },
];

trabajos.addEventListener('click', (e) => {
    e.preventDefault();

    //Comprobamos que el usuario ha hecho click en un trabajo:
    const trabajoClickeado = e.target.closest('.trabajos__trabajo');
    if(trabajoClickeado) {
        //Obtenemos el id del trabajo clickeado:
        const id = trabajoClickeado.dataset.id;
        
        const trabajo = datos.filter((trabajo) => {
            if(trabajo.id === id){
                return trabajo
            }
        });

        //Trabajamos con desestructuración: 
        const {titulo, texto} = trabajo[0];

        ventanaTrabajos.querySelector('.ventana__titulo').innerText = titulo;
        ventanaTrabajos.querySelector('.ventana__parrafo').innerText = texto;
        ventanaTrabajos.querySelector('.ventana__imagen').src = trabajoClickeado.querySelector('img').src;

        ventanaTrabajos.classList.add('ventana--active');
    }
});

//EventListener para cerrar la ventana de los trabajos:

document.querySelector('.ventana__info button').addEventListener('click', (e) => {
    e.preventDefault();

    ventanaTrabajos.classList.remove('ventana--active');
});

//EventListener para cerrar la ventana si clickan en el overlay:

ventanaTrabajos.querySelector('.ventana__overlay').addEventListener('click', (e) => {
    e.preventDefault();
    
    if(e.target.matches('.ventana__overlay')){
        ventanaTrabajos.classList.remove('ventana--active');
    }
});

const slider =  document.getElementById('slider');

let clickPresionado = false;
let coordenadaInicial;
let scrollLeft;

const presiona = (e) => { 
    clickPresionado = true;

    coordenadaInicial = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    // e.pageX = Coordenada horizontal del evento. En que coordenada dimos click con respecto al documento.
    // console.log('startX:', e.pageX);
    // //offsetLeft = Es el espacio entre el inicio de nuestro slider y su izq.
    // console.log('slider.offsetLeft:', slider.offsetLeft);
    // //scrollLeft = Podemos saber cuanto px de slider hemos avanzado.
    // console.log('scrollLeft:', slider.scrollLeft);
};  
const mueve = (e) => {
    if(!clickPresionado){
        return
    }
    const espacio = e.pageX - slider.offsetLeft;
    const distanciaRecorrida = espacio - coordenadaInicial;

    slider.scrollLeft = scrollLeft - distanciaRecorrida;
};  
const suelta = (e) => {
    clickPresionado = false;
};  

//Mousedown nos permite detectar cuando el usuario da un click dentro del slider.
slider.addEventListener('mousedown', presiona); 
//MouseMove nos permite detectar cuando el cursor se mueve dentro de nuestro slider
slider.addEventListener('mousemove', mueve); 
//MouseUp nos permite detectar cuando el usuario suelta el click.
slider.addEventListener('mouseup', suelta);

const botonesEmail = document.querySelectorAll('[data-action="abrir-ventana-correo"]');
const botonesCerrar = document.querySelectorAll('[data-action="cerrar-ventana"]');
const ventanaCorreo = document.getElementById('ventana-correo');


botonesEmail.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        ventanaCorreo.classList.add('ventana--active');
    });
});

botonesCerrar.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        ventanaCorreo.classList.remove('ventana--active');
    });
});

window.addEventListener('load', async() => {
    await animarTexto(document.querySelector('.hero__titulo--uno'));
    await animarTexto(document.querySelector('.hero__titulo--dos'));

    document.querySelectorAll('.hero__burbuja')[0].classList.add('hero__burbuja--active-1');
    document.querySelectorAll('.hero__burbuja')[1].classList.add('hero__burbuja--active-2');

});
//# sourceMappingURL=bundle.js.map
