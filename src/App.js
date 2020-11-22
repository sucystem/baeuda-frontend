import './App.scss';
import { Route } from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import MyLecturePage from "./pages/MyLecturePage";

function App() {
  return (
    <>
      <Route path="/" exact={true} component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/main" component={MainPage}/>
      <Route path="/myLecture" component={MyLecturePage}/>
      
    </>
  );
}

export default App;
