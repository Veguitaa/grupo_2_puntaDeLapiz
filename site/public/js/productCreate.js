window.addEventListener('load', () =>{
    
    const $ = (input) => document.querySelector(input)
    const id = (algo) => document.getElementById(algo)

    /* Inputs */
    let botonEnviar = $('#enviarForm')
    let form = $('#formCreat')
    let nombre = $('#nombre')
    let marca = $('#marca')
    let categoriaId = $('#categoriaId')
    let stock = $('#stock')
    let precio = $('#precio')
    let descuento = $('#descuento')
    let descripcion = $('#descripcion')
 

    /* Smalls */

    let smallnombre = id('small.nombreProduct')
    let smallmarca = id('small.marcaProduct')
    let smallcategoriaId = id('small.categoriaProduct')
    let smallstock= id('small.stockProduct')
    let smallprecio= id('small.precioProduct')
    let smalldescuento = id('small.descuentoProduct')
    let smalldescripcion = id('small.descuentoProduct')
    
    
    

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
    let regExImg = /(.jpg|.jpeg|.png|.gif|.webp)$/;
    let regNumb =  /^[0-9]+$/


    /* Se recarga la pagina y el nombre esta en focus */
    nombre.focus()

    

    /* Nombre */
    nombre.addEventListener('keyup', (e) =>{
        
        if (e.target.value === '') {
            nombre.classList.add('noCheck')
            nombre.style.border = '2px solid red'
            smallnombre.innerHTML = "El campo nombre no puede estar vacio"
            validate.nombre = false
            
        }else if(e.target.value.length < 2){
            nombre.classList.add('noCheck')
            nombre.style.border = '2px solid red'
            smallnombre.innerHTML = "El nombre debe contener mas de 2 letras"
            validate.nombre = false
        }else if(!regExLetras.test(e.target.value)){
            nombre.classList.add('noCheck')
            nombre.style.border = '2px solid red'
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
    /* marca */
    marca.addEventListener('keyup', (e) =>{
        
        if (e.target.value === '') {
            marca.classList.add('noCheck')
            marca.style.border = '2px solid red'
            smallmarca.innerHTML = "Debe colocar la marca del producto"
            validate.marca = false
        }else if(e.target.value.length < 2){
            marca.classList.add('noCheck')
            marca.style.border = '2px solid red'
            smallmarca.innerHTML = "La marca debe contener mas de 2 letras"
            validate.marca = false
      
        } else {
            marca.classList.remove('noCheck')
            marca.style.border = '2px solid green'
            smallmarca.innerHTML = " "
            validate.marca = true
        }
        validacion(validate)
    })
    /* categoria */
    categoriaId.addEventListener('keyup', (e) =>{
        
        if (e.target.value === '') {
            categoriaId.classList.add('noCheck')
            categoriaId.style.border = '2px solid red'
            smallcategoriaId.innerHTML = "Debe elegir una categoria"
            validate.categoriaId = false
     
        } else {
            categoriaId.classList.remove('noCheck')
            categoriaId.style.border = '2px solid green'
            smallcategoriaId.innerHTML = " "
            validate.categoriaId = true
        }
        validacion(validate)
    })
    /* stock */
    stock.addEventListener('keyup', (e) =>{
        
        if (e.target.value === '') {
            stock.classList.add('noCheck')
            stock.style.border = '2px solid red'
            smallstock.innerHTML = "El campo stock no puede estar vacio"
            validate.stock = false
            
        }else if(!regNumb.test(e.target.value)){
            stock.classList.add('noCheck')
            stock.style.border = '2px solid red'
            smallstock.innerHTML = "El stock debe ser un numero"
            validate.stock = false
        } else {
            stock.classList.remove('noCheck')
            stock.style.border = '2px solid green'
            smallstock.innerHTML = " "
            validate.stock = true
        }
        validacion(validate)
    })
    /* precio */
    precio.addEventListener('keyup', (e) =>{
        
        if (e.target.value === '') {
            precio.classList.add('noCheck')
            precio.style.border = '2px solid red'
            smallprecio.innerHTML = "El campo precio no puede estar vacio"
            validate.precio = false
        }else if(!regNumb.test(e.target.value)){
            precio.classList.add('noCheck')
            precio.style.border = '2px solid red'
            smallprecio.innerHTML = "El precio debe ser un numero"
            validate.precio = false
        } else {
            precio.classList.remove('noCheck')
            precio.style.border = '2px solid green'
            smallprecio.innerHTML = " "
            validate.precio = true
        }
        validacion(validate)
    })
    /* descuento */
    descuento.addEventListener('keyup', (e) =>{
        
        if (e.target.value === '') {
            descuento.classList.add('noCheck')
            descuento.style.border = '2px solid red'
            smalldescuento.innerHTML = "En caso de no tener descuento colocar un 0"
            validate.descuento = false
        }else if(!regNumb.test(e.target.value)){
            descuento.classList.add('noCheck')
            descuento.style.border = '2px solid red'
            smalldescuento.innerHTML = "El descuento debe ser un numero"
            validate.descuento = false
        } else {
            descuento.classList.remove('noCheck')
            descuento.style.border = '2px solid green'
            smalldescuento.innerHTML = " "
            validate.descuento = true
        }
        validacion(validate)
    })

    /* Descripcion */
    descripcion.addEventListener('keyup', (e) =>{
        if (e.target.value === '') {
            descripcion.classList.add('noCheck')
            descripcion.style.border = '2px solid red'
            smalldescripcion.innerHTML = "Se necesita una descripcion del producto"
            validate.descripcion = false
        }else if(e.target.value.length < 10){
            descripcion.classList.add('noCheck')
            descripcion.style.border = '2px solid red'
            smalldescripcion.innerHTML = "la descripcion debe contener minimo 10 caracteres"
            validate.descripcion = false
      
        } else {
            descripcion.classList.remove('noCheck')
            descripcion.style.border = '2px solid green'
            smalldescripcion.innerHTML = " "
            validate.descripcion = true
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

  

    /*  Validaciones  */

    let validate = {
        nombre : false,
        marca : false,
        categoriaId : false,
        stock : false,
        precio: false,
        descuento: false,
        descripcion: false,
    
    }

})

