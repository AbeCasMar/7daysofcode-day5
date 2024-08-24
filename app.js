var agregar = prompt("Escribe si para agregar un articulo o no para terminar");
var frutas =[];
var verduras =[];
var congelados =[];
var dulces = [];
var articulo = ""
var categoria = ""



while( agregar == "si"){

    articulo = prompt("Escribe el articulo");
    categoria = prompt("Escribe la categoria: frutas, verduras, congelados, dulces.");

    switch(categoria){

        case "frutas":
            frutas.push(articulo);
            console.log(frutas);
            break

        case "verduras":
            verduras.push(articulo);
            console.log(verduras);
            break

        case "congelados":
            congelados.push(articulo);
            console.log(congelados);
            break

        case "dulces":
            dulces.push(articulo);
            console.log(dulces);
            break
    
    }

    agregar = prompt("Para agregar otro articulo escribe si o escribe no para terminar");
}



alert(`Lista de compras:
    
    Frutas: ${frutas}

    Verduras: ${verduras}

    Congelados: ${congelados}

    Dulces: ${dulces}

    `);





