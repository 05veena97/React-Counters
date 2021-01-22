import React, { Component } from 'react';
import Counter from './counter';
import '../App.css'
class Counters extends Component {
    render() { 
        console.log(this.props)
        const {onReset, counters, onDelete, onIncrement} = this.props  // destructuring arguments
        // console.log("abcd",abcd);
        return ( <React.Fragment>
            <button onClick={onReset} className="btn-primary btn-sm m-2">Reset</button>
            {counters.map(counter => 
            <Counter 
            key={counter.id} 
            // value={counter.value} 
            // id={counter.id}   value and id can be encapsulated into one variable i.e counter
            counter ={counter}
            onDelete = {onDelete}
            onIncrement = {onIncrement} >

           
                {/* children components using props  */} 
                {/* <h1>Counter #{counter.id}</h1>  */}
                {/* <h2>Hello</h2> */}
            </Counter>
            )}
        </React.Fragment>  );
    }
}
 
export default Counters;