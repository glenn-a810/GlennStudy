import React from 'react'

function Counter({number, diff, handleIncrease, handleDecrease, handleSetDiff}) {
    const handleChange = e => {
        handleSetDiff(parseInt(e.target.value, 10))
    }

    return(
        <div>
            <h1>{number}</h1>
            <div>
                <input type='number' value={diff} min='1' onChange={handleChange} />
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleDecrease}>-</button>
            </div>
        </div>
    )
}

export default Counter