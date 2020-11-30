import React, { createRef } from 'react';

import TuiCalendar from 'tui-calendar';

import 'tui-calendar/dist/tui-calendar.css';

import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import callAPI from '../../../../_utils/apiCaller';
const moment = require('moment');

class MyCalendar extends React.Component {
    state = {
        month: moment().format('MM'),
        calendar: null, 
        datas: []
    };

    constructor(props) {
        super(props);
        // https://ko.reactjs.org/docs/refs-and-the-dom.html
        this.calendarRef = createRef(); 
    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    getDatas = async () => {
        const res = await callAPI(
            `schedule/${this.state.month}`, 
            'GET', 
            { ...this.getToken() }, 
            null,
        );
        
        if (res.data.result === 'true') {
            this.setState({ datas: res.data.data });
            this.render();
            return;
        }

        alert(res.data.msg);
    };

    async componentDidMount() {
        await this.getDatas();
        const newCalendar = new TuiCalendar(this.calendarRef.current, { 
            defaultView: 'month',
            taskView: true,
        });
        newCalendar.createSchedules(this.state.datas);
        this.setState({ calendar: newCalendar });
    }

    render() {
        return (
            <div className='MyCalendar'>
                <div ref={this.calendarRef}></div>
            </div>
        );
    }
};

export default MyCalendar;