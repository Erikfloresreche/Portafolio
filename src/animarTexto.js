
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
        },100 * i)
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

export default animarTexto;