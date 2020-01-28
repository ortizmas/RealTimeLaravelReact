import React, { Component } from 'react';

class Message extends Component {

    constructor (props) {
        super(props);
        this.state = {
            messages: [],
            user_id: ''
        }
        
    }

    componentDidMount() {
        // Public
        /*Echo.channel('message-received')
            .listen('SendMessage', (event) => {
                this.setState(
                    { messages: [...this.state.messages, event], test: '' }
                )
            });*/
        
        // Private
        Echo.private('message.received.' + this.props.user_id )
        .listen('SendMessage', (event) => {
            this.setState(
                { messages: [...this.state.messages, event], test: '' }
            )
        });
    }

    render() {
        // const messages = Object.keys(this.state.messages).map((key) => {
        //     return (
        //         <li key={key}>{this.state.messages[key].title}</li>
        //     )
        // })
        const messages =this.state.messages.map(message => {
            return (
                <li key={message.id}>{message.title}</li>
            )
        })
        return (
            <div>
    <h3>React component Include {this.props.user_id}</h3>
                <ul>
                    {messages}
                </ul>
            </div>
        )
    }
}

export default Message;