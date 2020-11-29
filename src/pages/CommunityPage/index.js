import React from 'react'
import Header from "../../components/header";
import Footer from "../../components/footer";
import CommunitySidebar from "./components/CommunitySidebar";
import {Switch, Route} from "react-router-dom";
import CommunityBoard from "./components/CommunityBoard";
import './style.scss'

function CommunityPage() {
    return (
        <>
            <Header />
            <div className="community-page">
                <CommunitySidebar/>
                <div className="community-board">
                    <CommunityBoard/>
                </div>
            </div>
        </>
    );
}

export default CommunityPage;
