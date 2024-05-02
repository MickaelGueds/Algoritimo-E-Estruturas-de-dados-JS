class Set {
    constructor() {
        this.items = {}
    }
    //esse metodo vai ser usado pra identificar se um elemento ja pertence ou não ao conjunto
    has(element) {
        // hasOwnProperty retorna um boleano de propriedade especifica ou não diretamente no objeto
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }
    add(element){
        if(!this.has(element)){
            this.items[element] = element
            return true
        }
        return false
    }
    delete(element){
        if(this.has(element)){
            delete this.items[element]
        }
        return false
    }
    clear(){
        this.items = {}
    }
    size(){//obs estamos fazendo metodos para que todos os navegadores rodem, ou seja herdado, tem maneiras mais simples e faceis de fazer em navegadores simples
        let count = 0
        for(let key in this.items){
            if(this.items.hasOwnProperty(key)){
                count ++
            }
        }
    }
    values(){
        return Object.values(this.items)
      
    }
    union(outroSet){//como aqui é a união iremos somar todos os valores 
        const unionSet = new Set()
        this.values().forEach(values => unionSet.add(values))
        outroSet.values().forEach(values => unionSet.add(values))
        return unionSet
    }
    interseção(outroSet){
        const interseçãoSet = new Set()
        const values = this.values()
        for(let i = 0; i < values.length; i++){
            if(outroSet.has(values[i])){
                interseçãoSet.add(values[i])
            }
        }
        return interseçãoSet
    }
    diferenca(outroSet){
        const differenceSet = new Set()
        this.values().forEach(value => {
            if (!outroSet.has(value)){
                differenceSet.add(value)
            }
        })
    }
    isSubSetOf(outroSet){
        if(this.size()> outroSet.size()){
            return false
        }
        let isSubsSet = true
        this.values().every(value => {
            if(!outroSet.has(value)){
                isSubsSet = false
                return false
            }
            return true
        })
        return isSubsSet
    }
}

const set = new Set()
console.log(set.add(1))
set.add(5)
console.log(set.items)

const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)
const setB = new Set()
setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6)
const setC = new Set()
setC.add(1)
setC.add(2)

console.log(setC.isSubSetOf(setA))
const uniaoAb = setA.union(setB)
console.log(uniaoAb.values())
