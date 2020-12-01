import React, { Component } from 'react'
import Header from "../../components/header";
import Footer from "../../components/footer";
import CommunitySidebar from "./components/CommunitySidebar";
import {Switch, Route, useRouteMatch, Redirect} from "react-router-dom";
import CommunityBoard from "./components/CommunityBoard";
import CommunityNewPost from "./components/CommunityNewPost";
import CommunityPostDetail from './components/CommunityPostDetail';
import './style.scss';


class CommunityPage extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
            if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }
    }

    render() {
    const match = this.props.match;
    return (
        <>
            <Header history={this.props.history}/>
            <div className="community-page">
                <CommunitySidebar/>
                <div className="community-content">
                    <Switch>
                        <Route exact path = {`${match.url}/:board_id`} component = {CommunityBoard} />
                        <Route exact path = {`${match.url}/:board_id/newpost`} component = {CommunityNewPost} />
                        <Route exact path = {`${match.url}/:board_id/postdetail/:post_id`} component = {CommunityPostDetail} />
                        <Redirect path="*" to={`${match.url}/2`} />
                    </Switch>
                    
                </div>
            </div>
        </>
    );
}
}

export default CommunityPage;
