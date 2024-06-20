//Unir dos o mas objetos

const persona = {
    nombre : "Alicia",
    apellido : "Lopez"
};

const alumno = {
    numero_cuenta : "222222",
    creditos : "430"
};

const profesor = {
    numero_empleado : 55555,
    sueldo : 45555
};

//Metodo assing

//const alum = true;
//if (alum == true){
//    const esAlumno = Object.assign(persona.alumno);
//    console.log(esAlumno);
//}else{
//    const esProfesor = Object.assign(persona.profesor);
//    console.log(esProfesor);
//}


//Copia de 
const resultado = {...alumno, ...persona}
console.log(resultado); //manda la informacion dentro de alumno y persona