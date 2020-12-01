import React, { Component } from 'react';
import './style.scss';
import callAPI from '../../../../_utils/apiCaller'

class CommunitySidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boards: []
        }
    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }
    
    getBoard = async () => {
        callAPI(`community`, 'GET', { ...this.getToken() }, null).then(res => {
            if (res.data.result === 'true') {
                this.setState({
                    boards: res.data.data
                })
            } else {
                alert(res.data.msg)
            }
        });
    }

    componentDidMount() {
        if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }
        this.getBoard();
    }

    render() {
        let history = this.props.history;
        return <div id="community_side_bar">
            <ul>
                {this.state.boards.map((board) => { return (
                    <li onClick={() => window.location.replace(`/community/${board.id}`)}>{board.name}</li>
                )})}
            </ul>
        </div>
    }
}

export default CommunitySidebar;