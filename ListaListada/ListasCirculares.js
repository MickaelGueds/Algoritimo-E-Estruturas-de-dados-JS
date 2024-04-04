import defaultEquals from "../util";
import ListaLigada from "./ClassLinkedList"

class ListaCircularLigada extends ListaLigada {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn)
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element)
            let current = this.head
            if (index === 0) {
                if (this.head == null) {
                    this.head = node
                    node.next = this.head
                } else {
                    node.next = current
                    current = this.getElement(this.size())
                    this.head = node
                    current.next = this.head
                }
            } else {
                const previous = this.getElement(index - 1)
                node.next = previous.next
                previous.next = node
            }
            this.count++
            return true
        }
        return false
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head
            if (index === 0) {
                if (this.size() === 1) {
                    this.head = undefined
                } else {
                    const removed = this.head//referencia ao elemento que sera removido da lista
                    current = this.getElement(this.size())
                    this.head = this.head.next
                    current.next = this.head
                    current = removed
                }
            } else {
                const previous = this.getElement(index - 1)
                current = previous.next
                previous.next = current.next
            }
            this.count--
            return current.element
        }
        return undefined
    }
}