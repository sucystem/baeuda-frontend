import { React, Component } from 'react';
import './style.scss';

class StudyInfoModal extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        
    }

    handleClose() {
        this.props.close();
        console.log(this.props.info);
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

export default StudyInfoModal;