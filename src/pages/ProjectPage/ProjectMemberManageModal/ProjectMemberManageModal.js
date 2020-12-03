import { React, Component } from 'react';
import './style.scss';
import callAPI from '../../../_utils/apiCaller';

class ProjectMemberManageModal extends Component {
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
        await callAPI(`project/member/${this.props.project_id}`, 'GET', { ...this.props.token }, null).then(res => {
            if (res.data.result === 'true') {
                this.setState({
                    students: res.data.data
                });
            } else {
                alert(res.data.msg);
            }
            
        });
    }

    acceptStudent = (student_id) => () => {
        callAPI(`project/accept/${this.props.project_id}`, 'POST', { ...this.props.token }, {student_id : student_id}).then(res => {
            console.log(res)
            if (res.data.result === 'true') {
                window.location.reload();
            } else {
                alert(res.data.msg);
            }
        });

    }

    outStudent = (student_id) => () => {
        callAPI(`project/out/${this.props.project_id}`, 'POST', { ...this.props.token }, {student_id : student_id}).then(res => {
            console.log(res)
            if (res.data.result === 'true') {
                window.location.reload();
            } else {
                alert(res.data.msg);
            }
        });

    }

    rejectStudent = (student_id) => () => {
        callAPI(`project/cancel/${this.props.project_id}`, 'POST', { ...this.props.token }, {student_id : student_id}).then(res => {
            if (res.data.result === 'true') {
                window.location.reload();
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
                                            {student.state == 0 ? <div className="btn-approve" onClick={this.acceptStudent(student.id)}>승인</div>
                                            : null}
                                            {student.state == 0 ? <div className="btn-reject" onClick={this.rejectStudent(student.id)}>거절</div>
                                            : null}
                                            {student.state == 1 ? <div className="btn-ban" onClick={this.outStudent(student.id)}>추방</div>
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

export default ProjectMemberManageModal;