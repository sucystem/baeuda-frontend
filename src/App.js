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
      <Route path="/lecClass" component={LecClassPage}/>
      <Route path="/lecNotice" component={LecNoticePage}/>
      <Route path="/lecReference" component={LecReferencePage}/>
      <Route path="/lecQnA" component={LecQnAPage}/>
      <Footer />
    </>
  );
}

export default App;
