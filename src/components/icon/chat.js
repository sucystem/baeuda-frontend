import React, { Component } from 'react'
import './icon.css'
import logo from '../../assets/images/logo.jpg'
import callAPI from '../../_utils/apiCaller';

class Chat extends Component{
    constructor(props){
        super(props);

        this.state = {
            chatId: 0,
            chatRoom: [],
            chat: [],
            text: "",
            textbox: "",
        }
    }
    
    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    getChatRoom = async () => {
        const {id} = JSON.parse(localStorage.getItem('user'));
        const res = await callAPI(
            `chat`,
            'GET',
            {...this.getToken()},
            null
        );

        if(res.data.result === 'true'){
            this.setState({
                chatRoom: res.data.data
            })
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        var value = document.getElementById("text").value;
        document.getElementById("text").value = "";

        const data = {
            chatId: this.state.chatId,
            chat: value
        }
        const res = await callAPI(
            'chat',
            'POST',
            {...this.getToken()},
            data
        )
        
        if(res.data.result === 'true') {
            this.setState({
                chat: res.data.data
            })
        }
    }

    handleChat = async (event) => {
        event.preventDefault();
        const { id } = event.target;
        
        const res = await callAPI(
            `chat/chatting/${id}`,
            'GET',
            {...this.getToken()},
        );

        if(res.data.result === 'true') {
            this.setState({
                chatId: id,
                chatRoom: [],
                chat: res.data.data
            })
        }

        this.setState({
            textbox: <form method="post" onSubmit={this.handleSubmit}>
                    <input type="text" id="text" name="text"></input>
                  </form>
        })
    }

    componentDidMount() {
        this.getChatRoom();
    }

    render() {
        return (
        <div id='chat' class='popup'>
            <ul>
                {this.state.chatRoom.map((chat, i) => {
                    return(
                        <li id={chat.id} onClick={(event) => this.handleChat(event)}>{chat.receiver}</li>
                    )
                })}
                {this.state.chat.map((chat) => {
                    return(
                        <li>{chat.user_name}: {chat.chat}</li>
                    )
                })}
            </ul>
            {this.state.textbox}
        </div>
        );
    }
}

export default Chat;