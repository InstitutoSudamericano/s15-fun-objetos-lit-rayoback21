//Crear variables con diferentes tipos de datos (number, string, array, objetos literales) para almacenar información de una persona, 
//pasar estos como parámetros de una función, que imprimirá en pantalla usando un template string con backcstick (``).
let curriculum={
    
    address: "Simon Bolivar"
}

let fullname={
    nombre: "Bryan Bonilla"
}

let ci={
    cedula: "0704448547"
}

let skills={
    habilidad: "Eficiente"
}

let address={
    Direccion: "AV.Ricaurte y 18 de noviembre"
}


function showCurriculum(fullname,ci,skills,address){
    let Salida=`
    Hoja de Vida 
    fullname: ${fullname.nombre}
    ci: ${ci.cedula}
    skills: ${skills.habilidad}
    address: ${address.Direccion}
    
    `
    
return Salida;
}
let resultado=showCurriculum(fullname,ci,skills,address);
console.log(resultado);




