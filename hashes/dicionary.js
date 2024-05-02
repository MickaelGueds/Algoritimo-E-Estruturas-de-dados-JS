import { defaultEquals } from '../util'
class ValorPar {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
    toString() {
        return `[#${this.key}: ${this.value}]`
    }
}



export default class Dicionario {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.table = {}
    }
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null
    }
    set(key, valor) {
        if (key != null && valor != null) {
            const tableKey = this.toStrFn(key)
            this.table[tableKey] = new ValorPar(key, valor)
            return true
        }
        return false
    }
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)]
            return true
        }
        return false
    }
    get(key) {
        if (this.hasKey(key)) {
            return this.table[this.toStrFn(key)]
        }
    }
    //agora metodos auxiliares
    keyValue() {
        return Object.values(this.table)
    }
    forEach(callback) {
        const valorPares = this.keyValue()
        for (let i = 0; i < valorPares.length; i++) {
            const result = callback(valorPares[i].key, valorPares[i].value)
            if (result === false) {
                break
            }
        }
    }
    size() {
        return Object.keys(this.table).length
    }
    isEmpty() {
        return this.size() === 0
    }
    clear() {
        this.table = {}
    }
    toString() {
        if (this.isEmpty()) {
            return ''
        }const valorPares = this.keyValue()
        let objString = `${valorPares[0].toString()}`
        for(let i; i< valorPares.length;i++){
            objString = `${objString},${valorPares[i].toString()}`
        }
        return objString
    }
}

const dicionario = new Dicionario
dicionario.set('Joao', 'joao@hotmail.com')
dicionario.set('Marcola', 'marcolaIrado@hotmail.com')
dicionario.set('Maria', 'mariana@hotmail.com')
dicionario.set('Ze', 'zezinho@hotmail.com')

console.log(dicionario.hasKey('Maria'))