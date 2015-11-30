/*Declaracion de funciones

function presionado(){
alert ("ouch");
}
function avisasicarga(){
var btn = document.getElementById("btn");
btn.innerHTML = "click me!!!";
}*/
/*alert("hola mama")
prompt("¿como te llamas?")
confirm("¿eres feliz?")
var nombre="veridiana"

variables numericos, texto, binarios

operadores: suma+ resta- multiplicacion* division/ resto o modulo%

==igual
!= no es igual
===
!==
>
<
>=
<=
&&


function preguntarNombre(nombre){
	prompt("¿como te llamas?");
}
*/


/*function maximoDeDosNumeros(numero1, numero2){
	if(numero1 > numero2){
		return numero1;
	} else{
        return numero2;
	}
}*/
/*function maximoDeTresNumeros(numero1 , numero2 , numero3){
    if((numero1>numero2)&&(numero1>numero3)){
		return numero1;
	}else if((numero2>numero1)&&(numero2>numero3)){
		return numero2;
	}else{
		return numero3;
	}
}
return Math.max(numero1,numero2,numero3);

}*/
/*function esVocal(C)
{
	if(( C=="a")|| (C=="e")||(C=="i")||(C=="o")||(C=="u"))
	{
		return true;
	}else{
		return false;
	}
}*/
/*function sumarArray(matriz){
	var total=0;
	for(var i in matriz)
	{
		total=total+matriz[i];
	}
	return total;
}*/

function multiplicarArray(matriz){
	var total=1;
	for(var i in matriz)
	{
		total=total*matriz[i];
	}
	if (isNaN(total))
	{
     return "error";
    }else{
     return "total";
    }
}