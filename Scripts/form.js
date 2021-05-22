function Formulario() {

    token = localStorage.getItem('token')
    nombre = document.getElementById("nombre").value
    apellido = document.getElementById("apellido").value
    dni = document.getElementById("dni").value
    sexo = document.getElementById("sexo").value
    nombrecompleto = nombre + " " + apellido

    if (token) {
        if (nombre == "" || apellido == "" || dni == "" || sexo == "Elija una opcion" || edad == "") {
            Swal.fire('Campos vacios', 'Complete los datos', 'warning')
        } else {
            Swal.fire('Registrado', '¡Bienvenido ' + nombrecompleto + "!", 'success')

        }

    } else {
        Swal.fire('No estas logueado', 'Por favor ve a la seccion de Login', 'error')
    }
}

function logout() {
    localStorage.removeItem('token')
}