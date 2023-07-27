function sFact(num){
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}
function permu(){
const numero = document.getElementById('N')
let num = parseFloat(numero.value)
let fat= `${sFact(num)}`;

document.getElementById("resp").innerText = fat
}
function arranjo(){
const numero1 = document.getElementById('N')  
const numero2 = document.getElementById('K')
let num1 = parseFloat(numero1.value)
let num2 = parseFloat(numero2.value)
let result =sFact(num1)/sFact(num1-num2)
document.getElementById("resp").innerText = result
}
function combi(){
    const numero1 = document.getElementById('N')  
    const numero2 = document.getElementById('K')
    let num1 = parseFloat(numero1.value)
    let num2 = parseFloat(numero2.value)
    let result =sFact(num1)/sFact(num2)*sFact(num1-num2)
    document.getElementById("resp").innerText = result
}
    
