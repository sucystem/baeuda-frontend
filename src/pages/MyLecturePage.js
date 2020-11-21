import Header from '../components/header';
import Lec_side_bar from '../components/lec_side_bar';
import MyLecture from '../components/myLecture';
import Footer from '../components/footer';

function MainPage() {
    return (
        <>
            <Header />
            <Lec_side_bar/>
            <MyLecture/>
            <Footer />
        </>
    );
}

export default MainPage;
