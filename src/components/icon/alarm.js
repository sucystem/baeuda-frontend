import React, { Component } from 'react'
import './icon.css'
import callAPI from '../../_utils/apiCaller';

class Alarm extends Component{
    constructor(props){
        super(props);

        this.state = {
            alarm : []
        }

    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    componentDidMount() {
        this.getAlarm();
    }

    getAlarm = async () => {
        const {id} = JSON.parse(localStorage.getItem('user'));
        const res = await callAPI(
            'alarm',
            'GET',
            { ...this.getToken() },
            null,
        );

        if(res.data.result === 'true'){
            this.setState({
                alarm: res.data.data
            })
        }
    }

    handleAlarm = async (event) =>{
        event.preventDefault();
        const address = event.target;
        this.props.history.push(address)
    }

    handleAlarmDelete = async (event) => {
        event.preventDefault();
        const alarm_id = event.target;
        const res = await callAPI(
            `alarm/delete`, 
            'POST', 
            { ...this.props.token }, 
            {
                alarm_id : alarm_id
            },
        );
        if(res.data.result === 'true') {
           alert(res.data.msg);
        } else {

        }
    }

    render() {
        return (
        <div id='alarm' class='popup'>
            <div class="popup_menu">
            <div class="popup_title">알람 리스트</div>            
            <div class="popup_exit">×</div>
            </div>
            <ul>
                {
                    this.state.alarm.map((alarm) => {
                        return (
                            <li>
                                <div>{alarm.name}</div>
                                <div name={alarm.address} onClick={(event) => this.handleAlarm(event)}>입장</div>
                                <div name={alarm.id} onClick={(event) => this.handleAlarmDelete(event)}>×</div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        );
    }
}

export default Alarm;