import Header from '../../components/header';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import React, { Component } from 'react';
import MyScheduleSidebar from './components/MyScheduleSidebar';
import './style.scss';
import MyCalendar from './components/MyCalendar';
import MyTimeTable from './components/MyTimeTable';


class MySchedulePage extends Component{
    constructor(props){
        super(props);
    }
render() {
    const match = this.props.match;
    return (
        <>
            <Header history={this.props.history}/>
            <div className="my-schedule-page">
                <MyScheduleSidebar/>
                <div className="my-schedule-content">
                    <Switch>
                        <Route exact path = {`${match.url}`} component = {MyCalendar} />
                        <Route exact path = {`${match.url}/mytimetable`} component = {MyTimeTable} />
                    </Switch>
                
                </div>
            </div>
        </>
    );
}
}

export default MySchedulePage;
