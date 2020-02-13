//Seleccionamos los elementos impares
var li_impares = $("li.even");
//les cambiamos el tipo
li_impares.attr("type", "square");
//Seleccionamos el séptimo elemento
var li_septimo = $("li").eq(6);
//Le damos una altura de 10px
li_septimo.height("10");
//Seleccionamos todos los elementos pares
var li_pares = $("li.odd span");

for (i = 0; i < li_pares.length; i++) {
    //Ahora recorremos toda la lista de elementos para modificar cada uno de sus textos
    var element = $(li_pares[i]);
    element.text(element.text().toUpperCase());
}

//Seleccionamos Murcia
var murcia = $("#murcia");
//Seleccionamos Madrid
var madrid = $("#madrid");
//Movemos Murcia después de Madrid
murcia.insertAfter(madrid);

