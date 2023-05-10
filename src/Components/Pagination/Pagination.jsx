import './Pagination.css'

export default function Pagination ({prev, next, onPrevious, onNext}) {

    const handlePrevious = () => {
        onPrevious()
    }

    const handleNext = () => {
        onNext()
    }


    return (
        <div>
            <ul className='pagination'>
                { prev ? <li>
                <button className='button' onClick={handlePrevious}>Previous</button>
                </li>: null}
                
                { next ? <li>
                <button className='button' onClick={handleNext}>Next</button>
                </li> : null}
            </ul>
        </div>
    )
}