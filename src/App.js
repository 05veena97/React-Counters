import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters'; 
import Navbar from './components/navbar'

class App extends Component {
  // state and it's function from counters component to Parent component i.e APP
    state = { 
      counters: [
          { id: 1, value: 0 },
          { id: 2, value: 6 },
          { id: 3, value: 0 },
          { id: 4, value: 12 }
      ]
  };

  // Phase 1 Mounting phase
  constructor(props) { 
    super(props);
    console.log("APP-constructor",this.props);
  }

  componentDidMount() {
    // AJAX calls
    console.log("APP-Mounted");
  }

  handleIncrement = (counter) => {

      console.log("incremented value", counter);
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value++;
      this.setState({ counters })
  }

  handleDelete = (counterId) => {
      console.log("Event is handled", counterId);
      const counters =this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters})
  }

  handleReset = () => {
      const counters = this.state.counters.map(c =>{
          c.value =0;
          return c;
      })
      this.setState({counters});
  }

  render() { 
    console.log("APP-Rendered");
    return (
      <React.Fragment >
      <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}  />
      <main className="container">
        <Counters 
        counters = {this.state.counters}
        onReset = {this.handleReset}
        onDelete = {this.handleDelete}
        onIncrement = {this.handleIncrement}
        />
      </main>
    </React.Fragment>
      );
  }
}
 
export default App;

