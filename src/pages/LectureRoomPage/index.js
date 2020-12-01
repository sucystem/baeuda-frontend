import Header from '../../components/header';
import LectureRoomSidebar from "../../components/lectureRoomSidebar";
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import LectureClass from "./pages/lecClass";
import LectureReference from "./pages/lecReference";
import LectureQnA from "./pages/lecQnA";
import LectureNotice from "./pages/lecNotice";
import React, { Component } from 'react';


class LectureRoomPage extends Component {
    constructor(props){
        super(props)
    }
render() {
    const match = this.props.match;
    return (
        <>
            <Header history={this.props.history} />
            <LectureRoomSidebar />
            <Switch>
                <Route exact path = {`${match.url}/:lecture_id`} component={LectureClass} />
                <Route exact path = {`${match.url}/notice`} component={LectureNotice} />
                <Route exact path = {`${match.url}/qna`} component={LectureQnA} />
                <Route exact path = {`${match.url}/reference`} component={LectureReference} />
            </Switch>
        </>
    );
}
}

export default LectureRoomPage;
