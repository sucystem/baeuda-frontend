import React from 'react'
import Header from "../../components/header";
import Footer from "../../components/footer";
import CommunitySidebar from "./components/CommunitySidebar";
import {Switch, Route} from "react-router-dom";
import CommunityBoard from "./components/CommunityBoard";

function CommunityPage() {
    return (
        <>
            <Header />
            <div>
                <CommunitySidebar/>
                <CommunityBoard/>
            </div>
            <Footer />
        </>
    );
}

export default CommunityPage;
