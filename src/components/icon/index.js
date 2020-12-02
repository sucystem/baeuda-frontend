import React, { Component } from 'react'
import micon from '../../assets/images/message.png'
import aicon from '../../assets/images/alarm.png'
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
                    <div class="icon">
                        <img id="icon_alarm" src={aicon} alt={"logo"} onClick={(event => this.handleIcon(event))}/>
            </div>
                    <div class="icon">
                        <img id="icon_message" src={micon} alt={"logo"} onClick={(event) => this.handleIcon(event)}/>
            </div>
                </div>
            </>
        );
    }
}

export default Icon;