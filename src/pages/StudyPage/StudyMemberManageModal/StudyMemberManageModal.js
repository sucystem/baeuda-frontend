import { React, Component } from 'react';
import './style.scss';
import callAPI from '../../../_utils/apiCaller';

class StudyMemberManageModal extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            students: []
        }
        
    }

    handleClose() {
        this.props.close();
    }

    getStudentsList = async () => {
        await callAPI(`study/member/${this.props.study_id}`, 'GET', { ...this.props.token }, null).then(res => {
            console.log(res)
            if (res.data.result === 'true') {
                this.setState({
                    students: res.data.data
                });
            } else {
                alert(res.data.msg);
            }
            
        });
    }

    componentDidMount() {
        this.getStudentsList();

    }

    render() {
        return(<>
        {this.props.isOpen ? (
            <div className="modal">
                <div className="manage-modal">
                    <span className="close" onClick={this.handleClose}>
                        &times;
                    </span>
                        <div id="content">
                            {this.state.students.map((student, index) => {
                                return(
                                    <div className="div-student">
                                        <div className="div-univ">{student.univid}</div>
                                        <div className="div-student-id">{student.student_id}</div>

                                            <div className="div-user-name">{student.user_name}</div>
                                            <div className="container-btn-group">
                                            {student.state == 0 ? <div className="btn-approve">승인</div>
                                            : null}
                                            {student.state == 0 ? <div className="btn-reject">거절</div>
                                            : null}
                                            {student.state == 1 ? <div className="btn-ban">추방</div>
                                            : null}
                                            {
                                                student.state == 2 ? <div className="div-leader">팀장</div>
                                            : null}
                                            </div>
                                                                              
                                    </div>
                                )
                            })
                            }
                    </div>
                </div>
            </div>
        ) : null}
        </>);
    
    }

}

export default StudyMemberManageModal;