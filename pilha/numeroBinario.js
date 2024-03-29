// ALGORITIMO DE NUMROS BINARIOS COM PILHA
class Stack3 {
    constructor(){
        this.items= []
    }
    isEmpty() {
        return this.items.length === 0 
    }
    push(elements){
        // aqui diferente do primeiro Stack,vemos que é chave valor, em objeto, imagine 
        // count sendo a chave e elemets sendo valor
        this.items.push(elements)
    }
    peak(){
        return this.items[this.items.length - 1]
    }
    pop(){
        if(this.isEmpty()){
            return undefined
        }else{
            return this.items.pop()
        }
    }
    size(){
        return this.items.length
    }
    clear(){
        this.items = []
    }
    
    
}
function decParaBi(decNum){
    const remStack = new Stack3()
    let numero = decNum
    let rem
    let StringBinaria = ''
    while(numero>0){
        rem = Math.floor(numero%2)
        remStack.push(rem)
        numero = Math.floor(numero/2)
        // console.log(numero) 
    }
    while(!remStack.isEmpty()){
        StringBinaria += remStack.pop().toString()
    }
    return StringBinaria
}

console.log(decParaBi(5555555))