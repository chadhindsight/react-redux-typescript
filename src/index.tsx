import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Interfaces with props
interface AppProps {
    // Optional property
    color?: string
}

class App extends Component<AppProps> {
    state = { counter: 0 }

    onIncrement = (): void => {
        this.setState({ counter: this.state.counter + 1 })
    }

    onDecrement = () => {
        this.setState({ counter: this.state.counter - 1 })
    }
    render() {
        return (
            <div>
                <button onClick={this.onIncrement}>Increment</button>
                <button onClick={this.onDecrement}>Decrement</button>
                {this.state.counter}
            </div>
        );
    }
}

ReactDOM.render(<App color="red" />, document.getElementById('root'));