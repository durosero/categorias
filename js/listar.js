//console.log("hola mundo");


function listar() {
    var categorias;

    var registro = document.getElementById('registro');
    if (localStorage.getItem('categorias') == null) {
        categorias = [];
    } else {
        categorias = JSON.parse(localStorage.getItem('categorias'));
    }

    categorias.forEach((cat, index) => {
        console.log(cat);

        var nuevaFila = document.createElement('tr');

        nuevaFila.innerHTML = ``;

    });
}


listar();