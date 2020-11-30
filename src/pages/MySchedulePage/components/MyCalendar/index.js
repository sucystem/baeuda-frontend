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
        datas: [],
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
        console.log(`schedule/${this.state.month}`);
        const res = await callAPI(
            `schedule/${this.state.month}`, 
            'GET', 
            { ...this.getToken() }, 
            null,
        );
        
        if (res.data.result === 'true') {
            console.log(res.data);
            this.setState({ datas: res.data.data });
            return;
        }

        alert(res.data.msg);
    };

    componentDidMount() {
        const newCalendar = new TuiCalendar(this.calendarRef.current, { 
            defaultView: 'month',
            taskView: true,
        });

        // TODO 여기서 서버 데이터 받아오기
        this.getDatas();

        newCalendar.createSchedules([ // test용
            {
                id: '1',
                calendarId: '1',
                title: '이준환 입소',
                category: 'time',
                dueDateClass: '',
                start: '2020-12-01T22:30:00+09:00',
                end: '2020-12-03T02:30:00+09:00'
            },
            {
                id: '2',
                calendarId: '2',
                title: '이준환 입소?!',
                category: 'time',
                dueDateClass: '',
                start: '2020-12-05T22:30:00+09:00',
                end: '2020-12-07T02:30:00+09:00'
            }
        ]);

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