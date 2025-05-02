/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Un comentario en una linea hahaha

// 2. Escribe un comentario en varias líneas

/*
un 
comentario
en 
varias 
lienas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
console.log("*********** 3 ***********");

let name = "Teddy Summers"
let age = 26
let height = 1.81
let devJr = true
let devSr = false
let undefinedValue
let nullValue = null
let thisSymbol = Symbol("thisSymbol")
let bigInt = BigInt(383939496054039949459505040439203283238420394820394820934820394)
let bigInt2 = 383939496054039949459505040439203283238420394820394820934820394n


// 4. Imprime por consola el valor de todas las variables
console.log("*********** 4 ***********");
console.log(name);
console.log(age);
console.log(height);
console.log(devJr);
console.log(devSr);
console.log(undefinedValue);
console.log(nullValue);
console.log(thisSymbol);
console.log(bigInt);
console.log(bigInt2);



// 5. Imprime por consola el tipo de todas las variables
console.log("*********** 5 ***********");
console.log(typeof name);
console.log(typeof age);
console.log(typeof height);
console.log(typeof devJr);
console.log(typeof devSr);
console.log(typeof undefinedValue);
console.log(typeof nullValue);
console.log(typeof thisSymbol);
console.log(typeof bigInt);
console.log(typeof bigInt2);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
console.log("*********** 6 ***********");
name = "Teddy Paul Summers"
age = 27
height = 1.82
devJr = false
devSr = true
undefined
nullValue = null
thisSymbol = Symbol("thisSymbol")
bigInt = BigInt(383939496054039949459505040439203283238420394820394820934820394)
bigInt2 = 383939496054039949459505040439203283238420394820394820934820394n


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
console.log("*********** 7 ***********");
name = 25
age = "182.2"
height = 18
devJr = teddy
devSr = Symbol("thisSymbol")
undefined
nullValue = 25
thisSymbol = null
bigInt = false
bigInt2 = "paul"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
console.log("*********** 8 ***********");
const constname = "Teddy Paul Summers"
const constage = 26
const constheight = 1.81
const constdevJr = true
const constdevSr = false
const constundefined = undefinedValue
const constnullValue = null
const constthisSymbol = Symbol("thisSymbol")
const constbigInt = BigInt(383939496054039949459505040439203283238420394820394820934820394)
const constbigInt2 = 383939496054039949459505040439203283238420394820394820934820394n


// 9. A continuación, modifica los valores de las constantes
console.log("*********** 9 ***********");
constname = "Teddy Paul Summers 2"
constage = 27
constheight = 1.82
constdevJr = true
constdevSr = false
constundefined = undefinedValue
constnullValue = null
constthisSymbol = Symbol("thisSymbol2")
constbigInt = BigInt(22383939496054039949459505040439203283238420394820394820934820394)
constbigInt2 = 22383939496054039949459505040439203283238420394820394820934820394n

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
console.log("*********** 10 ***********");
// ehh??
