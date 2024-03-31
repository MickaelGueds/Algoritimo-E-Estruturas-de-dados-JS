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
        if (this.head == null){
            this.head = node//dessa maneira vai ser o primeiro item da lista do objeto node
            //veja o ultimo valor vai sempre ar undefined ate que outro seja apontado pois é o final da lista
        }else{
            current = this.head
            while(current.next != null){//obter ultimo item
                current = current.next
            }
            //depois disso voce atribui o novo elemento para a proxima ocorrencia
            current.next = node
        }
        this.count++
    }
    removeAt(index){
        if(index ===0 ){
            let current =this.head
            if(index ===0){
                //dessa maneira a variavel que referencia o primeiro vai ignorar o primeiro node e ir para o proximo
                this.head = current.next
            }else{
               const previous = this.getElement(index -1)
               current = previous.next
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
    //inserido elemento em qualquer posição
    insert(index){
        if(index >= 0 && index <=this.count){
            const node = new Node(elemento)
            if(index === 0){//para adicionar na primeira
                const current = this.head
                node.next = current
                this.head = node
            }else{
            //muita calma para entender aqui kkk,nesse caso pense muito! apos receber a posição anterior 
            //ao que voce quer adicionar(mas por que?por o elemento nessa posição fica logo apos),
            //voce vai precisar referenciar a posição que voce quer que é a atual(voce declara isso na 2)
            //então voce pega o no do node adicionado(node.next)e aponta para o atual,calma
            //imagina que tu botou entre dois então tinha o x => y, voce quer botar o z no meio
            //vai ficar assim x => z => y (x aponta pro node atual, depois o node aponta para o "atual" que é Z)
                const previous = this.getElement(index-1)
                const current = previous.next//2
                node.next = current
                previous.next = node
            }
            this.count++
            return true
        }return false
    }
    //metodo INdexOf, achar a posição de um determinado elemento
    indexOf(element){
        let current = this.head
        for(let i =0;i <this.count && current != null;i++){
            if(this.equalsFn(element, current.element)){
                return i
            }current = current.next
        }
        return -1
    }
    //remover algum elemento que ja exista
    remove(element){
        const index = this.indexOf(element)
        return this.removeAt(index)
    }
    size(){
        return this.count
    }
    isEmpty(){
        return this.size()===0
    }
    getHead(){
        return this.head
    }
    converteString(){
        if(this.head === null){
            return ''
        }
        let objString = `${this.head.element}`
        let current = this.head.next
        for(let i = 0;i < this.size() && current != null;i++){
            objString = `${objString},${current.element}`
            current = current.next
        }
        return objString
    }
    
}

//agora testa

const lista = new ListaLigada()
lista.push(10)
lista.push(15)
lista.push(20)
lista.push(25)
lista.push(30)
lista.removeAt(3)

console.log(lista.indexOf(6))
console.log(lista.indexOf(30))
console.log(lista.converteString())




