/*
1.3)
let numero1 = parseInt(prompt("escribe un numero entero"))
let numero2 = parseInt(prompt("escribe un numero entero"))
let numero3 = parseInt(prompt("escribe un numero entero"))
var promedio = parseInt(numero1 + numero2 + numero3) / 3
console.log("el promedio es: " + promedio)
*/

/* // 1.4)
let comensales = parseInt(prompt("numero de comensales"))
let patatas = 200*comensales;//multiplicar por el numero de comensales
let papas = patatas/1000;//dividir el resultado de patatas por un kilo,es decir, 1000g
let huevos = 5*papas;//multiplicar la variable papas x 5 para conocer la cantidad de huevos
let cebolla = 300*papas;//multiplicar la variable papas x 300 para conocer la cantidad de cebolla
console.log("Patatas " + papas+" kilos");
console.log("Huevos " + huevos);
console.log("Cebolla "+cebolla +" gramos"); */


// ==============================================================================
/* //2.1
let numero = parseInt(prompt("escriba un número"));
operacion = numero % 2//asignamos la operación para que bote el residuo
if (operacion === 0){//si el residuo es estrictamente cero nos muestre la alerta
    alert("el numero es par")
}else{//si el residuo es otro numero muestre la alerta
    alert("el numero es impar")
} */

/*
2.2)
var articulo = prompt("que quieres tomar? Vino o Cerveza" )
if ( articulo === "vino" || articulo === "cerveza"){
    alert("vaya a la barra");
}else{
    alert("vaya a la tienda");
}
*/

/* //2.3
let nota = parseInt(prompt("escriba la nota de 1 a 10"))
if (nota < 11){//numeros del 1-10
    if (nota >= 5){ // (2do if anidado) si la nota cumple la condición ejecuta la sentencia
        if (nota < 7){ // (3er if anidado) si la nota cumple la condición ejecuta la sentencia
            alert("aprobo")
        }
        else{// (3er if anidado) si NO cumple la condición
            if (nota < 9){ // (4to if anidado) si la nota cumple la condición ejecuta la sentencia
                alert("notable")
            }
            else{ // (4to if anidado) si NO cumple la condición
                alert("sobresaliente")
            }
        }
    }
    else{ // (2do if anidado) si NO cumple la condición
        alert("suspendio")
    }
}
else{
    alert("nota no valida")
} */


//========================================================================
/*
3.1
let letra, veces, cont, msg='';
letra = prompt("Escriba una letra");
veces = parseInt(prompt("Escribe un entero"));
for( cont = 0; cont < veces; cont++) {
    msg += letra;
}
alert(msg);
*/

/* //3.2
let izq, der;
for (izq = 0; izq < 2; izq++){// izq vale cero, entonces si izq es menor a dos aumnete uno
    for (der = 0; der < 5; der++){//der vale cero, el bucle termina hasta que llegue a 4 y dainicion al bucle izq
        console.log(izq+':'+der)
    }
} */

/* //3.3
let alto, ancho,  linea, caracter;
alto = parseInt(prompt("escriba un numero entero"));
for (linea= 0; linea < alto; linea++){//linea vale cero y tiene que cumplir el condicional para que pueda aumentar
    caracter ="";
    for (ancho= 0; ancho <= linea; ancho++){// ancho debe cumplir la condicional para que pueda aumentar
        caracter += "*"// inicia con esta sentencia
    }
    console.log(caracter)
} */

//====================================================================
//4.1

/* let lista = [];//nuevo array
let numero = 0;//variable
while (numero <= 20){//se ejecute cuando cumpla el condicional
    lista[numero] = 2*lista[numero];//metemos la valiable en el array
    numero += 2;// la variable numero aumente en 2
}
console.log(lista); */

//4.2


//4.3

//====================================================================
/*
5.1) Crea una función que tenga dos argumentos: num1, num2, y que devuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos.*/

/* function suma(num1,num2){
    let numero = num1 + num2;
    return numero;
}
let num1 = parseInt(prompt("escribe un numero"))
let num2 = parseInt(prompt("escribe otro numero"))
alert (suma(num1,num2)) */

//5.2

/* function total(precio,porcentaje){
    let oper = precio * porcentaje;//operación
    let pagar = (oper + precio);//operación
    if (pagar > 100){//condicional si pasa de los 100€
        desc = pagar * 0.1;//operación
        resl = pagar - desc;//operación
        return ("el precio con descuento es: "+resl.toFixed(2)+" €")//retorno de la operación con maximo 2 decimales
    }else{
        return ("No hay descuento. \nEl precio es: "+pagar.toFixed(2)+" €")
    }
}
let precio = parseInt(prompt("ingrese el precio del producto"))
const porcentaje = 0.19
alert (total(precio,porcentaje)) */

//5.3
/* function siglo(año){
    var siglo = parseInt((año-1)/100)+1//
    return siglo
}
let año = 201
console.log("siglo "+siglo(año)) */

/*
6.1) En este script deberás crear un array para guardar los nombres de los días de la semana, empezando por 0 para el domingo. Para comprobar el funcionamiento
pide al usuario un número entre 0 y 6 y devuelve el nombre del día. Se supone que el dato tecleado estará entre 0 y 6*/

/*
let semana = [
    "lunes","martes","miercoles","jueves","viernes","sabado","domingo"
]
let dia = parseInt(prompt("un numero del 0 al 6"))
alert(semana[dia])
*/
//6.2
/* function letter(letra,lista){
    pos = 0;
    while (lista[pos] != letra && pos < lista.length){// cuando el array no sea igual a la letra y a la posicion, la posicion aumenta 1
        pos++
    }return (pos < lista.length)
}
console.log(letter("a", ["a","s","d"]));
console.log(letter("z", ["a","s","d"])); */

//7.1
/* let alumno = { //este objeto almacena varias propiedades 
    nombre : "ivan",
    ingles : 4,
    programacion : 7,
    html : 8
};
let promedio = (alumno.ingles + alumno.programacion + alumno.html) /3; //operacion llamando al objeto
console.log('el promedio del estudiante ' + alumno.nombre + ' es: ' + promedio.toFixed(2)) */

//8.1
/* function cambiar(){
    let color = document.getElementById("nivelacion");
    color.style.color = 'red';
    color.style.textAlign = 'center';
} */

//8.2
function cambiar(){
    let cambio = document.getElementById('nivelacion');// llamamos al elemento por su id
    cambio.innerText = "Hola mundo con java script";// establecer el contenido de texto en el elemento
}
