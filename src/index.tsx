import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Interfaces with props
interface AppProps {
    // Optional property
    color?: string
}

class App extends Component<AppProps> {
    render() {
        return (
            <div>
                {this.props.color}
            </div>
        );
    }
}

ReactDOM.render(<App color="red" />, document.getElementById('root'));