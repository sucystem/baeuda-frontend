import './App.scss';
import { Route } from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";

import Footer from "./components/footer";

import MyLecturePage from "./pages/MyLecture/MyLecturePage";
import MyLectureListPage from "./pages/MyLecture/MyLectureListPage";
import MyLectureCompletedPage from "./pages/MyLecture/MyLectureCompletedPage";
import MyLectureWaitPage from "./pages/MyLecture/MyLectureWaitPage";

import LecClassPage from "./pages/LectureRoom/LecClassPage";
import LecNoticePage from "./pages/LectureRoom/LecNoticePage";
import LecReferencePage from "./pages/LectureRoom/LecReferencePage";
import LecQnAPage from "./pages/LectureRoom/LecQnAPage";

import CommunityPage from "./pages/CommunityPage";

function App() {
  return (
    <>
      <Route exact path="/" exact={true} component={LoginPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/main" component={MainPage}/>
      <Route exact path="/myLecture" component={MyLecturePage}/>
      <Route exact path="/myLectureList" component={MyLectureListPage}/>
      <Route exact path="/myLectureCompleted" component={MyLectureCompletedPage}/>
      <Route exact path="/myLectureWait" component={MyLectureWaitPage}/>
      <Route exact path="/lecClass" component={LecClassPage}/>
      <Route exact path="/lecNotice" component={LecNoticePage}/>
      <Route exact path="/lecReference" component={LecReferencePage}/>
      <Route exact path="/lecQnA" component={LecQnAPage}/>
      <Route exact path="/community" component={CommunityPage}/>
      <Footer />
    </>
  );
}

export default App;
