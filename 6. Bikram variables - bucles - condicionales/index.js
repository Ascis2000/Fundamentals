
// 1.- Crear variable tipo let de nombre variableSinValor declarada sin valor
let variableSinValor;

// 2.- Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
console.log("Ejercicio 2");
let booleano1 = true;
let booleano2 = false;
console.log("booleano1 =", booleano1 + " y booleano2 =", booleano2); // --> true y false
console.log("----------");

// 3.- Crear variable tipo const de nombre PI declarada con valor 3.14
console.log("Ejercicio 3");
const PI = 3.14;
console.log("PI =", PI); // --> 3.14
console.log("----------");

// 4.- Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
console.log("Ejercicio 4");
const TAU = (2 * PI);
console.log("TAU =", TAU); // --> 6.28
console.log("----------");

// 5.- Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2
let booleanoAnd = booleano1 && booleano2;
console.log("Ejercicio 5");
console.log("booleanoAnd =", booleanoAnd); // --> false
console.log("----------");

// 6.- Crear variable booleanoNot cuyo valor sea la compracación booleana no booleano1
let booleanoNot = !booleano1;
console.log("Ejercicio 6");
console.log("booleanoNot =", booleanoNot); // --> false
console.log("----------");

// 7.- Crear variable booleanoMix0 cuyo valor sea la compración booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));
console.log("Ejercicio 7");
console.log("booleanoMix0 =", booleanoMix0); // --> true
console.log("----------");

// 8.- Crear variable incrementarDesp con valor 2 y asigna su valor con postincremento a resultadoDesp
console.log("Ejercicio 8");
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;
console.log("resultadoDesp =", resultadoDesp); // --> 2
console.log("incrementarDesp =", incrementarDesp); // --> 3
console.log("----------");

// 9.- Crear variable incrementarAntes con valor 2 y asigna su valor con preincremento a resultadoAntes
console.log("Ejercicio 9");
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;
console.log("resultadoAntes =", resultadoAntes); // --> 3
console.log("incrementarAntes =", incrementarAntes); // --> 3
console.log("----------");

// 10.- Crear variable contarHasta10_2 con valor 0 e incrementar su valor con un bucle for hasta que se verifique que contarHasta10_2 === 10
console.log("Ejercicio 10");
let contarHasta10_2;

for (contarHasta10_2=0; contarHasta10_2 < 10; contarHasta10_2++) {
  console.log(contarHasta10_2);
}
console.log('Valor final contarHasta10_2 =', contarHasta10_2); // --> 10
console.log("----------");

// 11.- Crear las variables postI y postJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de postI el valor de postJ++
console.log("Ejercicio 11");
let postI = 0;
let postJ = 0;

for (let i = 0; i < 11; i++) {
  postI += postJ++;
}
console.log('Valor final postI =', postI); // --> 55
console.log('Valor final postJ =', postJ); // --> 11
console.log("----------");

// 12.- Crear la variable sumaPares con valor 0 a continuación crea un bucle que itere 10 veces (i < 10) si la iteración es par se deberá sumar a sumaPares el número de la iteración actual (i)
console.log("Ejercicio 12");
let sumaPares = 0;

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    sumaPares += i;
  }
}
console.log('Suma de los números pares:', sumaPares); // --> 20
console.log("----------");

// 13.- Crear variable tipo let de nombre variableValorNumerico declarada con un valor numérico cualquiera
console.log("Ejercicio 13");
let variableValorNumerico = 35;
console.log("variableValorNumerico =", variableValorNumerico); // --> 42
console.log("----------");

// 14.- Crear variable tipo const de nombre MiNombre declarada con valor tu nombre
console.log("Ejercicio 14");
const MiNombre = 'Alberto';
console.log("MiNombre =", MiNombre); // --> Alberto
console.log("----------");

// 15.- Crear variable tipo const de nombre MiNumeroFav declarada con valor numérico
console.log("Ejercicio 15");
const MiNumeroFav  = 23;
console.log("MiNumeroFav  =", MiNumeroFav ); // --> 23
console.log("----------");

