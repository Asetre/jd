import React from 'react'
import io from "socket.io-client";

export default class Chat extends React.Component {
    constructor(props) {
        super()

        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateMessages = this.updateMessages.bind(this)

        this.state = {
            messages: []
        }

        this.socket = io('http://localhost:3000')
    }

    componentDidMount() {
        this.socket.on('updateMessages', msg => {
            this.setState({messages: [...this.state.messages, msg]})
        })
    }

    render() {
        return(
            <div>
                <ul>
                    {this.state.messages.map(msg => {
                        return(
                            <li>{msg}</li>
                        )
                    })}
                </ul>
                <form action="#" onSubmit={this.handleSubmit}>
                    <input name="msg" type="text"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault()
        const msg = e.target.msg.value
        this.socket.emit('send_msg', msg)
    }
}
