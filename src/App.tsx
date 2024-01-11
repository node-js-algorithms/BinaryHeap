import { useState, useEffect } from 'react'
import './App.css'
import { BinaryHeap } from './classes/binaryHeap'
import { generateRandomArray } from './helpers/createRandomArray'
import { Node } from './components/node'
const binaryHeap = new BinaryHeap()

function App() {
    const [randomArray, setRandomArray] = useState<number[]>([])
    const [binaryHeapArray, setBinaryHeapArray] = useState<number[]>([])
    const createRandomBinaryHeap = () => {
        const currentData = binaryHeap.getData
        if (currentData.length > 0){
            binaryHeap.clearData()
        }
        const newArray: number[] = generateRandomArray(25, 1, 100)
        setRandomArray(newArray)
        newArray.forEach(value => binaryHeap.insert(value))
        const data: number[] = binaryHeap.getData
        setBinaryHeapArray(data)
    }

    useEffect(() => {
        if (randomArray.length > 0){
            createRandomBinaryHeap() // Создаем начальную кучу при монтировании компонента
        }
    }, [])

    const extract = () => {
        binaryHeap.extract()
        const newState = binaryHeap.getData.length === 0 ? [] : binaryHeap.getData.map(value => value)
        setBinaryHeapArray(newState)
    }
    const renderHeapArray = () => binaryHeapArray.length > 0
        ? <div>[{binaryHeapArray.join(', ')}]</div>
        : <p>Нет элементов в бинарной куче</p>


    return (
        <main className={'main'}>
            <section className={'binary'}>
                <button className={'binary__button'} onClick={createRandomBinaryHeap}>Создать рандомный массив</button>
                <div className={'head'}>
                    <h1 className={'head__title'}>Рандомный массив</h1>
                    <div className={'head__array'}>[{randomArray.join(', ')}]</div>
                </div>
                <div className={'heap-array'}>
                    <h2 className={'heap-array__title'}>Бинарный массив из рандомного</h2>
                    <div className={'heap-array__array'}>{renderHeapArray()}</div>
                </div>
                <div className={'image'}>
                    <h2 className={'image__title'}>Визуальное представление кучи</h2>
                    <Node binaryHeapArray={binaryHeapArray} extract={extract} />
                </div>
            </section>
        </main>
    )
}

export default App
