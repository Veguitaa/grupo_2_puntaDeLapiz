window.addEventListener('load', () => {

    console.log("Estoy vinculado");

    let forms = document.querySelectorAll('#formulario');
    for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', event => {
                event.preventDefault();
                Swal.fire({
                customClass: {
                    confirmButton: 'swalBtnColor',
                    cancelButton: 'swalBtnColor'
                },

                title: '¿Estas seguro que quieres editar el producto?',
                text: "podras volver a editarlo!",
                icon: 'warning',
                background: "#ebebeb",
                showCancelButton: true,
                confirmButtonColor: '#7ff77f',
                cancelButtonColor: '#cc4141',
                confirmButtonText: 'Editar',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },

                }).then((result) => {

                    if (result.isConfirmed) {
                        forms[i].submit();
                    }

                })
        })
    }
})