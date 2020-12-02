import React, { Component } from 'react'
import './lec_side_bar.css'
import { useHistory } from 'react-router-dom';

class LectureSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            manage: "",
            user_level : 1
        }
    }
    
    componentDidMount(){
        let history = this.props.history;
        this.state.user_level = JSON.parse(localStorage.getItem('user')).level;
    }

    render() {
        let history = this.props.history;
        if(this.state.user_level == 2){
            return (<div id="lec_side_bar">
            <ul>
                <li onClick={() => history.push("/myLecture/manage")}>강좌 관리</li>
            </ul>
        </div>)
        }else{
            return (<div id="lec_side_bar">
            <ul>
                <li onClick={() => history.push("/myLecture")}>수강중 과목</li>
                <li onClick={() => history.push("/myLecture/completed")}>이수한 과목</li>
                <li onClick={() => history.push("/myLecture/wait")}>승인대기 과목</li>
                <li onClick={() => history.push("/myLecture/apply")}>강의 신청</li>
            </ul>
        </div>);
        }        
    }
}

export default LectureSidebar;