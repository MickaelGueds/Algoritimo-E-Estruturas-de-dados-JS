//palavra que é lida de tras para frente
//a maneira mais facil de resolver isso com estrutura de dados é usando um deque
class Deque{
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
    const elementoDeletado = this.item[this.count]
    delete this.item[this.count]
    return elementoDeletado
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
function verifiaPalindromo(string){
    if(string=== undefined || string === null || (string !== null && string.length === 0)){
        return false
    }
    const deque = new Deque
    //agora voce tem que transformar tudo em minusculo e remover os espaços
    const lowerSring = string.toLocaleLowerCase().split('').join('')
    //aqui declaramos o valor de true se for igual,usaremos la na frente
    let isEqual = true
    //primeiro caractere e ultimo caractere
    let firstChar, lastChar
    //nessa linha vai adicionando em fila e em ordem cada elemento da string em um deque onde vai ser adicionado
    //letra por letra com o indice da função nativa de js charAt(i)
    for(let i = 0; i < lowerSring.length;i++){
        deque.addBack(lowerSring.charAt(i))
    }
    //essa condição abaixo é o mais importante,enquanto for maior que 1 e verdadeiro vai continuar rodadando
    //então vamos removar tanto da frente, quanto de tras, se esse primeiro e ultimo forem iguais ate o final
    // não vai retornar falso para os isEqual, agora se ja for diferente em cada rodada ja vai retornar falso
    while(deque.size() > 1 && isEqual){
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()
        if(firstChar !== lastChar){
            isEqual = false
        }
    }
    return isEqual
}
//agora teste
console.log('ovo',verifiaPalindromo('ovo'))