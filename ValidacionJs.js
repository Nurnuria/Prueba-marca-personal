

function validacion(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var todook =true;
    var expresion = /^[a-zA-Z]\w+@[a-zA-Z\-]+\.(com|es|net)$/;

/* CAMPOS OBLIGATORIOS */
  if(name === "" || email === "" ||age === ""){
        alert("ERROR: Todos los campos son obligatorios");
        return false;
    }


/* TEST NOMBRE */
    else if(name.length<3){
        alert("ERROR: El nombre es demasiado corto");
        return false;
    }

    else if(name.length>25){
        alert("ERROR: El nombre es demasiado largo");
        return false;
    }


/* TEST EMAIL */

    else if (!expresion.test(email)){
        alert("ERROR: No se ha escrito el correo correctamente");
        return false;

    } 

 /* TEST EDAD */  
    else if(age<10) { 
         alert("ERROR: la edad debe ser mayor de 10 años.");
            return false; 
        } 

    else if(age>100){
         alert("ERROR: la edad debe ser menor de 100 años.");
            return false; 
      }else {
        alert("Gracias por ingresar los datos correctamente :) ");
        return true;
      }

    
}
