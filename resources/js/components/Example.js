import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Message from './Message';

class Example extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component React !!</div>
    
                            <div className="card-body">I'm an example component react whit realtime socket.io!</div>
                        </div>
    
                        <div className="card mt-3">
                            <div className="card-body">
                                <Message user_id={this.props.id}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }  
}

export default Example;

if (document.getElementById('example')) {
    const component = document.getElementById('example');
    const props = Object.assign({}, component.dataset);

    ReactDOM.render(<Example {...props} />, component);
}
