import { render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

describe(Counter, () =>{
    it('Start the counter with zero',() =>{
        const {getByTestId} = render(<Counter initialValue={0}/>)
        const counterValue = getByTestId('counterDisplay').textContent
        expect(counterValue).toEqual('0')
    })
    it('The counter must be incremented by one when the increment button is clicked',() =>{
        const {getByTestId, getByRole} = render(<Counter initialValue={1}/>)
        const incrementBtn = getByRole('button', {name: '+'})
        fireEvent.click(incrementBtn)
        const counterValue = getByTestId('counterDisplay').textContent
        expect(counterValue).toEqual('2')
    })
    it('The counter must be decremented by one when the decrement button is clicked',() =>{
        const {getByTestId, getByRole} = render(<Counter initialValue={7}/>)
        const decrementBtn = getByRole('button', {name: '-'})
        fireEvent.click(decrementBtn)
        const counterValue = getByTestId('counterDisplay').textContent
        expect(counterValue).toEqual('6')
    })
    it('The counter must be 0 when the reset button is clicked',() =>{
        const {getByTestId, getByRole} = render(<Counter initialValue={32}/>)
        const resetBtn = getByRole('button', {name: 'Reset'})
        fireEvent.click(resetBtn)
        const counterValue = getByTestId('counterDisplay').textContent
        expect(counterValue).toEqual('0')
    })
})

// https://www.youtube.com/watch?v=JBSUgDxICg8