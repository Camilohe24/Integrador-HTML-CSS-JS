//1er paso - capturar nombre y apellido

const nombre = prompt("Ingresa tu nombre");
const apellido = prompt("Ingresa tu apellido");

/* console.log(nombre)
console.log(apellido) */

//2do paso - capurar primera inicial de nombre y primera inicial de apellido en mayúscula.

const inicialNombre = nombre.charAt(0).toUpperCase();
const inicialApellido = apellido.charAt(0).toUpperCase();

/* console.log(inicialNombre)
console.log(inicialApellido) */

//3er paso - crear etiqueta H2 con Js

const bienvenida = document.createElement("h2");
bienvenida.textContent = `Bienvendio: ${inicialNombre} ${inicialApellido}`;

/* console.log(bienvenida) */

//4to paso - inyectar texto al H2.

const saludo = document.querySelector("#bienvenido");
saludo.appendChild(bienvenida)

//5to paso - crear lista

let listaProducto = [];

//9no paso - Refrescar Aviso

document.querySelector("#aviso").innerHTML=""

//10mo paso - convertir texto a numeros con parseInt.

function guardar(){
    const code = document.querySelector("#codigo").value;
    const product = document.querySelector("#producto").value;
    const price = parseInt(document.querySelector("#precio").value);
    
    /*  console.log(code)
    console.log(product)
    console.log(price) */
    
    //11avo paso - crear nueva columna para el precio más IVA y adicional el precio total con IVA.

    const producto = {
        codigo:code,
        producto:product,
        precio:price,
        iva:price*0.19,
        total:price+(price*0.19),
    }

    /* console.log(producto) */

    listaProducto = [... listaProducto,producto];

    /* console.log(listaProducto) */

    //6to paso - Ingreso de producto

    const productoAviso = document.createElement("h3");
    productoAviso.textContent = `Acabas de ingresar el producto: ${producto.producto}`;

    const aviso = document.querySelector("#aviso");
    aviso.appendChild(productoAviso);

    /* console.table(listaProducto) */

    //7mo paso - Borrador del formulario

    document.querySelector("#codigo").value="";
    document.querySelector("#producto").value="";
    document.querySelector("#precio").value="";
}




