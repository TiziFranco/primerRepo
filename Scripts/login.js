function Login() {
    var correo;
    var clave;
    var correoadmin;
    var claveadmin;


    correo = document.getElementById("email").value
    clave = document.getElementById("password").value
    correoadmin = "admin@admin.com"
    claveadmin = "admin"

    if (correo == correoadmin && clave == claveadmin) {
        localStorage.setItem("token", correo)
        location.assign("form.html")

    } else if (correo == "" || clave == "") {
        Swal.fire('Campos vacios', 'Reintentar', 'warning')
    } else {
        Swal.fire('Usuario invalido', 'Reintentar', 'error')
    }
}