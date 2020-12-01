import React, { Component } from 'react'
import './lec_side_bar.css'
import { useHistory } from 'react-router-dom';

class LectureSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            manage: ""
        }
    }
    
    componentDidMount(){
        let history = this.props.history;
        if(JSON.parse(localStorage.getItem('user')).level == 2){
            this.setState({
                manage: <li onClick={() => history.push("/myLecture/manage")}>강좌 관리</li>
            })
        }
    }

    render() {
        let history = this.props.history;
        return (<div id="lec_side_bar">
            <ul>
                {this.state.manage}
                <li onClick={() => history.push("/myLecture")}>수강중 과목</li>
                <li onClick={() => history.push("/myLecture/completed")}>이수한 과목</li>
                <li onClick={() => history.push("/myLecture/wait")}>승인대기 과목</li>
                <li onClick={() => history.push("/myLecture/apply")}>강의 신청</li>
            </ul>
        </div>);
    }
}

export default LectureSidebar;