import Header from '../../../components/header';
import Lec_side_bar from '../../../components/lec_room_side_bar';
import LecNotice from '../components/lecNotice';
import Footer from '../../../components/footer';

function LecNoticePage() {
    return (
        <>
            <Header />
            <Lec_side_bar/>
            <LecNotice/>
            <Footer />
        </>
    );
}

export default LecNoticePage;
