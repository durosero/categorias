//console.log("hola mundo");



document.querySelector('table').addEventListener('click', (event) => {

    var etiqueta = event.target;

    if (etiqueta.nodeName == 'A') {



        var valor = etiqueta.getAttribute('data');
        console.log(valor);
        var categorias = JSON.parse(localStorage.getItem('categorias'));

        var categoriasAux = [];


        categorias.forEach((cat, index) => {
            if (cat.descripcion != valor) {
                categoriasAux.push(cat);
            }
        });

        localStorage.setItem('categorias', JSON.stringify(categoriasAux));

    }

    listar();

});

function listar() {
    var categorias;

    var registro = document.getElementById('registro');
    if (localStorage.getItem('categorias') == null) {
        categorias = [];
    } else {
        categorias = JSON.parse(localStorage.getItem('categorias'));
    }

    registro.innerHTML = "";

    categorias.forEach((cat, index) => {
        console.log(cat);

        var nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `
            <td> ${index + 1} </td>
            <td> ${cat.codigo} </td>
            <td> ${cat.descripcion} </td>
            <td> <a href='javascript:void(0);' data='${cat.descripcion}' >Elinimar</a> </td>
        `;
        registro.appendChild(nuevaFila);

    });
}


listar();