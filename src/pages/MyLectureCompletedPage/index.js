import Header from '../../components/header';
import Lec_side_bar from '../../components/lec_side_bar';
import MyLectureCompleted from './components/myLectureCompleted';
import Footer from '../../components/footer';

function MyLectureCompletedPage() {
    return (
        <>
            <Header />
            <Lec_side_bar/>
            <MyLectureCompleted/>
            <Footer />
        </>
    );
}

export default MyLectureCompletedPage;
