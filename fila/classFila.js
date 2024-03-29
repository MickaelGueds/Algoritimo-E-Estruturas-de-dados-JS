class Fila {
    //aqui vamos iniciar o construtor de uma fila, declarando para o objeto criado uma contagem inicial de
    // zero,tambem a contagem mais baixa para o controle do primeiro elemento, e então usaremos um objeto
    // para armazenarmos os elementos da nossa fila
    constructor(){
        this.count = 0
        this.lowestCount = 0
        this.item = {}
    }
    //agora criarmos os metodos para manipular a fila
    enqueue(elemento){
        //nesse objeto no indicie dessa contagem vamo atribuir o elemento que queremos
        // depois aumentaremso o indice desse objeto
        this.item[this.count] = elemento
        this.count++
    }
    //agora vamos remover, temos que tomar cuidado pois removemos quem ta na frente ou seja o primeiro
    // a ser colocado, e assim por diante não é ultimo que sai como é no caso da pilha, além de retornar
    //aquilo que foi removido
    dequeue(){
        if (this.isEmpty()){
            return undefined
        }
        const resultado = this.item[this.lowestCount]
        delete this.item[this.lowestCount]
        this.lowestCount++
        return resultado
    }
    //aqui embaixo o metodo é utilizado para acessar apenas o primeiro elemento da fila, sem remover
    // verificamos se esta vazia e então devolve a ultima contagem que no caso vai ser o primeiro elemento
    //pois é so pensar que o indice que vai ser retornado é o da ultima contagem, então vai ficar sempre no
    // primeiro adicionado ao não ser que voce remova esse elemento, preste bem atenção no atributo lowestCount
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.item[this.lowestCount]
    }
    //nesse caso estaremos analisando se ta vazio,se a contagem de adição e e a de remoção suas subtrações
    //derem 0 então siignifica que a lista esta vazia
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
}
//agora vamos testar

const fila_1 = new Fila
//aqui vamos exibir true
console.log(fila_1.isEmpty())
fila_1.enqueue('Jack')
fila_1.enqueue('João')
fila_1.enqueue('Ricardo')
fila_1.enqueue('Maria')
console.log(fila_1.item)
//veja que a fila fica na ordem no metodo toString o lop for serve pra isso, adicionando os elementos a direita na string
console.log(fila_1.toString())
//agora preste muita atenção, ao metodo de remoção dequeue e observe quem sai

fila_1.deq

