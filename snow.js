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
            respUbic.innerHTML = 'Puedes encontrarnos en: Benito Juárez, Venustiano Carranza, Coyoacán, Iztapalapa, Miguel Hidalgo y Azcapotzalco.'
            cdmx.classList.remove('none')
        }else if (ubicacionMin === 'guadalajara'){
            respUbic.innerHTML = 'Puedes encontrarnos en: Guadalajara Ciudad, Tlajomulco, Zapopan y Tlaquepaque.'
            gdl.classList.remove('none')
        }else if (ubicacionMin === 'queretaro'){
            respUbic.innerHTML = 'Puedes encontrarnos en: Santiago de Querétaro, El Marqués, Jurica y Juriquilla.'
            qro.classList.remove('none')
        }else if (ubicacionMin === 'monterrey'){
            respUbic.innerHTML = 'Puedes encontrarnos en: Monterrey Ciudad, San Pedro, San Nicolás, Escobedo, Santa Catarina y Apodaca'
            mty.classList.remove('none')
        }else if (ubicacionMin === 'chihuahua'){
            respUbic.innerHTML = 'Puedes encontrarnos en: Chihuahua Ciudad, Ciudad Juárez, Creel y Delicias'
            chi.classList.remove('none')
        }else if (ubicacionMin === 'Veracruz'){
            respUbic.innerHTML = 'Puedes encontrarnos en: Veracruz Puerto, Xalapa, Córdoba, Orizaba y Coatzacoalcos'
            ver.classList.remove('none')
        }else if (ubicacionMin === 'cancun'){
            respUbic.innerHTML = 'Puedes encontrarnos en: Zona Hotelera de Cancún y Cancún Ciudad'
            can.classList.remove('none')
        }else if (ubicacionMin === 'villahermosa'){
            respUbic.innerHTML = 'Puedes encontrarnos en: Villahermosa Ciudad y Cárdenas'
            vill.classList.remove('none')
        }else{
            respUbic.innerHTML = 'Verifica los datos ingresados'
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