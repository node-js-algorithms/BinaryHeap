import { BinaryHeap } from './BinaryHeap'

describe('BinaryHeap', () => {
    let heap: BinaryHeap

    beforeEach(() => {
        heap = new BinaryHeap()
    })

    test('inserts elements into the heap', () => {
        heap.insert(10)
        heap.insert(20)
        heap.insert(5)
        expect(heap.getData).toEqual([20, 10, 5]) // для макс-кучи
    })

    test('extracts the maximum element from the heap', () => {
        heap.insert(10)
        heap.insert(20)
        heap.insert(5)
        expect(heap.extract()).toBe(20)
        expect(heap.getData).toEqual([10, 5])
    })

    test('maintains the heap property after extracting', () => {
        heap.insert(10)
        heap.insert(20)
        heap.insert(15)
        heap.extract()
        expect(heap.getData).toEqual(expect.arrayContaining([10, 15])) // или более конкретная проверка порядка
    })

    test('clears the heap', () => {
        heap.insert(10)
        heap.clearData()
        expect(heap.getData).toEqual([])
    })
})