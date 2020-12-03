import React, { Component } from 'react'
import Header from "../../components/header";
import Footer from "../../components/footer";
import ProjectSidebar from "./components/ProjectSidebar";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import ProjectMain from "./components/ProjectMain";
import ProjectList from "./components/ProjectList";
import ProjectRecruit from "./components/ProjectRecruit";
import ProjectSchedule from './components/ProjectSchedule';
import MakeProject from './components/MakeProject';
import ProjectRoom from './components/ProjectRoom';

import './style.scss';


class ProjectPage extends Component{
    constructor(props){
        super(props);
    }
    render() {
    const match = this.props.match;
    return (
        <>
            <Header history={this.props.history}/>
            <div className="content-body">
                <ProjectSidebar/>
                <div className="project-content">
                    <Switch>
                        <Route exact path = {`${match.url}`} component = {ProjectMain} />
                        <Route exact path = {`${match.url}/ProjectList`} component = {ProjectList} />
                        <Route exact path = {`${match.url}/ProjectSchedule`} component = {ProjectSchedule} />
                        <Route exact path = {`${match.url}/ProjectRecruit`} component = {ProjectRecruit} />
                        <Route exact path = {`${match.url}/MakeProject`} component = {MakeProject} />
                        <Route exact path = {`${match.url}/ProjectRoom/:project_id`} component = {ProjectRoom} />
                    </Switch>                    
                </div>
            </div>
        </>
    );
}
}

export default ProjectPage;
