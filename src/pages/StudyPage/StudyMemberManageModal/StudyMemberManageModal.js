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
            // if (res.data.result === 'true') {
            //     this.setState({
            //         students: res.data.data
            //     });
            // } else {
            //     alert(res.data.msg);
            // }
            
        });
    }

    componentDidMount() {
        this.getStudentsList();

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
                        <div id="content">
                            <p>{this.props.info}</p>
                        </div>
                    </div>
                </div>
            </div>
        ) : null}
        </>);
    
    }

}

export default StudyMemberManageModal;