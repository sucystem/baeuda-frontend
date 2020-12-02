import React, { Component } from 'react'
import Header from "../../components/header";
import Footer from "../../components/footer";
import StudySidebar from "./components/StudySidebar";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import StudyMain from "./components/StudyMain";
import StudyList from "./components/StudyList";
import StudyRecruit from "./components/StudyRecruit";
import StudySchedule from './components/StudySchedule';
import MakeStudy from './components/MakeStudy';
import StudyRoom from './components/StudyRoom';

import './style.scss';


class StudyPage extends Component{
    constructor(props){
        super(props);
    }
    render() {
    const match = this.props.match;
    return (
        <>
            <Header history={this.props.history}/>
            <div className="content-body">
                <StudySidebar/>
                <div className="study-content">
                    <Switch>
                        <Route exact path = {`${match.url}`} component = {StudyMain} />
                        <Route exact path = {`${match.url}/StudyList`} component = {StudyList} />
                        <Route exact path = {`${match.url}/StudySchedule`} component = {StudySchedule} />
                        <Route exact path = {`${match.url}/StudyRecruit`} component = {StudyRecruit} />
                        <Route exact path = {`${match.url}/MakeStudy`} component = {MakeStudy} />
                        <Route exact path = {`${match.url}/StudyRoom/:study_id`} component = {StudyRoom} />
                    </Switch>                    
                </div>
            </div>
        </>
    );
}
}

export default StudyPage;
