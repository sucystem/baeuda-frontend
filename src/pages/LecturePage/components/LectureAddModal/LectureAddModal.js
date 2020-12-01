import { React, Component } from 'react';
import './style.scss';
import callAPI from '../../../../_utils/apiCaller';

class LectureAddModal extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.setState({
            name: "",
            comment: "",
            max_student: ""
        });
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

    componentDidMount() {
    }

    render() {
        return(<>
        {this.props.isOpen ? (
            <div className="modal">
                <div onClick={this.handleClose}>
                    <div className="info-modal">
                        <span className="close" onClick={this.handleClose}>
                        &times;
                        </span>
                        {/* text field */}
                        <form>
                            <input type="text" placeholder="강좌명" value={this.state.name} onChange={this.handleNameChange} />
                            <textarea placeholder="강좌소개" value={this.state.comment} onChange={this.handleCommentChange} />
                            <input type="text" placeholder="최대 인원" value={this.state.max_student} onChange={this.handleMaxStudentChange} />
                        </form>

                    </div>
                </div>
            </div>
        ) : null}
        </>);
    
    }

}

export default LectureAddModal;