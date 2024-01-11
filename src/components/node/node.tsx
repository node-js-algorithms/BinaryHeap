import { FC } from 'react'
interface IProps{

  binaryHeapArray: number[]
  extract: () => void
}
const Node: FC<IProps> = ({ binaryHeapArray, extract }) => {
    const renderNode = (index: number): JSX.Element | null => {
        if (index < binaryHeapArray.length) {
            const hasLeftChild = index * 2 + 1 < binaryHeapArray.length
            const hasRightChild = index * 2 + 2 < binaryHeapArray.length
            return (
                <div className='node' key={index}>
                    <div onClick={() => extract()} className='node-value'>{binaryHeapArray[index]}</div>
                    <div className='children'>
                        {hasLeftChild && (
                            <div className='child left'>{renderNode(2 * index + 1)}</div>
                        )}
                        {hasRightChild && (
                            <div className='child right'>{renderNode(2 * index + 2)}</div>
                        )}
                    </div>
                </div>
            )
        }
        return null
    }
    return (
        <div className='visual-heap'>
            {renderNode(0)}
        </div>
    )
}

export default Node