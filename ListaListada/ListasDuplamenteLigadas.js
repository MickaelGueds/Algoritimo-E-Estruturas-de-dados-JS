import defaultEquals from "../util"
import ListaLigada from "./ClassLinkedList"
import Node from "./models/linked-list-models"

//lembre-se, o argumento do super serve para a incialização obrigatoria,o super em si ja chama todos os elementos
// anteriores da classe
class NodeDobrado extends Node {
    constructor(element, next, prev){
        super(element, next)
        this.prev = prev
    }
}
class ListaDobrada extends ListaLigada{
    constructor(equalsFn = defaultEquals){
        super(equalsFn)
        this.tail = undefined
    }
    insert(element,index){
        //algo MUITO IMPORTANTE, lembre que aqui voce não cria o novo elemento, voce cria o ponteiro
        // e suas direções
        if(index >= 0 && index <= this.count){
            const node = new ListaDobrada
            let current = this.head
            if(index === 0){
                if (this.head == null){
                    //aqui caso esteja vazia a lista
                    //aqui voce inicializa com a primeiro ponteiro tanto para a cabeça quando para o final da fila
                    this.head = node
                    this.tail = node
                }else{//lembre-se aqui voce ainda quer botar na posição 0, mas agora a lista não esta vazia
                    //voce vai referenciar o proximo nó do novo elemento que ta colocando(que no caso vai ser o antigo elemento que ta no indice 0),para o elemento atual que é o de this.head, imagine que ta botando uma bola antes da bola que ja tem e voce precisa dizer pra essa nova bola para quem ela tem que apontar
                    //vai referenciar que o no anterior ao atual(no caso o antigo no de indice 0) vai ser apontado para o novo no que esta sendo colocado, apontando a bola que foi pra frente para a bola anterior, isso significa agora ques as duas bolas tem seus refenciais apontados 
                    node.next = this.head
                    current.prev = node
                    this.head = node
                }
            } else if(index === this.count){//aqui é a mesma loja de onteiros acima porem para o final
                current = this.tail
                current.next = node
                node.prev = current
                this.tail = node
            }else{
                const previous = this.getElement(index - 1)
                current = previous.next
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
            }
            this.count++
            return true
        }
        return false 
    }
    removeAt(index){}
}