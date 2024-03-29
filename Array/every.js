let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function épar(x){
    return x % 2 === 0
}
//aqui vemos que o metodo every era para rodar ate que ache um retorno de falso, no caso dessa função
// o proprio numero um retorna falso
console.log(numeros.every(épar))