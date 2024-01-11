export function generateRandomArray(size: number, min: number, max: number): number[] {
    const randomArray = []
    for (let i = 0; i < size; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
        randomArray.push(randomNum)
    }
    return randomArray
}