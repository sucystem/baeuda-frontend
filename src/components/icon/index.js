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
        const { name } = event.target;
        if (name === 'icon_message') {
            if (this.state.chat === "") {
                this.setState({
                    chat: <Chat />
                });
            } else {
                this.setState({
                    chat: ""
                });
            }
        } else if (name === 'icon_alarm') {
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
                    <div id="icon_alarm" name="icon_alarm" class="icon" onClick={(event => this.handleIcon(event))}>
                        <img src={aicon} name="icon_alarm" alt={"logo"} onClick={(event => this.handleIcon(event))}/>
            </div>
                    <div id="icon_message" name="icon_message" class="icon" onClick={(event) => this.handleIcon(event)}>
                        <img src={micon} name="icon_message" alt={"logo"} onClick={(event) => this.handleIcon(event)}/>
            </div>
                </div>
            </>
        );
    }
}

export default Icon;