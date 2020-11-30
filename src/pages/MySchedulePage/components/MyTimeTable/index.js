import React, { createRef } from 'react';

import TuiCalendar from 'tui-calendar';

import 'tui-calendar/dist/tui-calendar.css';

import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import callAPI from '../../../../_utils/apiCaller';


class MyTimeTable extends React.Component {
    state = {

        calendar: null
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

    fetchDatas = async () => {
        const res = await callAPI(
            `schedule/thisweek`, // TO-DO : week에 맞게 수정
            'GET', 
            { ...this.getToken() }, 
            null,
        );

        if (res.data.result === 'true') {
            // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
            return res.data.data.map(({
                id,
                calendarId,
                title,
                category,
                dueDateClass,
                start,
                end,
            }) => ({
                id,
                calendarId,
                title,
                category,
                dueDateClass,
                start,
                end,
            }));
        }

        return [];
    }

    componentDidMount() {
        const newCalendar = new TuiCalendar(this.calendarRef.current, { 
            defaultView: 'week',
            taskView: false,
        });

        this.fetchDatas().then(schedules => {console.log(schedules); newCalendar.createSchedules(schedules)});
        this.setState({ calendar: newCalendar }); 
    }

    render() {
        return (
            <div className='MyTimeTable'>
                <div ref={this.calendarRef}></div>
            </div>
        );
    }
};

export default MyTimeTable;