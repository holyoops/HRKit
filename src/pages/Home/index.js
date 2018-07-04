import React, { Component } from 'react';
import './index.less';
import { Link } from 'react-router-dom';
import HRKitButton from '../../HRKit/HRKitButton';
import HRKitPage from '../../HRKit/HRKitPage';

class home extends HRKitPage {

    constructor(props) {

        super(props);

        let that = this;

        this.state = {
            testButton: {
                event:{
                    tap: function(config){
                        that.showLoading();
                        setTimeout(function(){that.hideLoading()},3000);
                    }
                },
                text: {
                    content: 'show loading'
                }
            }
        }

    }

    componentDidMount() {
        console.log(this.refs);
    }

    render () {
        return (
            <div id = "Home" class = "page" >
                <ul>
                    Home2
                    <HRKitButton config = {this.state.testButton}></HRKitButton>
                </ul>
            </div>
       );
  }
}

export default home;
