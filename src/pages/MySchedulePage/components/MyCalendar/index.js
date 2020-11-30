import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import TuiCalendar from 'tui-calendar';

import 'tui-calendar/dist/tui-calendar.css';

import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

const data = [
    
];

function MyCalendar() {
    const history = useHistory();

    const calendarRef = useRef(null);

    const [calendar, setCalendar] = useState(null);

    useEffect(() => {
        const newCalendar = new TuiCalendar(calendarRef.current, {
            defaultView: 'month',
            taskView: true,
        });

        newCalendar.createSchedules([
            {
                id: '1',
                calendarId: '1',
                title: '이준환 입소',
                category: 'time',
                dueDateClass: '',
                start: '2020-12-01T22:30:00+09:00',
                end: '2020-12-01T02:30:00+09:00'
            },
        ]);

        setCalendar(newCalendar);
    }, []);

    return (
        <div>
            <div ref={calendarRef}></div>
        </div>
    );
}

export default MyCalendar;