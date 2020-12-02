import React, { Component } from 'react'
import './style.scss'
import callAPI from '../../../../_utils/apiCaller';
var moment = require('moment');

class StudyReference extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reference: [],
            file: ""
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
        this.state.file = document.createElement('input');
        const file = this.state.file;
        file.setAttribute("type", "file");
        file.setAttribute("name", "file");
        document.body.appendChild(file);
        file.click();
        file.onchange = this.handleChange;
    }

    getReferences = async () => {
        const study_id = this.props.studyId;
        callAPI(`study/reference/${study_id}`, 'GET', {...this.getToken()}, null).then(res => {
            if(res.data.result === 'true'){
                this.setState ({
                    reference: res.data.data
                })
                console.log(this.state);
            } else {
                console.log(res.data.msg)
            }            
        });
    }

    handleChange = async (event) => {
        const { name, value } = event.target;
        if (name === "file") {
            let formData = new FormData();

            formData.append('file', event.target.files[0]);

            const res = await callAPI(
                `study/reference/${this.props.studyId}`, 
                `post`,
                {...this.getToken()},
                formData
            );

            if(res.data.result !== 'true'){
                console.log(res.data.msg);
            }

            document.body.removeChild(this.state.file);

            this.getReferences();

        } else {
            this.setState({
                [name] : value
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
                <div class="StudyReference">
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

export default StudyReference;