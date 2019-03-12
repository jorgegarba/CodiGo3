// Creando un objeto Fecha
var fecha = new Date();
document.write(`<p>Fecha actual => ${fecha}</p>`);

var fecha2 = new Date('March 1 2019');
document.write(`<p style="color:#4433ff;">Fecha custom => ${fecha2}</p>`);

var fecha3 = new Date(2019, 10, 10, 14, 55, 00);
document.write(`<p>Fecha custom => ${fecha3}</p>`);

document.write(`<p>Año de la fecha actual ${fecha.getFullYear()}</p>`);
document.write(`<p>Día de la fecha actual ${fecha.getDate()}</p>`);
document.write(`<p>Día de la fecha actual + 15 => ${fecha.getDate() + 15}</p>`);
document.write(`<p>Hora de la fecha actual => ${fecha.getHours()}</p>`);

var navidad = new Date(2019,12,25);
var resto = navidad - fecha;

var segundos = resto / 1000;
var minutos = segundos / 60;
var horas = minutos / 60;
var dias = horas / 24;
var semanas = dias / 7;
document.write(`<p>Quedan ${semanas} semanas para la navidad</p>`);


var nacimiento = new Date(1991,8,9);
document.write(`${Math.floor((((((fecha-nacimiento)/1000)/60)/60)/24)/365)} años`);