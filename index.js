let result=document.getElementById("result")
let entry=document.getElementById("entry")
let resultIva=document.getElementById("result-iva")
let changePercentage=document.getElementById("change-percentage")

let subtotal=0
let taxePercentage=.12


function main(){
    let iva=subtotal*taxePercentage
    iva=iva.toFixed(2)
    resultIva.textContent+=iva
    let sumIva= subtotal*(1+taxePercentage)
    sumIva=sumIva.toFixed(2)
    result.textContent+=sumIva
    entry.textContent+=subtotal
    delete subtotal
}
function start(){
    location.reload()
}

// function changeTaxePercentage(){
//     let i=prompt("Ingresa el porcentaje en número entero")
//     i= i/100
//     taxePercentage=i
    
//     subtotal=prompt("Ingresa el valor total");
//     main()
// }
//Program
subtotal=prompt("Ingresa el valor total");
main();