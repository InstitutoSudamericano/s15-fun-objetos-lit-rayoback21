//Crear una función que reciba un objeto literal con nombre y edad de una persona, 
//la función debe validar si la edad aceptado para recibir la vacuna que debe ser 
//para menores a 5 anos o mayor a 65. La salida de la función es un string de
//aceptado y no aceptado.

let person={
    nombre: "Juan",
    age: 6
}



function showObjets(person){
    if(person.age<5 || person.age>64){
        console.log("Califica")
    }else{
        console.log("No Califica")
    }
    

}
showObjets(person);





