//console.log("hola mundo");
var formNuevo = document.getElementById('formNuevo');

formNuevo.addEventListener('submit', function(event) {
    event.preventDefault();
    //console.log(event);

    var formData = new FormData(formNuevo);
    var categoria = Object.fromEntries(formData);
    var categorias = [];
    var existe = false;
    var codigo = document.getElementById('codigo');
    var descripcion = document.getElementById('descripcion');

    if (localStorage.getItem('categorias') == null) {
        categorias.push(categoria);
    } else {
        var auxCat = JSON.parse(localStorage.getItem('categorias'));
        // console.log(auxCat);

        auxCat.forEach((cat, index) => {
            console.log(cat);
            if (categoria.descripcion == cat.descripcion) {
                existe = true;
            }

        });

        categorias = JSON.parse(localStorage.getItem('categorias'));
        if (existe) {
            alert("Esta categoria ya existe");
        } else {
            categorias.push(categoria);
            alert("categoria guardada");
            codigo.value = "";
            descripcion.value = "";

        }


    }

    var stringCategoria = JSON.stringify(categorias);
    localStorage.setItem('categorias', stringCategoria);




});