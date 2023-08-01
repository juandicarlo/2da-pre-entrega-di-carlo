class Productos{
    constructor(nombre, valor, marca, familia, codigo){
        this.nombre = nombre;
        this.valor = valor;
        this.marca = marca;
        this.familia = familia;
        this.codigo = codigo;
    }
    aumentarValor(monto) {
        this.valor += monto;
    }
}

const mostrarProductos = (productos) => {
    console.log("Productos registrados");
    
    productos.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1;
        }   else if (a.nombre < b.nombre) {
            return -1;
        }   else {
            return 0;
        }
    });
    for (let producto of productos){
        console.log(producto);
    }
};
let productos = [
    new Productos("Harina", "169.00", "Bonella", "Trigo", "101"),
    new Productos("Cerveza", "329.00", "Salta", "Bebidas con alcohol", "102"),
    new Productos("Gaseosa", "559.00", "Coca-cola", "Bebidas sin alcohol", "103"),
    new Productos("Papas fritas", "449.00", "Lays", "Snacks", "104"),
    new Productos("Fernet", "2799.00", "Branca", "Bebidas con alcohol", "105"),
    new Productos("Galletitas", "239.00", "Bagley", "Rumbas", "106"),
];

const agregarProducto = () => {
    let nombre = prompt("Ingrese el nombre del producto");
    let valor = prompt("Ingrese el valor del producto");
    let marca = parseInt(prompt("]Ingrese la marca del producto"));
    let familia = prompt("Ingresar el tipo de familia del producto");
    let codigo = parseInt(prompt("Ingresar el codigo del producto"));
    let producto = new Productos(nombre, valor, marca, familia, codigo);
    productos.push(producto);
    mostrarProductos(producto);
};
productos.push(productos);
mostrarProductos(productos);

const eliminarProducto = () => {
    let nombreProducto = prompt("Ingrese el nombre del del producto a eliminar");
    let indice = productos.findIndex( producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());
    if( indice === -1){
        return alert(`El producto ${nombreProducto} no existe`)
    }
    productos = productos.filter( producto => producto.nombre.toLowerCase() !== nombreProducto.toLowerCase());
    for (let producto of productos) {
        let existe = producto.nombre === nombreProducto;
        if (existe) {
            productos.splice(indice,1);
        }
        indice++;
    }
    mostrarProductos(productos);
}
const editarProducto = () => {
    let nombreProducto =prompt("Ingrese el nombre del producto a modificar.");
    let indice = productos.findIndex( producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase())
    if( indice === -1) {
        return alert(`El producto ${nombreProducto} no existe.`)
    }
    
    productos[indice].nombre = prompt("Ingrese el nombre del producto", productos[indice].nombre);
    productos[indice].valor = prompt("Ingrese el nombre del producto", productos[indice].valor);
    productos[indice].marca = prompt("Ingrese el nombre del producto", productos[indice].marca);
    productos[indice].familia = prompt("Ingrese el nombre del producto", productos[indice].familia);
    productos[indice].codigo = prompt("Ingrese el nombre del producto", productos[indice].codigo);
    mostrarProductos(productos);
}
const aumentarValorProducto = () => {
    let nombreProducto =prompt("Ingrese el nombre del producto a modificar.");
    let indice = productos.findIndex( producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase())
    if( indice === -1) {
        return alert(`El producto ${nombreProducto} no existe.`)
    }
    let monto = parseFloat(prompt("Ingrese el monto a aumentar al producto."));
    if (isNaN(monto)) {
        return alert("Debe ingresar un valor numerico.");
    }
    productos[indice].aumentarValor(monto);
    mostrarProductos(productos);
}


let encendido = true;

while (encendido){
alert("Menu principal:\n 1 - Agregar un producto\n 2 - Eliminar un producto\n 3 - Modificar un producto\n 4 - Aumentar valor de un producto\n 5 - Apagar");
    let opcion = parseInt(prompt("Ingresar una opcion"));
    switch (opcion){
        case 1:
            agregarProducto();

            break;
        case 2:
            eliminarProducto();
        
            break;
        case 3:
            modificarProducto();

            break;
        
        case 4:
            aumentarValorProducto();

            break;
        case 5:
            encendido = false;

            break;

        default:
            alert("Ingrese una opcion correcta");        

    }
}

alert("Gracias, confirmado.")