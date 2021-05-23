function digito(num) {
    document.getElementById("resultado").value += num
}


function resolver() {
    var x = document.getElementById("resultado").value
    var y = eval(x)

    document.getElementById("resultado").value = y
}

function limpiar() {
    document.getElementById("resultado").value = ''

    console.log('entre')
}