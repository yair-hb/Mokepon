function iniciarJuego () {
    let botonMascota = document.getElementById('boton-mascota')
    botonMascota.addEventListener('click', seleccionarMascota )
}

function seleccionarMascota () {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatugueya = document.getElementById('ratigueya')

    let mascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked){
        alert('Seleccionaste a Hipodoge ')
        mascotaJugador.innerHTML = 'Hipodoge'
    } 
    else if (inputCapipepo.checked) {
        alert('Selecionaste a Capipepo')
        mascotaJugador.innerHTML = 'Capipepo'
    }
    else if (inputRatugueya.checked) {
        alert ('Seleccionaste a Ratigueya')
        mascotaJugador.innerHTML = 'Ratigueya'
    }
    else {
        alert('Debes seleccionar una mascota!')
    }
}

window.addEventListener('load', iniciarJuego)   
