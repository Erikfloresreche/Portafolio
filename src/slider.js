
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