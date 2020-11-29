import React from 'react'
import Header from "../../components/header";
import Footer from "../../components/footer";
import CommunitySidebar from "./components/CommunitySidebar";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import CommunityBoard from "./components/CommunityBoard";
import CommunityNewPost from "./components/CommunityNewPost";
import CommunityPostDetail from './components/CommunityPostDetail';
import './style.scss';


function CommunityPage() {
    const match = useRouteMatch();
    return (
        <>
            <Header />
            <div className="community-page">
                <CommunitySidebar/>
                <div className="community-content">
                    <Switch>
                        <Route exact path = {`${match.url}`} component = {CommunityBoard} />
                        <Route exact path = {`${match.url}/newpost`} component = {CommunityNewPost} />
                        <Route exact path = {`${match.url}/postdetail`} component = {CommunityPostDetail} />
                    </Switch>
                    
                </div>
            </div>
        </>
    );
}

export default CommunityPage;
