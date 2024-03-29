class Stack {
    // aqui usaremos a propriedade count
    constructor(){
        this.count = 0
        this.items= []

    }
    isEmpty() {
        return this.items.length === 0 
    }
    push(elements){
        // aqui diferente do primeiro Stack,vemos que é chave valor, em objeto, imagine 
        // count sendo a chave e elemets sendo valor
        this.items[this.count] = elements
        this.count++
    }
    peak(){
        return this.items[this.items.length - 1]
    }
    pop(){
        
        if(this.items.isEmpty()){
            return undefined
        }else{
            this.count--
            const resultado = this.items[this.count]
            delete this.items[this.count]
            return resultado
        }
    }
    size(){
        return this.items.length
    }
    clear(){
        this.items = []
    }
    toString() {
        if (this.isEmpty()) {
        return '';
        }else{
            let objString = `${this.items[0]}`; // Converte o primeiro objeto em uma string JSON
            for (let i = 1; i < this.count; i++) {
                objString += `${objString},${this.items[i]}`
            }
            return objString
        }
    }
}

const pilha = new Stack()

pilha.push(10)
pilha.push(115)
pilha.push(7)

console.log(pilha)
console.log(pilha.toString())