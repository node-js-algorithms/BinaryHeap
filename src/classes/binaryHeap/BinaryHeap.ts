'use strict'
export class BinaryHeap {
    private data: number[]

    constructor() {
        this.data = []
    }

    public insert(element: number) {
        this.data.push(element)
        let index: number = this.data.length - 1
        const current: number = this.data[index]

        while (index > 0) {
            const parentIndexNode: number = Math.floor((index - 1) / 2)
            const parentNode: number = this.data[parentIndexNode]

            if (parentNode <= current) {
                this.data[parentIndexNode] = current
                this.data[index] = parentNode
                index = parentIndexNode
            } else break
        }
    }
    public extract(): number | undefined {
        const lengthData: number = this.data.length
        if (lengthData === 0){
            return undefined
        }
        const max: number = this.data[0]
        const end: number = this.data.pop()!

        if (lengthData === 1){
            return undefined
        }

        if (lengthData > 0){
            this.data[0] = end
            this.heapfyDown(0)
        }

        return max
    }

    private heapfyDown(index: number): void{
        let currentIndex: number = index
        const length: number = this.data.length
        const element: number = this.data[index]
        let swap: null | number
        do {
            swap = null
            const leftChildIndex = 2 * currentIndex + 1
            const rightChildIndex = 2 * currentIndex + 2

            if (leftChildIndex < length && this.data[leftChildIndex] > element) {
                swap = leftChildIndex
            }

            if (rightChildIndex < length) {
                if (
                    (swap === null && this.data[rightChildIndex] > element) ||
                    (swap !== null && this.data[rightChildIndex] > this.data[leftChildIndex])
                ) {
                    swap = rightChildIndex
                }
            }

            if (swap !== null) {
                this.data[currentIndex] = this.data[swap]
                this.data[swap] = element
                currentIndex = swap
            }
        } while (swap !== null)
    }

    public clearData(){
        this.data = []
    }

    public get getData(): number[]{
        return this.data
    }
}