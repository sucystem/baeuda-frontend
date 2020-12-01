import Header from '../../components/header';
import Main from './components/main';
import Icon from '../../components/icon';
import Footer from '../../components/footer';
import React, {Component} from 'react'

class MainPage extends Component{
    constructor(props){
        super(props)
    }

    render(){
    return (
        <>
            <Header history={this.props.history} />
            <Main history={this.props.history} />
        </>
    );
    }
}

export default MainPage;
