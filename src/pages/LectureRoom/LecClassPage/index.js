import Header from '../../../components/header';
import Lec_side_bar from '../../../components/lec_room_side_bar';
import LecClass from '../components/lecClass';
import Footer from '../../../components/footer';

function LecClassPage() {
    return (
        <>
            <Header />
            <Lec_side_bar/>
            <LecClass/>
            <Footer />
        </>
    );
}

export default LecClassPage;
