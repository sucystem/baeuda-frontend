import Header from '../../components/header';
import LectureRoomSidebar from "../../components/lectureRoomSidebar";
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import LectureClass from "./pages/lecClass";
import LectureReference from "./pages/lecReference";
import LectureQnA from "./pages/lecQnA";
import LectureNotice from "./pages/lecNotice";
import LectureAccept from "./pages/lecAccept";
import LectureNewPost from './pages/lecNewPost';
import Post from "./pages/post";
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
            <LectureRoomSidebar history={this.props.history} match={this.props.match} />
            <Switch>
                <Route exact path = {`${match.url}/:lecture_id`} param={match.params.lecture_id} component={LectureClass} />
                <Route exact path = {`${match.url}/:lecture_id/notice`} component={LectureNotice} />
                <Route exact path = {`${match.url}/:lecture_id/qna`} component={LectureQnA} />
                <Route exact path = {`${match.url}/:lecture_id/reference`} component={LectureReference} />
                <Route exact path = {`${match.url}/:lecture_id/post/:post_id`} component = {Post} />
                <Route exact path = {`${match.url}/:lecture_id/accept`} component = {LectureAccept} />
                <Route exact path = {`${match.url}/:lecture_id/newpost/:type`} component = {LectureNewPost} />
            </Switch>
        </>
    );
}
}

export default LectureRoomPage;
