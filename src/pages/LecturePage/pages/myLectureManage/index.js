import React, { Component } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import callAPI from '../../../../_utils/apiCaller'
import LectureAddModal from '../../components/LectureAddModal/LectureAddModal';
import LectureUpdateModal from '../../components/LectureUpdateModal/LectureUpdateModal';

class MyLectureManage extends Component {
    constructor(props) {
        super(props);

        this.setState = {
            lectures: [],
            isAddModalOpen: false,
            isUpdateModalOpen: false
        }

        this.handleDeleteLecture = this.handleDeleteLecture.bind();
        this.handleAddLecture = this.handleAddLecture.bind();
        this.handleUpdateLecture = this.handleUpdateLecture.bind();
    }

    openAddModal = () => {
        this.setState({ isAddModalOpen: true });

    }
    closeAddModal = () => {
        this.setState({ isAddModalOpen: false });

    }

    openUpdateModal = () => {
        this.setState({ isUpdateModalOpen: true });

    }
    closeUpdateModal = () => {
        this.setState({ isUpdateModalOpen: false });

    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    getMyLectures = async () => {
        callAPI(`lecture/manage`, 'GET', { ...this.getToken() }, null).then(res => {
            if (res.data.result === 'true') {
                this.setState({
                    lectures: res.data.data
                });
            } else {
                alert(res.data.msg);
            }
            console.log(res);
        });
    }

    deleteLecture = async () => {
        const lecture_id = this.props.match.params.lecture_id;
        callAPI(`/lecture/delete/${lecture_id}`, 'POST', { ...this.getToken() }, null).then(res => {
            if (res.data.result === 'true') {
            } else {
                alert(res.data.msg)
            }
            
        });
    }

    handleUpdateLecture() {
        this.openUpdateModal();
    }

    handleAddLecture() {
        this.openAddModal();
    }
    
    handleDeleteLecture() {
        this.deleteLecture();
    }

    componentDidMount() {
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }
        this.getMyLectures();
    }

    render() {
        let history = this.props.history;
        return <div id="myLecture">
            <div id="myLectureRoom">
                {this.state.lectures.map((lecture, i) => {
                    return (
                        <div>
                            <div className="lec_add_button" onClick={this.handleAddLecture}>생성</div>
                            <div className="lec_room_box">
                                <div className="lec_box_name">
                                    <div className="lec_box_subject">{lecture.name}</div>
                                    <div className="lec_box_prof">{lecture.user_name}</div>
                                </div>
                                <div className="lec_del_button" onClick={this.handleDeleteLecture}>삭제</div>
                                <div className="lec_update_button" onClick={this.handleUpdateLecture}>수정</div>
                                <div className="lec_box_button" onClick={() => history.push(`/lectureroom/${lecture.id}/${lecture.id}`)}>입장</div>
                            </div>
                            <LectureAddModal token={this.getToken()} isOpen={this.state.isAddModalOpen} close={this.closeAddModal} />
                            <LectureUpdateModal token={this.getToken()} isOpen={this.state.isUpdateModalOpen} close={this.closeUpdateModal} />
                        </div>
                    );
                })
            }
            </div>
        </div>
    }
}

export default MyLectureManage;