import './App.scss';
import { Route } from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import MyLecturePage from "./pages/MyLecturePage";
import Footer from "./components/footer";
import MyLectureListPage from "./pages/MyLectureListPage";
import MyLectureCompletedPage from "./pages/MyLectureCompletedPage";
import MyLectureWaitPage from "./pages/MyLectureWaitPage";

function App() {
  return (
    <>
      <Route path="/" exact={true} component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/main" component={MainPage}/>
      <Route path="/myLecture" component={MyLecturePage}/>
      <Route path="/myLectureList" component={MyLectureListPage}/>
      <Route path="/myLectureCompleted" component={MyLectureCompletedPage}/>
      <Route path="/myLectureWait" component={MyLectureWaitPage}/>
      <Footer />
    </>
  );
}

export default App;
