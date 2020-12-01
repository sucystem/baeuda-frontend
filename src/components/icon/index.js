import React, { Component } from 'react'
import logo from '../../assets/images/logo.jpg'
import './icon.css'
import Chat from './chat'
import Alarm from './alarm'

class Icon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alert: "",
            chat: ""
        }
    }

    handleIcon = (event) => {
        event.preventDefault();
        const { id } = event.target;
        if (id === 'icon_message') {
            if (this.state.chat === "") {
                this.setState({
                    chat: <Chat />
                });
            } else {
                this.setState({
                    chat: ""
                });
            }
        } else if (id === 'icon_alarm') {
            if (this.state.alarm === "") {
                this.setState({
                    alarm: <Alarm />
                });
            } else {
                this.setState({
                    alarm: ""
                });
            }
        }
    }

    render() {
        let history = this.history;
        return (
            <>
                {this.state.alarm}
                {this.state.chat}
                <div class="icon_menu">
                    <div id="icon_alarm" class="icon" onClick={(event => this.handleIcon(event))}>
                        알람
            </div>
                    <div id="icon_message" class="icon" onClick={(event) => this.handleIcon(event)}>
                        메세지
            </div>
                </div>
            </>
        );
    }
}

export default Icon;