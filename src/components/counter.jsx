import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     // count: 0,
    //     count: this.props.counter.value,
    //     tags: ["tag1"]
    //     // imgatr: "https://picsum.photos/200"
    // };
    // styles = {
    //     fontSize: 50,
    //     fontWeight: 'bold'
    // };

    
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // To handle an event(bind event handlers) either below function type can be used or constructor
    // handleIncrement = () => {
    //     // if (data === 'inc') {
    //     //     this.setState({ count: this.state.count + 1 })
    //     // }
    //     // else if (data === 'dec') {

    //     // this.state.count !== 0 ? this.setState({ count: this.state.count - 1 }) : this.setState({ count: 0 })
            
    //     // }
       
    //     this.setState({ count: this.state.count + 1 })
    //      console.log(this.state.count);
    // }

    // LifeCycle Hook Phase 2 updating phase
    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps",prevProps);
        console.log("prevState",prevState);
        // based on the updation of data we can make a ajax call to fetch data from server
    }

    // lifecycle hook phase 3 once the component removed func invokes
    componentWillUnmount() {
        console.log("unmounted")
    }

    // handleDecrement = () => {
    //     if (this.state.count !== 0) {
    //         this.setState({ count: this.state.count - 1 })
    //     }
    
    //      console.log(this.state.count);
    // }
    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags</p> 
    //     return <ul>{this.state.tags.map(tag => <li key= { tag }> { tag }</li>)}</ul>
    // }


    render() { 
        console.log('props', this.props); // special property that every react component contains.
        return (
            <div>
                {/* {this.props.children} */}
                <h2>Title #{this.props.counter.id}</h2>
                {/* <img src={ this.state.imgatr } alt="" /> */}
                {/* <span style={ {fontSize:30} } className="badge badge-primary m-2">{ this.formatCount() }</span> */}
                {/* <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>  */}
                <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
                <button onClick= {()=>this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm">Increment</button> 
                <button onClick={() => this.props.onDelete(this.props.counter.id) } className = "btn btn-danger btn-sm m-2">Delete</button>
               
                {/* <button onClick= {()=>this.handleDecrement() } className="btn btn-secondary btn-sm">Decrement</button>  */}
                {/* <ul>{this.state.tags.map(tag => <li key= { tag }> { tag }</li>)}</ul> */}
                {/* {this.state.tags.length === 0 && 'Please create a new tag'} */}
                {/* {this.renderTags()} */}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-"
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;