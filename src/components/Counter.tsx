import React, {useState} from "react"
import classes from './Counter.module.css'

const Counter = (props:{initialValue:number}) =>{
    const [display,setDisplay] = useState(props.initialValue)
    const increase = () =>{
        setDisplay(prev => prev + 1)
    }
    const decrease = () =>{
        setDisplay(prev => prev - 1)
    }
    const reset = () => {
        setDisplay(0)
    }
    return (
        <React.Fragment>    
        <div className="my-2 bg-slate-900 text-white max-w-fit d-block mx-auto p-2">
            <h1 className="text-center text-xl">Counter</h1>
            <h1 data-testid='counterDisplay' className="mb-4 text-4xl">{display}</h1>

            <div className="inline-flex rounded-md shadow-sm">
                <button onClick={decrease} className={classes.btn1}>-</button>
                <button onClick={reset} className={classes.btn2}>Reset</button>
                <button onClick={increase} className={classes.btn3}>+</button>
            </div>

        </div>
        </React.Fragment>
    )
}

export default Counter