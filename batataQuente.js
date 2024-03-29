//para isso usaremos a classe de fila,pois batata quente nada mais é do que uma fila
class Fila {
    constructor(){
        this.count = 0
        this.lowestCount = 0
        this.item = {}
    }
    enqueue(elemento){
        this.item[this.count] = elemento
        this.count++
    }
    dequeue(){
        if (this.isEmpty()){
            return undefined
        }
        const resultado = this.item[this.lowestCount]
        delete this.item[this.lowestCount]
        this.lowestCount++
        return resultado
    }
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.item[this.lowestCount]
    }
    isEmpty(){
        return this.count - this.lowestCount === 0
    }
    size(){
        return this.count - this.lowestCount
    }
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
function batataQuente(listaDeElemento, numero){
    const filaBatata = new Fila
    const listaEliminação = []
    for (let i = 0; i<listaDeElemento.length;i++){
        filaBatata.enqueue(listaDeElemento[i])
    }
    while(filaBatata.size() > 1 ){
        for(let i = 0;i < numero; i++ ){
            //aqui é o processo de batata quente ele vai adicionar na fila o elemento enquanto ele é removido
            //basicamente para rodar isso aqui embaixo a batata
            // e o primeiro da fila vai para o final dela
            filaBatata.enqueue(filaBatata.dequeue())
        }
        //adiciona na lista aquela batata removida ao final do lopin e so acaba quando o tamnho da fila for 1
        listaEliminação.push(filaBatata.dequeue())
    }
    return {
        eliminados: listaEliminação,
        Ganhador : filaBatata.dequeue()
    }
}

//testando...
const nomes = ['Joao', 'Maria', 'Enzinho', 'Keplin', 'Andrea', 'Guilherme', 'Julia']
const resultado = batataQuente(nomes, 8)
resultado.eliminados.forEach(nome => {
    console.log(`${nome} foi eliminado do jogo`)

})
console.log(`O vencedor foi ${resultado.Ganhador}`)
