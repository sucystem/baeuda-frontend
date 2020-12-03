import React, {Component} from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import callAPI from '../../../../_utils/apiCaller';
const moment = require('moment');

class ProjectList extends Component{
    constructor(props) {
        super(props);
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }

        this.state = {
            posts: []
        }

    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    getPosts = async() => {
        callAPI(`project/showList`, 'GET', {...this.getToken()}, null).then(res => {
            if(res.data.result === 'true'){
                this.setState ({
                    posts: res.data.data
                })
                
            } else {
                alert(res.data.msg)
            }
            console.log(res)
        });
    }

    componentDidMount() {
        this.getPosts();
    }

    render(){
        let history = this.props.history;
        return(<div id="ProjectList">
        <div id="projectRoom">
                {
                    this.state.posts.map((item) => {
                        return (
                            <div class="project_room_box">
                                <div class="project_box_name">
                                    {item.name}
                                </div>
                                <div class="project_box_button_enter" onClick={() => history.push("/project/ProjectRoom/" + item.id) }>입장</div>
                            </div>
                        )
                    })
                }
        </div>
    </div>)
    }

                                //<div class="project_box_button_exit"  onClick={() => history.push("/project/ProjectRoomExit/" + item.id) }>탈퇴하기</div>
}

export default ProjectList;