const fibonacci = []
fibonacci[0] = 1
fibonacci[1] = 1
for(i = 2; i < 20;i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}
// for (let index = 0; index < fibonacci.length; index++) {
//     console.log(fibonacci[index])    
// }

Array.prototype.colocarNumerosNaFrente = function(valor){
    // preste atenção que ao inves de substituir o valor zero diretamente eu precisei alocar 
    // os outros elementos e sesu respectivos indices, dessa maneira fiz um laço for onde o i 
    // é o tamanho do array e ele vai diminuido, pega o ultimo array e reduz seu indice

    for(let i= this.length; i >=0;i--){
        this[i]= this[i-1]
    }
    this[0] = valor
}
fibonacci.colocarNumerosNaFrente(0)
console.log(fibonacci)  