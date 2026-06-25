var a,b,c,d,edad,dia;
d=prompt("Ingrese su nombre");
a=parseInt(prompt("Año de anacimiento"));
edad=2024-a;

if(edad>=18)
{
    document.writeln(d+" Eres mayor de edad");
}
else{
    document.writeln(d+" Eres menor de edad   ");
}
dia=parseInt(prompt("Ingre un numero de dia entre 1 y 7"));
switch(dia)
{
    case 1:alert(" LUNES");break;/*Salsida sin condiciones es el break */
    case 2: alert("MARTES");break;
    case 3: alert("MIEROLES");break;
    case 4: alert("JEUEVES");break;
    case 5: alert("VIERNES");break;
    case 6: alert("SABADO");break;
    case 7: alert("DOMINGO");break;
    default: alert("Fuera de rango");/*sirve para salir directo*/

}
