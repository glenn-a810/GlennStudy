import React, { Component } from 'react'

class Counter extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         counter: 0
    //     }
    // }
    state = {
        counter: 0,
        fixed: 1,
        updateMe: {
            toggleMe: false,
            dontChange: 1
        }
    }

    handleToggle = () => {
        this.setState({
            updateMe: {
                ...this.state.updateMe,
                toggleMe: !this.state.updateMe.toggleMe
            }
        })
        console.log(this.state.updateMe.toggleMe)
    }

    handleIncrease = () => {
        this.setState({
            counter: this.state.counter+1
        },
        () => {
            console.log(this.state.counter)
        })
    }

    handleDecrease = () => {
        this.setState({
            counter: this.state.counter-1
        },
        () => {
            console.log(this.state.counter)
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값: {this.state.fixed}</p>
                <button onClick={this.handleToggle}>Toggle</button>
            </div>
        )
    }
}

export default Counter

// import React, { useReducer } from 'react'

// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//         default:
//             return state
//     }
// }

// function Counter() {
//     // const [ number, setNumber ] = useState(0)
//     const [number, dispatch] = useReducer(reducer, 0)

//     const onIncrease = () => {
//         // setNumber(prevNumber => prevNumber + 1)
//         dispatch({ type: 'INCREMENT'})
//     }

//     const onDecrease = () => {
//         // setNumber(prevNumber => prevNumber - 1)
//         dispatch({ type: 'DECREMENT'})
//     }

//     return(
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     )
// }

// export default Counter