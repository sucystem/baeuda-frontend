import Header from '../../components/header';
import LectureSidebar from "../../components/lecSidebar";
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MyLectureWait from "./pages/myLectureWait";
import MyLecture from "./pages/myLecture";
import MyLectureCompleted from "./pages/myLectureCompleted";
import MyLectureApply from "./pages/myLectureList";
import React, { Component } from 'react';

class MyLecturePage extends Component{
    constructor(props){
        super(props);
    }
render() {
    const match = this.props.match;
    return (
        <>
            <Header history={this.props.history} />
            <LectureSidebar />
            <Switch>
                <Route exact path = {`${match.url}`} component = {MyLecture} />
                <Route exact path = {`${match.url}/completed`} component = {MyLectureCompleted} />
                <Route exact path = {`${match.url}/wait`} component = {MyLectureWait} />
                <Route exact path = {`${match.url}/apply`} component = {MyLectureApply} />
            </Switch>
        </>
    );
}
}

export default MyLecturePage;
