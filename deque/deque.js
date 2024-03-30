//aqui vamos ver as estrturas de dados queseguem tanto o principio LIFO 
// como tambem o FIFO, ou seja,fila e pilha ao mesmo tempo

class Deque {
//     Como o deque é uma fila especial, percebemos que ele compartilha alguns
// trechos de código com o construtor, tem as mesmas propriedades internas
// e tem os métodos a seguir: isEmpty, clear, size e toString.
    constructor(){
        this.count = 0
        this.lowestCount = 0
        this.item = {}
    }
    isEmpty(){
        return this.count - this.lowestCount === 0
    }
    size(){
        return this.count - this.lowestCount
    }
    // para esse metodo é so retornamos os valores iniciais no construtor
    clear(){
        this.count = 0
        this.lowestCount = 0
        this.item = {}
    }
    toString(){
        if(this.isEmpty()){
            return ''
        }
        let objString = `${this.item[this.lowestCount]}`
        for(let i = this.lowestCount +1;i < this.count;i++){
            objString = `${objString},${this.item[i]}`
        }
        return objString
    }
    // esse ultimo metodo que irei fazer serve para furar a "fila" por assim dizer
    addFront(elemento){
        // caso esteja vazio vai ser adicionado ao finally,feito assim pra economizar codigo
        if(this.isEmpty()){
            this.addBack(elemento)
        // aqui caso ja tenham adicionado ao inicio da fila algum para botar no lugar
        }else if(this.lowestCount > 0){
            this.lowestCount--
            this.item[this.lowestCount] = elemento
        // e aqui para não bagunçar a ordem caso ninguem tenha sido colocado na frente mas ainda existirem
        // muitas pessoas na fila_1, para não bagunçar a ordem
        }else{(this.lowestCount = 0)
            for(let i = this.count; i > 0; i--){
                this.item[i]= this.item[i-1]
            }
            this.count++
            this.lowestCount = 0
            this.item[0]
        }
    }
    //agora o resto dos metodos ja tem na pasta de pilhas e filhas porem vamos categorizalos diferente aqui para
    // que não haja confusão
    addBack(elemento){
        this.item[this.count] = elemento
        this.count++
    }
    removeFront(){
        if (this.isEmpty()){
            return undefined
        }
        const resultado = this.item[this.lowestCount]
        delete this.item[this.lowestCount]
        this.lowestCount++
        return resultado
    }
    removeBack(){
        this.count --
        const resultado = this.item[this.count]
        delete this.item[this.count]
        return resultado    
    }
    peekFront(){
        if(this.isEmpty()){
            return undefined
        }
        return this.item[this.lowestCount]
    }
    peekBack(){
            return this.item[this.item.length - 1]
    }
}