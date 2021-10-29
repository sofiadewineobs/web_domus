function validar (){

var nombre = document.getElementById ('nombre').value;
var apellido = document.getElementById ('apellido').value;
var mail = document.getElementById ('mail').value;
var controlMail = document.getElementById ('controlMail').value;
var fechaIngreso = document.getElementById ('fechaIngreso').value;
var fechaSalida = document.getElementById ('fechaSalida').value;
var cantPax = document.getElementById ('cantPax').value;

if(nombre === null || nombre === ''){
    alert ('Ingresa tu nombre');
    return false;
    }
else if (apellido === null || apellido === ''){
    alert ('Ingresa tu apellido');
    return false;
    }
    
else if(mail === null || mail === ''){
    alert ('Ingresa tu mail');
    return false;
}
 
 else if(controlMail === null || controlMail === ''){
    alert ('Confirma tu mail');
    return false;
}

else if(fechaIngreso === null || fechaIngreso === ''){
    alert ('Indica la fecha de ingreso');
    return false;
}
    
else if(fechaSalida === null || fechaSalida=== ''){
    alert ('Indica la fecha de salida');
    return false;
}
    
else if(cantPax === null || cantPax === ''){
    alert ('Indica la cantidad de personas');
    return false;
}
    
}