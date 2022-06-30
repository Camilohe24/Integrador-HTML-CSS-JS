//1er paso

const nombre = prompt("Ingresa tu nombre");
const apellido = prompt("Ingresa tu apellido");

/* console.log(nombre)
console.log(apellido) */

//2do paso

const inicialNombre = nombre.charAt(0);
const inicialApellido = apellido.charAt(0);

/* console.log(inicialNombre)
console.log(inicialApellido) */

//3er paso

const bienvenida = document.createElement("h2");
bienvenida.textContent = `Bienvendio: ${inicialNombre} ${inicialApellido}`;

/* console.log(bienvenida) */

//4to paso

const saludo = document.querySelector("#bienvenido");
saludo.appendChild(bienvenida)

//5to paso

let listaProducto = [];
function guardar(){
    const code = document.querySelector("#codigo").value;
    const product = document.querySelector("#producto").value;
    const price = document.querySelector("#precio").value;
    
    /*  console.log(code)
    console.log(product)
    console.log(price) */
    
    const producto = {
        codigo:code,
        producto:product,
        precio:price,
    }

    /* console.log(producto) */

    listaProducto = [... listaProducto,producto];

    /* console.log(listaProducto) */

    const productoAviso = document.createElement("h3");
    productoAviso.textContent = `Acabas de ingresar el producto: ${producto.producto}`;

    const aviso = document.querySelector("#aviso");
    aviso.appendChild(productoAviso)

    console.table(listaProducto)
}

//6to paso


