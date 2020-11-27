import Header from '../../../components/header';
import Lec_side_bar from '../../../components/lec_side_bar';
import MyLectureList from '../components/myLectureList';
import Footer from '../../../components/footer';

function MyLectureListPage() {
    return (
        <>
            <Header />
            <Lec_side_bar/>
            <MyLectureList/>
            <Footer />
        </>
    );
}

export default MyLectureListPage;
