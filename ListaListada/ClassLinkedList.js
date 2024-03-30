import  defaultEquals from '../util.js';
import  Node from './models/linked-list-models.js';

export default class ListaLigada {
    constructor(equalsFn = defaultEquals){
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }
    push(elemento){
        //aqui voce vai referenciar um novo node da classe exportado para armazernar a referencia do primeiro
        // elemento e apontar para o proximo
        const node = new Node(elemento)
        //essa variavel aponta para o item atual
        let current
        //agora para o primeiro cenario vamos imaginar que a lista esta vazia,ou seja vai apontar para
        //undefined,ja que o objeto criado da classe ListaLigada e o head(variavel da referencia do primeiro 
        //elemento)vai apontar para o nada por enquanto
        if (this.head==null){
            this.head = node//dessa maneira vai ser o primeiro item da lista do objeto node
            //veja o ultimo valor vai sempre ar undefined ate que outro seja apontado pois é o final da lista
        }else{
            current = this.head
            while(current.next != null){//obter ultimo item
                current = current.next
            }
            //depois disso voce atribui o novo elemento para a proxima ocorrencia
            current.next = node
        }//em um resumo geral esse else adiciona o elemento e referencia caso ja exista algo na lista
        this.count++
    }
    removeAt(index){
        if(index >= 0 && index < this.count){
            let current =this.head
            if(index ===0){
                //dessa maneira a variavel que referencia o primeiro vai ignorar o primeiro no e ir para o proximo
                this.head = current.next
            }else{
                let previous//o no antes para se fazer a ligação apos o que queremos apagar
                for(let i =0;i < index;i++){
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            this.count--
            return current.elemento
        }
        return undefined

    }
    getElement(index){
        if(index >= 0 && index <= this.count){
            let node = this.node
            for(let i= 0;i<index && node!= null;i++){
                node = node.next
            }
            return node
        }
        return undefined
    }
    
}

//agora testa

const lista = new ListaLigada()
lista.push(10)
lista.push(15)
lista.push(20)
lista.push(25)
lista.push(30)
console.log(lista)
lista.removeAt(3)
console.log(lista.elemento)
console.log(lista.element)




