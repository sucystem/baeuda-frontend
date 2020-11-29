import Header from '../../components/header';
import LectureSidebar from "../../components/lecSidebar";
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MyLectureWait from "./pages/myLectureWait";
import MyLecture from "./pages/myLecture";
import MyLectureCompleted from "./pages/myLectureCompleted";
import MyLectureApply from "./pages/myLectureList";

function MyLecturePage() {
    const match = useRouteMatch();
    return (
        <>
            <Header />
            <LectureSidebar />
            <Switch>
                <Route exact path = {`${match.url}`} component = {MyLecture} />
                <Route exact path = {`${match.url}/completed`} component = {MyLectureCompleted} />
                <Route exact path = {`${match.url}/wait`} component = {MyLectureWait} />
                <Route exact path = {`${match.url}/apply`} component = {MyLectureApply} />
            </Switch>
        </>
    );
}

export default MyLecturePage;
