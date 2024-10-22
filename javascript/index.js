let clientes= [
    {
        nombre: "bill",
        apellido: "gates",
        edad: 68,
    }
];

console.log(clientes);

function Productos(marca, modelo, precio){
this.marca= marca;
this.modelo= modelo;
this.precio= precio;
}

let producto1= new Productos("aourus", "17g", 700000)
let producto2= new Productos("asus", "vivobook", 800000)
let producto3= new Productos("dell", "latitude", 700000)
let producto4= new Productos("hp", "i7", 500000)
let producto5= new Productos("lenovo", "pad3", 800000)
let producto6= new Productos("lg", "gram17", 800000)
let producto7= new Productos("macbook", "13", 1000000)
let producto8= new Productos("samsung","9pro", 900000)


console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
console.log(producto6);
console.log(producto7);
console.log(producto8);

let total=0;

let continuarCompa;

while(true){

producto= parseInt(prompt("cual notbook queres: 1, 2, 3, 4, 5, 6, 7, o 8"));
multiplicacion= function(precio, cantidad){
    return precio*cantidad;
};

let cantidad;
switch(producto){
case 1:
cantidad= parseInt(prompt("cuantas unidades vas a querer: "));
console.log("total producto 1: " + multiplicacion(producto1.precio, cantidad));
total += total + multiplicacion (producto1.precio, cantidad);
break;
case 2:
cantidad= parseInt(prompt("cuantas unidades vas a querer: "));
console.log("total producto 2: " + multiplicacion(producto2.precio, cantidad));
total += total + multiplicacion (producto2.precio, cantidad);
break;
case 3:
cantidad= parseInt(prompt("cuantas unidades vas a querer: "));
console.log("total producto 3: " + multiplicacion(producto3.precio, cantidad));
total += total + multiplicacion (producto3.precio, cantidad);
break;
case 4:
cantidad= parseInt(prompt("cuantas unidades vas a querer: "));
console.log("total producto 4: " + multiplicacion(producto4.precio, cantidad));
total += total + multiplicacion (producto4.precio, cantidad);
break;
case 5:
cantidad= parseInt(prompt("cuantas unidades vas a querer: "));
console.log("total producto 5: " + multiplicacion(producto5.precio, cantidad));
total += total + multiplicacion (producto5.precio, cantidad);
break;
case 6:
cantidad= parseInt(prompt("cuantas unidades vas a querer: "));
console.log("total producto 6: " + multiplicacion(producto6.precio, cantidad));
total += total + multiplicacion (producto6.precio, cantidad);
break;
case 7:
cantidad= parseInt(prompt("cuantas unidades vas a querer: "));
console.log("total producto 7: " + multiplicacion(producto7.precio, cantidad));
total += total + multiplicacion (producto7.precio, cantidad);
break;
case 8:
cantidad= parseInt(prompt("cuantas unidades vas a querer: "));
console.log("total producto 8: " + multiplicacion(producto8.precio, cantidad));
total += total + multiplicacion (producto8.precio, cantidad);
break;   

default:
    alert("no ingresaste una opción correcta, la compra sigue, recorda seguir los pasos");
}

continuarCompa= prompt("si deseas continuar comprando pone si o para seguir comprando pone no");
 
if(continuarCompa.toLowerCase()==="no"){
    break;
}
else if(continuarCompa.toLowerCase() !== "si" && seguir.toLowerCase() !== "no"){
    console.log("no ingresaste opción correcta, continua la compra")
}
 }

console.log("gracias por su compra,el valor final es:" + total);

