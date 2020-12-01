import { React, Component } from 'react';
import './style.scss';
import callAPI from '../../../_utils/apiCaller';

class LectureInfoModal extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.close();
    }

    getInfo = async() => {
        const res = await callAPI(
            `lecture/info/${this.props.lectureId}`, 
            'GET', 
            { ...this.props.token }, 
            null,
        );
        return String(res.data.data.comment);
    }

    componentDidMount() {
        this.getInfo().then(res =>
            this.setState({
            comment: res
        }));
       
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
                            <p>{this.state.comment}</p>
                        </div>
                    </div>
                </div>
            </div>
        ) : null}
        </>);
    
    }

}

export default LectureInfoModal;