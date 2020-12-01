import React, { Component } from 'react'
import './myLectureList.css'
import callAPI from '../../../../_utils/apiCaller'
import LectureInfoModal from '../../components/LectureInfoModal';

class MyLectureApply extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lectures: [],
            isModalOpen: false
        }
    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    openModal = () => {
        this.setState({ isModalOpen: true });
        console.log('True')
    }
    closeModal = () => {
        this.setState({ isModalOpen: false });
        console.log('True')
    }


    getNotRegisterdLectures = async () => {
        callAPI(`lecture/notregist`, 'GET', { ...this.getToken() }, null).then(res => {
            if (res.data.result === 'true') {
                this.setState({
                    lectures: res.data.data
                })
            } else {
                alert(res.data.msg)
            }
        });
    }

    handleRegist = async (event) => {
        const { id } = event.target;
        const data = {
            lecture_id: id
        }
        callAPI(`lecture/regist`, 'POST', { ...this.getToken() }, data).then(res => {
            alert(res.data.msg);
            window.location.reload();
        });
    }

    componentDidMount() {
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }
        this.getNotRegisterdLectures();
    }

    render() {
        let history = this.props.history;
        return <div id="myLectureList">
            <div class="lectureList">
                <ul>
                    {this.state.lectures.map((lecture, i) => {
                    return(<li>
                        <div class="lectureName">{lecture.name}</div>
                        <div class="lectureProf">{lecture.prof_name}</div>
                        <div class="lectureQuota">{lecture.cur_student}/{lecture.max_student}</div>
                        <div class="lectureEnroll" id={lecture.id} onClick={(event) => this.handleRegist(event)}>신청</div>
                        <div class="lectureInfo" onClick={this.openModal}>정보보기</div>
                        <LectureInfoModal token={this.getToken()} lectureId={lecture.id} isOpen={this.state.isModalOpen} close={this.closeModal} />
                    </li>);
                    })}
                </ul>
            </div>
        </div>
    }
}

export default MyLectureApply;