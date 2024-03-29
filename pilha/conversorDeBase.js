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

function conversorDeBase(decNumero, base){
    const restoPilha4 = new Stack3
    const digitos = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let numero = decNumero
    let resto
    let baseString = ''
    if (!(base >= 2 && base<= 36)){
        return ''
    }
    while(numero>0){
        resto= Math.floor(numero%base)
        restoPilha4.push(resto) 
        numero = Math.floor(numero/base)
    }
    while (!restoPilha4.isEmpty()){
        baseString += digitos[restoPilha4.pop()]
    }
    return baseString

}

console.log(conversorDeBase(100345, 16))