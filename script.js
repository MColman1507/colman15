window.addEventListener('load', init)
const API= "https://clientes.api.greenborn.com.ar/public-random-word?l=5"

let chances = 6;
let diccionario=['APPLE','TRUCK','JUICE','LEMON','JOINT','PHOTO','TRUTH','MOUTH','HONEY','MOUSE','PIECE','BRUSH']
let random = Math.random()*diccionario.length
random=Math.floor(random)
let palabra = diccionario[random]
function init(){
}
fetch(API).then((response)=>{
    response.json().then((response)=>{
    palabra=response[0].toUpperCase()
    console.log(palabra)
    })})
   

//interfaz
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

function intentar(){
    const input = document.getElementById("guess-input");
    const valor = input.value;
    const INTENTO = leerIntento();

    function leerIntento(){
        let intento = document.getElementById("guess-input");
        intento = intento.value;
        intento = intento.toUpperCase(); 
        return intento;
    }

    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    

    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor =        '#79b851';

        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';


        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN)
        GRID.appendChild(ROW)
        }
        if (INTENTO === palabra ) {
            terminar("<h1>GANASTE!😀</h1>")
            return
        }
        chances--
        
            if (chances==0){
                terminar("<h1>PERDISTE!😖</h1>")
                vidamenos();
                return
                
            }
            vidamenos();
    }
    function vidamenos(){
        let contenedor = document.getElementById('vida')
        switch (chances){
            case 5:
        contenedor.innerHTML = "<h2>      5 Intentos 😃</h2>"
         break;
            case 4:
        contenedor.innerHTML = "<h2>      4 Intentos 🙂</h2>"
        break;
            case 3:
        contenedor.innerHTML = "<h2>      3 Intentos 🤨</h2>"
        break;
            case 2:
        contenedor.innerHTML = "<h2>      2 Intentos 😟</h2>"
        break;
            case 1:
        contenedor.innerHTML = "<h2>      1 Intentos 🥺</h2>"
        break;
            case 0:
        contenedor.innerHTML = "<h2>      No te quedan intentos 💀</h2>"
        break;
        }
    }

    function terminar(mensaje){
        const INPUT = document.getElementById("guess-input");
        INPUT.disabled = true;
        button.innerHTML="Reiniciar"
        let contenedor = document.getElementById('guesses');
        contenedor.innerHTML = mensaje;
        button.addEventListener('click', _ => 
            location.reload());
        }
    

//😎😃🙂🤨😟🥺💀🤩//