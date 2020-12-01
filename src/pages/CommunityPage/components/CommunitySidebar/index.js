import React, { Component } from 'react';
import './style.scss';

class CommunitySidebar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
            if (!(localStorage.getItem('token') && localStorage.getItem('user'))) {
            this.props.history.push('/')
        }
    }

    render() {
        let history = this.props.history;
        return <div id="community_side_bar">
            <ul>
                <li style={{ color: "#22a7f0" }}>자유게시판</li>
            </ul>
        </div>
    }
}

export default CommunitySidebar;