let botonAtaque
let ataqueEnemigo
let resultado 
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego () {
    let seccionSeleccionarReiniciar = document.getElementById('seccion-reiniciar')
    seccionSeleccionarReiniciar.style.display = 'none'

    let seccionSeleccionarAtaque = document.getElementById('elegir-ataque')
    seccionSeleccionarAtaque.style.display = 'none'

    let botonMascota = document.getElementById('boton-mascota')
    botonMascota.addEventListener('click', seleccionarMascota )

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascota () {
    let seccionSeleccionarAtaque = document.getElementById('elegir-ataque')
    seccionSeleccionarAtaque.style.display = 'block'

    let seccionSeleccionarMascota = document.getElementById('elegir-mascota')
    seccionSeleccionarMascota.style.display = 'none'

    let seccionBotonMascota = document.getElementById('boton-seleccionar')
    seccionBotonMascota.style.display = 'none'

    let seccionTituloSeleccion = document.getElementById('titulo-seleccion')
    seccionTituloSeleccion.style.display = 'none'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatugueya = document.getElementById('ratigueya')

    let mascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked){
        alert('Seleccionaste a Hipodoge ')
        mascotaJugador.innerHTML = 'Hipodoge'
        seleccionarMascotaEnemigo ()
    } 
    else if (inputCapipepo.checked) {
        alert('Selecionaste a Capipepo')
        mascotaJugador.innerHTML = 'Capipepo'
        seleccionarMascotaEnemigo ()
    }
    else if (inputRatugueya.checked) {
        alert ('Seleccionaste a Ratigueya')
        mascotaJugador.innerHTML = 'Ratigueya'
        seleccionarMascotaEnemigo ()
    }
    else {
        alert('Debes seleccionar una mascota!')
    }
    
}

function ataqueFuego () {
    botonAtaque = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua () {
    botonAtaque = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra () {
    botonAtaque = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo () {
    let numeroRandom = aleatorio(1,3)

    if (numeroRandom == 1){
        ataqueEnemigo = 'FUEGO'
    }
    else if (numeroRandom == 2) {
        ataqueEnemigo = 'AGUA'
    }
    else if (numeroRandom == 3) {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
    crearMensaje()
}

function combate () {
    if (ataqueEnemigo == botonAtaque) {
        resultado = "EMPATE!"
    } else if (botonAtaque == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        resultado = "GANASTE!"
        vidasEnemigo = vidasEnemigo -1
        
    } else if (botonAtaque == 'AGUA ' && ataqueEnemigo == 'FUEGO') {
        resultado = "GANASTE!"
        vidasEnemigo = vidasEnemigo -1
        
    } else if (botonAtaque == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        resultado = "GANASTE!"
        vidasEnemigo = vidasEnemigo -1
        
    } else {
        resultado = "PERDISTE!"
        vidasJugador = vidasJugador -1
       
    }
    revisarVidas()
}
function revisarVidas () {
    if (vidasJugador == 0){
        mensajeResultadoFinal('Perdiste!')
    }
    else if (vidasEnemigo == 0){
        mensajeResultadoFinal('Ganaste!')
    }
}

function crearMensaje () {
    /*let seccionMensajes =  document.getElementById('mensajes')*/
    let sectionMS = document.getElementById('resultado')
    let ataqueJugador = document.getElementById('ataqueJugador')
    let ataqueEnemigoMS = document.getElementById('ataqueEnemigo')

    /*let notifResultado = document.createElement('p')*/
    let notifJugador = document.createElement('p')
    let notifEnemigo = document.createElement('p')

    sectionMS.innerHTML = resultado
    notifEnemigo.innerHTML = ataqueEnemigo
    notifJugador.innerHTML = botonAtaque

    /*sectionMS.appendChild(notifResultado)*/
    ataqueJugador.appendChild(notifJugador)
    ataqueEnemigoMS.appendChild(notifEnemigo)

    /*let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + botonAtaque + ', la mascota enemiga atacó con ' + ataqueEnemigo +' ' +resultado
    
    seccionMensajes.appendChild(parrafo)*/

    let numeroVidasJugador = document.getElementById('vidas-jugador')
    numeroVidasJugador.innerHTML = vidasJugador

    let numeroVidasEnemigo =  document.getElementById('vidas-enemigo')
    numeroVidasEnemigo.innerHTML = vidasEnemigo
}

function mensajeResultadoFinal (resultadoFinal) {
    let seccionMensajes = document.getElementById('resultado')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    seccionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let seccionSeleccionarReiniciar = document.getElementById('seccion-reiniciar')
    seccionSeleccionarReiniciar.style.display = 'block'
}

function reiniciarJuego () {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionarMascotaEnemigo() {
    let mascotaEnemigo = document.getElementById('mascota-enemigo')
    let numeroRandom = aleatorio(1,3)

    if (numeroRandom == 1) {
        mascotaEnemigo.innerHTML = 'Hipodoge'
    }else if (numeroRandom == 2) {
        mascotaEnemigo.innerHTML = 'Hipopepo'
    }else {
        mascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

window.addEventListener('load', iniciarJuego)   


