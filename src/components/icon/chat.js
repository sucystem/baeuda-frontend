import React, { Component } from 'react'
import './icon.css'
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
            visibility : true,
            interval: "",
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

    getChat = async (id) => {
        if(!this.state.visibility){
            clearInterval(this.state.interval);
        }

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
            textbox:<form method="post" onSubmit={this.handleSubmit}>
                        <input class="chat-textbox" type="text" id="text" name="text"></input>
                    </form>
        })
    }

    handleChat = async (event) => {
        event.preventDefault();
        const { id } = event.target;

        this.state.interval = setInterval(this.getChat, 1000, id);
    }

    componentDidMount() {
        this.getChatRoom();
    }

    handleIcon = async(event) => {
        event.preventDefault();
        this.setState({
            visibility : false
        });
    }

    

    render() {
        if(this.state.visibility){
        return (            
        <div id='chat' class='popup'>
            <div class="popup_menu chat_popup">
            <div class="popup_title">채팅 리스트</div>            
            <div class="popup_exit" onClick={(event) => this.handleIcon(event)}>×</div>
            </div>
            <ul>
                {this.state.chatRoom.map((chat, i) => {
                    return(
                        <li id={chat.id} onClick={(event) => this.handleChat(event)}>{chat.name}<br/><br/></li>
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
    } else{
        return null;
    }
}

}

export default Chat;