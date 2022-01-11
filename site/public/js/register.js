window.addEventListener('load', () =>{
    
    const $ = (input) => document.querySelector(input)
    const id = (algo) => document.getElementById(algo)

    /* Inputs */
    let botonEnviar = $('#enviarFormulario')
    let form = $('#register')
    let nombre = $('#nombre')
    let apellido = $('#apellido')
    let email = $('#email')
    let direccion = $('#direccion')
    let usuario = $('#usuario')
    let pass = $('#password1')
    let pass2 = $('#password2')
    let img = $('#imagen')
    let terminos = $('#terminos')

    /* Smalls */

    let smallnombre = id('small.nombre')
    let smallapellido = id('small.apellido')
    let smallemail = id('small.email')
    let smalldireccion = id('small.direccion')
    let smallusuario = id('small.usuario')
    let smallpass = id('small.password1')
    let smallpass2 = id('small.password2')
    let smallimg = id('small.imagen')
    let smallterminos = id('small.terminos')
    
    

    const validacion = (objeto) => {
        let array = Object.values(validate)

        if(!array.includes(false)){
            botonEnviar.disabled = false
            botonEnviar.style.backgroundColor = '#FFABC9'
        }else{
            botonEnviar.disabled = true
            botonEnviar.style.backgroundColor = '#ebebeb'
        }
    }

    // Expresiones regulares //
    let regExLetras = /^[a-zA-ZÀ-ÿ\s]{2,}$/; // Letras y espacios, pueden llevar acentos.
    /* La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. */
    let regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/ 
    let regExEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let regExImg = /(.jpg|.jpeg|.png|.gif|.webp)$/;


    /* Se recarga la pagina y el nombre esta en focus */
    nombre.focus()

    

    /* Nombre */
    nombre.addEventListener('keyup', (e) =>{
        
        if (e.target.value === '') {
            nombre.classList.add('noCheck')
            smallnombre.innerHTML = "El campo nombre no puede estar vacio"
            validate.nombre = false
        }else if(e.target.value.length < 2){
            nombre.classList.add('noCheck')
            smallnombre.innerHTML = "El nombre debe contener mas de 2 letras"
            validate.nombre = false
        }else if(!regExLetras.test(e.target.value)){
            nombre.classList.add('noCheck')
            smallnombre.innerHTML = "El nombre debe contener solo letras"
            validate.nombre = false
        } else {
            nombre.classList.remove('noCheck')
            nombre.style.border = '2px solid green'
            smallnombre.innerHTML = " "
            validate.nombre = true
        }
        validacion(validate)
    })
    /* Apellido */
    apellido.addEventListener('keyup', (e) =>{
        
        if (e.target.value === '') {
            apellido.classList.add('noCheck')
            smallapellido.innerHTML = "El campo apellido no puede estar vacio"
            validate.apellido = false
        }else if(e.target.value.length < 2){
            apellido.classList.add('noCheck')
            smallapellido.innerHTML = "El apellido debe contener mas de 2 letras"
            validate.apellido = false
        }else if(!regExLetras.test(e.target.value)){
            apellido.classList.add('noCheck')
            smallapellido.innerHTML = "El apellido debe contener solo letras"
            validate.apellido = false
        } else {
            apellido.classList.remove('noCheck')
            apellido.style.border = '2px solid green'
            smallapellido.innerHTML = " "
            validate.apellido = true
        }
        validacion(validate)
    })
    /* Email */
    email.addEventListener('keyup', (e) =>{
        
        if (e.target.value === '') {
            email.classList.add('noCheck')
            smallemail.innerHTML = "El campo email no puede estar vacio"
            validate.email = false
        }else if(e.target.value.length < 2){
            email.classList.add('noCheck')
            smallemail.innerHTML = "El email debe contener mas de 2 letras"
            validate.email = false
        }else if(!regExEmail.test(e.target.value)){
            email.classList.add('noCheck')
            smallemail.innerHTML = 'Debes ingresar un email válido'
            validate.email = false
        } else {
            email.classList.remove('noCheck')
            email.style.border = '2px solid green'
            smallemail.innerHTML = " "
            validate.email = true
        }
        validacion(validate)
    })
    /* Direccion */
    direccion.addEventListener('keyup', (e) =>{
        
        if (e.target.value === '') {
            direccion.classList.add('noCheck')
            smalldireccion.innerHTML = "El campo direccion no puede estar vacio"
            validate.direccion = false
        }else if(e.target.value.length < 2){
            direccion.classList.add('noCheck')
            smalldireccion.innerHTML = "El direccion debe contener mas de 2 letras"
            validate.direccion = false
        } else {
            direccion.classList.remove('noCheck')
            direccion.style.border = '2px solid green'
            smalldireccion.innerHTML = " "
            validate.direccion = true
        }
        validacion(validate)
    })
    /* Usuario */
    usuario.addEventListener('keyup', (e) =>{
        
        if (e.target.value === '') {
            usuario.classList.add('noCheck')
            smallusuario.innerHTML = "El campo usuario no puede estar vacio"
            validate.usuario = false
        }else if(e.target.value.length < 3){
            usuario.classList.add('noCheck')
            smallusuario.innerHTML = "El usuario debe contener mas de 3 letras"
            validate.usuario = false
        } else {
            usuario.classList.remove('noCheck')
            usuario.style.border = '2px solid green'
            smallusuario.innerHTML = " "
            validate.usuario = true
        }
        validacion(validate)
    })
    /* Contraseña */
    pass.addEventListener('keyup', (e) =>{
        
        if (e.target.value === '') {
            pass.classList.add('noCheck')
            smallpass.innerHTML = "La contraseña no puede estar vacia"
            validate.pass = false
        }else if(e.target.value.length < 8){
            pass.classList.add('noCheck')
            smallpass.innerHTML = "La contraseña debe contener un minimo de 8 caracteres"
            validate.pass = false
        }else if(!regExPass.test(pass.value)){
            pass.classList.add('noCheck')
            smallpass.innerHTML = 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.'
            validate.pass = false
        } else {
            pass.classList.remove('noCheck')
            pass.style.border = '2px solid green'
            smallpass.innerHTML = " "
            validate.pass = true
        }
        validacion(validate)
    })

    /* Repetir Contraseña */
    pass2.addEventListener('keyup', (e) =>{
        if(e.target.value !== pass.value){
            pass2.classList.add('noCheck')
            smallpass2.innerHTML = 'Las contraseñas no coinciden'
            validate.pass2 = false
        } else {
            pass2.classList.remove('noCheck')
            pass2.style.border = '2px solid green'
            smallpass2.innerHTML = " "
            validate.pass2 = true
        }
        validacion(validate)
    })

    /* Imagen */
    img.addEventListener('change', (e) =>{

        let previewsDiv = $("#previews");
        
        if (!regExImg.exec(img.value)) {
            img.classList.add('nocheck')
            smallimg.innerHTML = 'Solo se permiten imágenes con extensión jpg, jpeg, png, gif y webp'
            validate.img = false
        } else {
            /* Borrado de imágenes anteriores */
            while (previewsDiv.firstChild) {
                previewsDiv.removeChild(previewsDiv.firstChild);
            }
            /* Previsualización de imagen */
            previewsDiv.appendChild(document.createElement("img")).src = URL.createObjectURL(img.files[0])
            img.classList.remove('nocheck')
            smallimg.innerHTML = `Tu imagen de perfil: ${img.value}`
            img.classList.remove('noCheck')
            img.style.border = '2px solid green'
            smallimg.innerHTML = " "
            validate.img = true
        }
        validacion(validate)
    })

    /* Terminos */
    terminos.addEventListener('change', (e) =>{
        if (!e.target.checked) {
            terminos.classList.add('noCheck')
            smallterminos.innerHTML = 'Debes aceptar nuestros términos y condiciones'
            validate.terminos = false
        } else {
            terminos.classList.remove('noCheck')
            terminos.style.border = '2px solid green'
            smallterminos.innerHTML = " "
            validate.terminos = true
        }
        validacion(validate)
    })


    /*  Validaciones  */

    let validate = {
        nombre : false,
        apellido : false,
        email : false,
        direccion : false,
        usuario: false,
        pass: false,
        pass2: false,
        img: true,
        terminos: false
    }

})