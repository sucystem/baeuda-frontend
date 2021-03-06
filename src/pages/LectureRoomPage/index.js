import Header from '../../components/header';
import LectureRoomSidebar from "../../components/lectureRoomSidebar";
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import LectureClass from "./pages/lecClass";
import LectureReference from "./pages/lecReference";
import LectureQnA from "./pages/lecQnA";
import LectureNotice from "./pages/lecNotice";
import LectureAccept from "./pages/lecAccept";
import LectureNewPost from './pages/lecNewPost';
import LectureAssignment from './pages/lecAssignment';
import LectureNewAssignment from './pages/lecNewAssignment';
import LectureSubmit from './pages/lecSubmit';
import LectureAssignmentInfo from './pages/lecAssignmentInfo';
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
                <Route exact path = {`${match.url}/:lecture_id/newpost/:board`} component = {LectureNewPost} />
                <Route exact path = {`${match.url}/:lecture_id/assignment`} component = {LectureAssignment} />
                <Route exact path = {`${match.url}/:lecture_id/newAssignment`} component = {LectureNewAssignment} />
                <Route exact path = {`${match.url}/:lecture_id/lecSubmit/:assignment_id`} component = {LectureSubmit} />
                <Route exact path = {`${match.url}/:lecture_id/assignmentInfo/:assignment_id`} component = {LectureAssignmentInfo} />
            </Switch>
        </>
    );
}
}

export default LectureRoomPage;
