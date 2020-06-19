// PARA ACTIVAR EL ENCUENTRANOS EN TU CIUDAD

let ubic = document.getElementById('ubic')
let botonUbic = document.getElementById('botonUbic')
let respUbic = document.getElementById('respUbic')

// Mapas de las ubicaciones
let mapaCdmx = document.getElementById('cdmx')
let mapaGdl = document.getElementById('gdl')
let mapaQro = document.getElementById('qro')
let mapaMty = document.getElementById('mty')
let mapaChi = document.getElementById('chi')
let mapaVer = document.getElementById('ver')
let mapaCan = document.getElementById('can')
let mapaVill = document.getElementById('vill')

let cardUbicacion = document.getElementById('cardUbicacion')

const encuentraUbic = () => {

    let preguntaUbicacion = ubic.value
    let ubicacionMin = preguntaUbicacion.toLowerCase()

    if (ubicacionMin === 'cdmx' || ubicacionMin === 'ciudad de mexico'){
        respUbic.innerHTML = 'Benito Juárez, Venustiano Carranza, Coyoacán, Iztapalapa, Miguel Hidalgo y Azcapotzalco.'
        // cdmx.classList.remove('none')
        document.getElementById('cdmx').style.display='block'
        document.getElementById('gdl').style.display='none'
        document.getElementById('qro').style.display='none'
        document.getElementById('mty').style.display='none'
        document.getElementById('chi').style.display='none'
        document.getElementById('ver').style.display='none'
        document.getElementById('can').style.display='none'
        document.getElementById('vill').style.display='none'
    }else if (ubicacionMin === 'guadalajara'){
        respUbic.innerHTML = 'Guadalajara Ciudad, Tlajomulco, Zapopan y Tlaquepaque.'
        // gdl.classList.remove('none')
        document.getElementById('gdl').style.display='block'
        document.getElementById('cdmx').style.display='none'
        document.getElementById('qro').style.display='none'
        document.getElementById('mty').style.display='none'
        document.getElementById('chi').style.display='none'
        document.getElementById('ver').style.display='none'
        document.getElementById('can').style.display='none'
        document.getElementById('vill').style.display='none'
    }else if (ubicacionMin === 'queretaro'){
        respUbic.innerHTML = 'Santiago de Querétaro, El Marqués, Jurica y Juriquilla.'
        // qro.classList.remove('none')
        document.getElementById('qro').style.display='block'
        document.getElementById('gdl').style.display='none'
        document.getElementById('cdmx').style.display='none'
        document.getElementById('mty').style.display='none'
        document.getElementById('chi').style.display='none'
        document.getElementById('ver').style.display='none'
        document.getElementById('can').style.display='none'
        document.getElementById('vill').style.display='none'
    }else if (ubicacionMin === 'monterrey'){
        respUbic.innerHTML = 'Monterrey Ciudad, San Pedro, San Nicolás, Escobedo, Santa Catarina y Apodaca'
        // mty.classList.remove('none')
        document.getElementById('mty').style.display='block'
        document.getElementById('gdl').style.display='none'
        document.getElementById('qro').style.display='none'
        document.getElementById('cdmx').style.display='none'
        document.getElementById('chi').style.display='none'
        document.getElementById('ver').style.display='none'
        document.getElementById('can').style.display='none'
        document.getElementById('vill').style.display='none'
    }else if (ubicacionMin === 'chihuahua'){
        respUbic.innerHTML = 'Chihuahua Ciudad, Ciudad Juárez, Creel y Delicias'
        // chi.classList.remove('none')
        document.getElementById('chi').style.display='block'
        document.getElementById('gdl').style.display='none'
        document.getElementById('qro').style.display='none'
        document.getElementById('mty').style.display='none'
        document.getElementById('cdmx').style.display='none'
        document.getElementById('ver').style.display='none'
        document.getElementById('can').style.display='none'
        document.getElementById('vill').style.display='none'
    }else if (ubicacionMin === 'veracruz'){
        respUbic.innerHTML = 'Veracruz Puerto, Xalapa, Córdoba, Orizaba y Coatzacoalcos'
        // ver.classList.remove('none')
        document.getElementById('ver').style.display='block'
        document.getElementById('gdl').style.display='none'
        document.getElementById('qro').style.display='none'
        document.getElementById('mty').style.display='none'
        document.getElementById('chi').style.display='none'
        document.getElementById('cdmx').style.display='none'
        document.getElementById('can').style.display='none'
        document.getElementById('vill').style.display='none'
    }else if (ubicacionMin === 'cancun'){
        respUbic.innerHTML = 'Zona Hotelera de Cancún y Zona Urbana de Cancún'
        // can.classList.remove('none')
        document.getElementById('can').style.display='block'
        document.getElementById('gdl').style.display='none'
        document.getElementById('qro').style.display='none'
        document.getElementById('mty').style.display='none'
        document.getElementById('chi').style.display='none'
        document.getElementById('ver').style.display='none'
        document.getElementById('cdmx').style.display='none'
        document.getElementById('vill').style.display='none'
    }else if (ubicacionMin === 'villahermosa'){
        respUbic.innerHTML = 'Villahermosa Ciudad y Cárdenas'
        // vill.classList.remove('none')
        document.getElementById('vill').style.display='block'
        document.getElementById('gdl').style.display='none'
        document.getElementById('qro').style.display='none'
        document.getElementById('mty').style.display='none'
        document.getElementById('chi').style.display='none'
        document.getElementById('ver').style.display='none'
        document.getElementById('can').style.display='none'
        document.getElementById('cdmx').style.display='none'
    }else{
        respUbic.innerHTML = 'Verifica los datos ingresados'
        document.getElementById('vill').style.display='none'
        document.getElementById('gdl').style.display='none'
        document.getElementById('qro').style.display='none'
        document.getElementById('mty').style.display='none'
        document.getElementById('chi').style.display='none'
        document.getElementById('ver').style.display='none'
        document.getElementById('can').style.display='none'
        document.getElementById('cdmx').style.display='none'
    }

    cardUbicacion.classList.remove('none')

}

botonUbic.addEventListener('click', encuentraUbic)

// PARA ACTIVAR EL PONTE EN CONTACTO CON NOSOTROS

let nomRepara = document.getElementById('nomRepara')
let telRepara = document.getElementById('telRepara')
let correoRepara = document.getElementById('correoRepara')
let equipoRepara = document.getElementById('equipoRepara')
let descripcionRepara = document.getElementById('descripcionRepara')

let botonRepara = document.getElementById('botonRepara')

let repara = document.getElementById('repara')

let cardRepara = document.getElementById('cardRepara')

// Respuestas en el html
let respuestaNombreRepara = document.getElementById('respuestaNombreRepara')
let respuestaTelefonoRepara = document.getElementById('respuestaTelefonoRepara')
let respuestaCorreoRepara = document.getElementById('respuestaCorreoRepara')
let respuestaEquipoRepara = document.getElementById('respuestaEquipoRepara')
let respuestaDescripcionRepara = document.getElementById('respuestaDescripcionRepara')

const reparaEquipo = () => {

    respuestaNombreRepara.innerHTML = nomRepara.value
    respuestaTelefonoRepara.innerHTML = telRepara.value
    respuestaCorreoRepara.innerHTML = correoRepara.value
    respuestaEquipoRepara.innerHTML = equipoRepara.value
    respuestaDescripcionRepara.innerHTML = descripcionRepara.value

    repara.classList.remove('none')
}

botonRepara.addEventListener('click', reparaEquipo)