// 16.- Crear variable booleanoOr cuyo calor sea la comparación booleana booleano1 or booleano2
// Declarar las variables booleanas
console.log("Ejercicio 16");
booleano1 = true;  // --> true
booleano2 = false; // --> false
let booleanoOr = booleano1 || booleano2;
console.log("booleanoOr =", booleanoOr); // --> true
console.log("----------");

// 17.- Crear variable booleanoMix1 cuyo valor sea la comparación booleana (booleano1 and (TAU/2 sea igual a PI)) or (variableValorNumerico mayor o igual que MiNumeroFav)
console.log("Ejercicio 17");
booleano1 = true; // --> true
variableValorNumerico = 10; // --> 10
let booleanoMix1 = (booleano1 && (TAU / 2 === PI)) || (variableValorNumerico >= MiNumeroFav);
console.log("booleanoMix1 =", booleanoMix1);
console.log("----------");

// 18.- Crear variable seisNoEsNueve cuyo valor sea la comparación booleana 6 no es estrictamente igual que 9
console.log("Ejercicio 18");
let seisNoEsNueve = 6 !== 9;
console.log("seisNoEsNueve =", seisNoEsNueve);
console.log("----------");

// 19.- Crear variable booleanoMix2 cuyo valor sea la comparación booleana variableValorNumerico positivo (0 no incluido) o menor que -(MiNumeroFav * TAU)
console.log("Ejercicio 19");
variableValorNumerico = 5;
let numFavoritoPorTAU = MiNumeroFav * TAU;
let booleanoMix2 = (variableValorNumerico > 0) || (variableValorNumerico < -numFavoritoPorTAU);
console.log("booleanoMix2 =", booleanoMix2);
console.log("----------");

// 20.- Crear variable valorSuma cuyo valor sea la suma de MiNumeroFav y variableValorNumerico
console.log("Ejercicio 20");
let valorSuma = MiNumeroFav + variableValorNumerico;
console.log("valorSuma =", valorSuma);
console.log("----------");

// 21.- Crear variable valorResta cuyo valor sea la resta de MiNumeroFav y variableValorNumerico
console.log("Ejercicio 21");
let valorResta = MiNumeroFav - variableValorNumerico;
console.log("valorResta =", valorResta);
console.log("----------");

// 22.- Crear variable valorMultiplicación cuyo valor sea la multiplicación de MiNumeroFav por variableValorNumerico
console.log("Ejercicio 22");
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;
console.log("valorMultiplicación =", valorMultiplicacion);
console.log("----------");

// 23.- Crear variable valorDivisión cuyo valor sea la división de MiNumeroFav entre 3
console.log("Ejercicio 23");
let valorDivision = MiNumeroFav / 3;
console.log("valorDivision =", valorDivision);
console.log("----------");

// 24.- Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle while hasta que se verifique que contarHasta10 === 10
console.log("Ejercicio 24");
let contarHasta10 = 0;

while (contarHasta10 < 10) {
    contarHasta10++;
    console.log("contarHasta10 vale =", contarHasta10);
}
console.log("contarHasta10 es igual a 10:", contarHasta10 === 10);
console.log("----------");

// 25.- Crear las variables preI y preJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de preI el valor de ++preJ
console.log("Ejercicio 25");
let preI = 0;
let preJ = 0;

// Bucle que itera 11 veces
for (let i = 0; i < 11; i++) {
    preI += ++preJ; // Sumar al valor de preI el valor de ++preJ
}
console.log("Valor de preI =", preI);
console.log("Valor de preJ =", preJ);
console.log("----------");

// 26.- Crear la variable sumaImpares con valor 0 a continuación crea un bucle que itere 10 veces (i < 10) si la iteración es impar se deberá sumar a sumaImpares el número de la iteración actual (i)
console.log("Ejercicio 26");
let sumaImpares = 0;

for (let i = 0; i < 10; i++) {
    // Verificar si la iteración es impar
    if (i % 2 !== 0) {
        sumaImpares += i; // Sumar el valor de la iteración impar
    }
}
console.log("Suma de los números impares:", sumaImpares);
console.log("----------");
