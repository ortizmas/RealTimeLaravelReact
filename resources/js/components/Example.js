import React from 'react';
import ReactDOM from 'react-dom';

import Message from './Message';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component React !!</div>

                        <div className="card-body">I'm an example component react whit realtime socket.io!</div>
                    </div>

                    <div className="card">
                        <Message />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
