import { React, Component } from 'react';
import './style.scss';
import callAPI from '../../../../_utils/apiCaller';

class LectureUpdateModal extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        console.log(props.infoData)
        this.state = {
            name: props.infoData.name,
            comment: props.infoData.comment,
            max_student: props.infoData.max_student
        }
    }
    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleCommentChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    handleMaxStudentChange = (e) => {
        this.setState({
            max_student: e.target.value
        })
    }

    handleClose() {
        this.props.close();
    }

    updateLecture = async() => {
        const res = await callAPI(
            `lecture/update/${this.props.infoData.id}`, 
            'POST', 
            { ...this.props.token }, 
            {
                name: this.state.name,
                comment: this.state.comment,
                max_student: this.state.max_student
            },
        );
        if(res.data.result === 'false') {
            alert(res.data.msg);
            this.handleClose();
        } else {
            this.handleClose();
            window.location.reload();
        }
        console.log(res);
        
    }



    render() {
        return(<>
        {this.props.isOpen ? (
            <div className="modal">
                <div>
                    <div className="info-modal">
                        <div className="close-span">
                            <span className="close" onClick={this.handleClose}>
                            &times;
                            </span>
                        </div>
                    
                        {/* text field */}
                        <div className="container-add">
                            <form className="form-add">
                                <input type="text" placeholder="강좌명" value={this.state.name} onChange={this.handleNameChange} />
                                <textarea placeholder="강좌소개" value={this.state.comment} onChange={this.handleCommentChange} />
                                <input type="text" placeholder="최대 인원" value={this.state.max_student} onChange={this.handleMaxStudentChange} />
                                <input className="btn-submit" type="button" value="수정" onClick={this.updateLecture}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        ) : null}
        </>);
    
    }

}

export default LectureUpdateModal;