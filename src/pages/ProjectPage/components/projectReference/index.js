import React, { Component } from 'react'
import './style.scss'
import callAPI from '../../../../_utils/apiCaller';
var moment = require('moment');

class ProjectReference extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reference: [],
            filetag: ""
        }
    }

    getToken = () => {
        const token = localStorage.getItem('token');
        return {
            auth_token: token,
        }
    }

    handleClickAddFile = (event) => {
        event.preventDefault();
        this.state.filetag = document.createElement('input');
        const file = this.state.file;
        file.setAttribute("type", "file");
        file.setAttribute("name", "file");
        document.body.appendChild(file);
        file.click();
        file.onchange = this.handleChange;
    }

    getReferences = async () => {
        const project_id = this.props.projectId;
        callAPI(`project/reference/${project_id}`, 'GET', { ...this.getToken() }, null).then(res => {
            if (res.data.result === 'true') {
                this.setState({
                    reference: res.data.data
                })
            } else {
                console.log(res.data.msg)
            }
        });
    }

    handleChange = async (event) => {
        const { name, value } = event.target;
        if (name === "file") {
            if (event.target.files[0].size <= 314572800) {

                let formData = new FormData();

                formData.append('file', event.target.files[0]);

                const res = await callAPI(
                    `project/reference/${this.props.projectId}`,
                    `post`,
                    { ...this.getToken() },
                    formData
                );

                if (res.data.result !== 'true') {
                    console.log(res.data.msg);
                }
            } else {
                alert('300 MB 이하의 파일만 업로드 할 수 있습니다!');
            }

            document.body.removeChild(this.state.file);

            this.getReferences();

        } else {
            this.setState({
                [name]: value
            })
        }
    }

    handleDownloadFile = async (event) => {
        event.preventDefault();
        var { name } = event.target;
        const link = document.createElement('a');
        link.href = `${process.env.REACT_APP_SERVER_API}/download/${name}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    componentDidMount() {
        this.getReferences();
    }

    render() {
        return (
            <>
                <div id="btnShare" onClick={(event) => this.handleClickAddFile(event)}>자료 업로드</div>
                <div class="ProjectReference">
                    <ul>
                        {
                            this.state.reference.map((ref) => {
                                return (
                                    <li>
                                        <a class="RefName" name={ref.path + '/' + ref.name} onClick={(event) => this.handleDownloadFile(event)}>{ref.name}</a>
                                        <div class="RefWriter">{ref.user_name} &nbsp;&nbsp; {moment(ref.upload_date).format('YYYY-MM-DD')}</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </>
        );
    }
}

export default ProjectReference;