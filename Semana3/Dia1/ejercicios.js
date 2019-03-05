// EJERCICIO 21 - CONDICIONALES - LIBRO
// El banco “Bandido de peluche” desea calcular para uno de sus clientes
// el saldo actual, el pago mínimo y el pago para no generar intereses.
// Los datos que se conocen son: saldo anterior del cliente,
// monto de las compras que realizó y el pago que depositó en el corte
// anterior. ////Para calcular el pago mínimo se debe considerar 15% del
// saldo actual, y para no generar intereses corresponde 85% del saldo
// actual, considerando que este saldo debe incluir 12% de los intereses
// causados por no realizar el pago mínimo y $200 por multa por el
// mismo motivo. Realice el algoritmo correspondiente y represéntelo
// mediante el diagrama de flujo y pseudocódigo.

var saldoActual, saldoProximo,
    pagoMinimo,
    pagoPNGI,
    saldoAnterior,
    montoCompras, 
    pagoAnterior, interes;
montoCompras = 3000;
saldoAnterior = 2000;
pagoAnterior = 500;
saldoActual = montoCompras - saldoAnterior - pagoAnterior;
pagoMinimo = saldoActual * 0.15;
pagoPNGI = saldoActual * 0.85;

interes = 0;

pagoActual = 150;

if(pagoActual < pagoPNGI){
    interes = (saldoActual * 0.12) + 200;
    saldoProximo = saldoActual - pagoActual + interes;
}else{
    saldoProximo = saldoActual - pagoActual;
}

console.log(`----BOLETA----`);
console.log(`Pago => ${pagoActual}`);
console.log(`Saldo Proximo => ${saldoProximo}`);
console.log(`Se le ha generado un interes de ${interes} soles`);