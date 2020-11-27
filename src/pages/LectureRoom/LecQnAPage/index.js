import Header from '../../../components/header';
import Lec_side_bar from '../../../components/lec_room_side_bar';
import LecQnA from '../components/lecQnA';
import Footer from '../../../components/footer';

function LecQnAPage() {
    return (
        <>
            <Header />
            <Lec_side_bar/>
            <LecQnA/>
            <Footer />
        </>
    );
}

export default LecQnAPage;
