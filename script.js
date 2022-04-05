let resultado = document.getElementById('resultado');

function insert(num){
 let numero = resultado.innerHTML;
 resultado.innerHTML = numero + num;
}

function clean(){
    resultado.innerHTML ='';
}
function back(){
    let result = resultado.innerHTML;
    resultado.innerHTML = result.substring(0, result.length - 1)
}
function calc(){
    let result = resultado.innerHTML;
    resultado.innerHTML = eval(result)
}