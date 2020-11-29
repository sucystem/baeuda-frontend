import React from 'react'
import './lec_side_bar.css'
import { useHistory } from 'react-router-dom';

function LectureSidebar(){
    let history = useHistory();
    return <div id="lec_side_bar">
            <ul>
                <li onClick={() => history.push("/myLecture") }>수강중 과목</li>
                <li onClick={() => history.push("/myLecture/completed")}>이수한 과목</li>
                <li onClick={() => history.push("/myLecture/wait")}>승인대기 과목</li>
                <li onClick={() => history.push("/myLecture/apply")}>강의 신청</li>
            </ul>
    </div>

}

export default LectureSidebar;