import './App.scss';
import React, { Component } from "react";
import { Route } from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import Footer from "./components/footer";
import MyLecturePage from "./pages/LecturePage";
import CommunityPage from "./pages/CommunityPage";
import LectureRoomPage from "./pages/LectureRoomPage";
import MySchedulePage from './pages/MySchedulePage';
import StudyPage from './pages/StudyPage';
import ProjectPage from './pages/ProjectPage';

class App extends Component {
  render(){
    return (
    <>
      <Route exact path="/" exact={true} component={LoginPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/main" component={MainPage}/>
      <Route path="/mylecture" component={MyLecturePage}/>
      <Route path="/lectureroom" component={LectureRoomPage}/>
      <Route path="/community" component={CommunityPage}/>
      <Route path="/myschedule" component={MySchedulePage}/>
      <Route path="/study" component={StudyPage}/>
      <Route path="/project" component={ProjectPage}/>
      <Footer />
    </>
  );
  }
}

export default App;
