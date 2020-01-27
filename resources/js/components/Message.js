import React, { Component } from 'react';

class Message extends Component {

    constructor (props) {
        super(props);
    }

    componentDidMount() {
        Echo.channel('message-received')
            .listen('SendMessage', (e) => {
                console.log(e);
            });
    }

    render() {
        return (
            <div>
                <h3>React component Include </h3>

                <p>
                    
                </p>
            </div>
        )
    }
}

export default Message;