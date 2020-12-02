import Header from '../../components/header';
import LectureSidebar from "../../components/lecSidebar";
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MyLectureWait from "./pages/myLectureWait";
import MyLecture from "./pages/myLecture";
import MyLectureCompleted from "./pages/myLectureCompleted";
import MyLectureApply from "./pages/myLectureList";
import MyLectureManage from "./pages/myLectureManage";
import React, { Component } from 'react';

class MyLecturePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            main: MyLecture
        }
    }

    componentDidMount(){
        if(JSON.parse(localStorage.getItem('user')).level==2){
            this.setState({
                main: MyLectureManage
            })
        }
    }

render() {
    const match = this.props.match;
    return (
        <>
            <Header history={this.props.history} />
            <LectureSidebar history={this.props.history} />
            <Switch>
                <Route exact path = {`${match.url}`} component = {this.state.main} />
                <Route exact path = {`${match.url}/completed`} component = {MyLectureCompleted} />
                <Route exact path = {`${match.url}/wait`} component = {MyLectureWait} />
                <Route exact path = {`${match.url}/apply`} component = {MyLectureApply} />
                <Route exact path = {`${match.url}/manage`} component = {MyLectureManage} />
            </Switch>
        </>
    );
}
}

export default MyLecturePage;
