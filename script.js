const galleta = document.getElementById("galleta");
const n_clicks_galleta = document.getElementById("n_clicks_galleta");
var contador = 0;

const fondo_multicolor = document.getElementById("multicolor");
const cambia_colores = document.getElementById("cambia_colores");

const reproducir_sonido = document.getElementById("barra_metal");
const sonido_barra_metal = document.getElementById("sonido_barra_metal");

galleta.addEventListener("click",()=>{
    contador +=1;
    n_clicks_galleta.innerHTML="¡Tienes "+contador+" galletas!"
    if(contador === 10){
        n_clicks_galleta.innerHTML ="¡Tienes diabetes! De nada :D"
    }
    if(contador > 10){
        contador_diabetes = contador -10
        n_clicks_galleta.innerHTML ="¡Tienes diabetes + " + contador_diabetes + " galletas!"
    }
})

cambia_colores.addEventListener("click",()=>{
    var nuevo_color = get_new_color();
    fondo_multicolor.style.backgroundColor = nuevo_color;
})

function get_new_color(){
    var digitos_hexadecimales = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        //Añade un digito  hexadecimal aleatorio
        color += digitos_hexadecimales[Math.floor(Math.random() * 16)];
    }
    return color;
}

reproducir_sonido.addEventListener("click",()=>{
    if (sonido_barra_metal.paused) {
        sonido_barra_metal.play();
    } else {
        sonido_barra_metal.currentTime = 0;
    }
})