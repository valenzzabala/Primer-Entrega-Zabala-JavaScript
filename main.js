function long_KmToMil(kilometros){
    let millas = kilometros * 0.621371
    return millas

}

function long_MilToKm(millas){
    let kilometros = millas * 1.60934
    return kilometros

}
function temp_CelToFa(celsius){
    let fahrenheit = (celsius * 9/5) + 32
    return fahrenheit
}

function temp_FaToCel(fahrenheit){
    let celsius = (fahrenheit - 32) * (5/9);
    return celsius
}
function peso_KgToLb(kilogramos){
    let libras = kilogramos * 2.20462
    return libras
}

function peso_LbToKg(libras){
    let kilogramos = libras * 0.453592
    return kilogramos
}

while(true){
    
   
    let opcion = prompt("--Bienvenido al sistema conversor de unidades--\n\n1. Longitud (Kilometros o millas)\n2. Temperatura (C° o F°)\n3. Peso (Kilogramos o libras)\n4. Salir\n\nIngrese una opcion: ")

    if(opcion=="1"){
        let opcion_1 = prompt("-- Unidades de longitud --\n\n1. Kilometros a millas\n2. Millas a kilometros\n\nIngrese una opcion: ")
        if(opcion_1=="1"){
            let kilometros = Number(prompt("Ingrese la distancia en kilometros: "))
            if(isNaN(kilometros)){
                alert("¡Ingrese numeros!, volves al menu principal")
                continue
            }else{
                let millas = long_KmToMil(kilometros)
                alert(`${kilometros} kilometros equivale a : ${millas} millas.`)
                continue
            }

        }else if(opcion_1=="2"){
            let millas = Number(prompt("Ingrese la distancia en millas: "))
            if(isNaN(millas)){
                alert("¡Ingrese numeros!, volves al menu principal")
                continue
            }else{ 
                kilometros = long_MilToKm(millas)
                alert(`${millas} millas equivale a : ${kilometros} kilometros.`)
                continue
            }
        }else{
            alert("Opcion no valida,vuelve al menu principal")
            continue
        }
        
    }else if(opcion=="2"){ 
        let opcion_2 = prompt("--Unidades de Temperatura--\n\n1. Celsius a Fahrenheit\n2. Fahrenheit a Celsius\n\nIngrese una opcion: ")
        if(opcion_2=="1"){ 
            let celsius = Number(prompt("Ingrese los grados en Celsius: "))
            if(isNaN(celsius)){
                alert("¡Ingrese numeros!, volves al menu principal")
                continue
            }else{ 
                fahrenheit = temp_CelToFa(celsius)
                alert(`${celsius}C° equivale a: ${fahrenheit}F°`)
                continue
            }
        }else if(opcion_2=="2"){ 
            let fahrenheit = Number(prompt("Ingrese los grados en Fahrenheit: "))
            if(isNaN(fahrenheit)){
                alert("¡Ingrese numeros!, volves al menu principal")
                continue
            }else{
                celsius = temp_FaToCel(fahrenheit)
                alert(`${fahrenheit}F° equivale a: ${celsius}C°`)
                continue

            }
        }else{
            alert("Opcion no valida,vuelve al menu principal")
            continue
        }

    }else if(opcion=="3"){
        let opcion_3 = prompt("--Unidades de Peso--\n\n1. Kilogramos a Libras\n2. Libras a Kilogramos\n\nIngresar una opcion: ")
        if(opcion_3=="1"){
            let kilogramos = Number(prompt("Ingrese el peso en Kilogramos: "))
            if(isNaN(kilogramos)){
                alert("¡Ingrese numeros!, volves al menu principal")
                continue
            }else{
                libras = peso_KgToLb(kilogramos)
                alert(`${kilogramos} KG equivalen a ${libras} lb`)
                continue
            }
        }else if(opcion_3=="2"){ 
            let libras = Number(prompt("Ingrese el peso en Libras: "))
            if(isNaN(libras)){
                alert("¡Ingrese numeros!, volves al menu principal")
                continue
            }else{
                kilogramos = peso_LbToKg(libras)
                alert(`${libras} lb equivalen a ${kilogramos} KG`)
                continue
            }
        }else{
            alert("Opcion no valida, vuelve al menu principal")
            continue
        }
    }else if(opcion=="4"){
        alert("Gracias por utilizar este sistema")
        break
        
    }else{
        alert("Ingrese una opcion que esté en el menu")
        continue
    }
}
