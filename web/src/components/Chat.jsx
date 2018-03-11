import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import '../css/Chat.css'
import getWeb3 from '../utils/getWeb3'
import socketIOClient from "socket.io-client"
import FaPaperPlane from 'react-icons/lib/fa/paper-plane';


const Message = ({chat, user}) => (
    <li className={`chat ${user === chat.userId ? "right" : "left"}`}>
        {chat.content}
    </li>
);

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [],
            web3: null,
            endpoint: "http://localhost:4001"
        };

        this.socket = socketIOClient(this.state.endpoint)

        this.submitMessage = this.submitMessage.bind(this);

        getWeb3
        .then(results => {
          this.setState({
            web3: results.web3
          })

          // Instantiate whisper connection once web3 provided.
          // this.startWhisper()
        })
        .catch(() => {
          console.log('Error finding web3.')
        })

    }

    componentDidMount() {
        this.scrollToBottom();
        
        this.socket.on('message received', message => {
            // debugger
            this.setState({
                chats: this.state.chats.concat([{
                    userId: message.userId,
                    content: <p>{message.msgValue}</p>,
                }])
            }, () => {
                ReactDOM.findDOMNode(this.refs.msg).value = "";
            })
        })
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {

        e.preventDefault()

        const msg = ReactDOM.findDOMNode(this.refs.msg)
        const msgValue = msg.value

        this.socket.emit('message sent', {
            msgValue,
            userId: this.props.match.params.id
        })
    }

    /*startWhisper() {
        console.log(this.state.web3)
        this.setState({shh: this.state.web3.shh})
        this.state.shh.version((err, version) => {
            if (err) return console.error(err)
            // console.log(version)
        })
    }*/

    render() {
        const {
            match
        } = this.props
        const { chats } = this.state;


        return (
            <Wrapper>
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat) => 
                            <Message chat={chat} user={match.params.id} />
                        )
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" />
                    <button type="submit">
                        <FaPaperPlane/>
                    </button>
                </form>
            </Wrapper>
        );
    }

}

export default Chat

const Wrapper = styled.div`
    background: linear-gradient(#3f5d83, #323e4f);
    margin: 0;
    padding: 0;
`