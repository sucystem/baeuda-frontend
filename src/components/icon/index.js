import React from 'react'
import logo from '../../assets/images/logo.jpg'
import './icon.css'
import { useHistory } from 'react-router-dom';

function Icon() {
    let history = useHistory();
    return <div class="icon_menu">
        <div id="icon_alarm" class="icon">
            알람
        </div>
        <div id="icon_message"class="icon">
            메세지
        </div>
    </div>;
}

export default Icon;