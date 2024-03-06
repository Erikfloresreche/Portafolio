
const trabajos = document.getElementById('trabajos');
const ventanaTrabajos = document.getElementById('ventana-trabajos');
const btnAbrirApp = document.getElementById('btn__open--app');

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

const btnCerrarVentana = document.querySelector('.ventana__info button').addEventListener('click', (e) => {
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

//EventListener para abrir los enlaces de los proyectos:

btnAbrirApp.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (ventanaTrabajos.classList.contains('ventana--active')) {
        let h1Text = btnAbrirApp.closest('.ventana__info').querySelector('h1').innerHTML;
        switch (h1Text) {
            case 'Galeria de Arte':
                window.open('https://erikfloresreche.github.io/GaleriaDeArte/', '_blank');
                break;
            case 'CineVerse':
                window.open('https://erikfloresreche.github.io/CineVerse/', '_blank');
                break;
            case 'SneakersDeal':
                window.open('https://erikfloresreche.github.io/SneakersDeal/', '_blank');
                break;
            case 'SmartControl':
                window.open('https://erikfloresreche.github.io/SmartControl/', '_blank');
                break;
            case 'BankTransfer':
                window.open(' https://erikfloresreche.github.io/BankTransfer/', '_blank');
                break;
            case 'Tic Tac Toe':
                window.open('https://erikfloresreche.github.io/TicTacToe/', '_blank');
                break;
            default:
                // Si el título no coincide con ninguno de los casos, no hacemos nada
                break;
        }
    }
});

