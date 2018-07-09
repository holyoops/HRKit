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
            loadingButton: {
                event:{
                    tap: function(config){
                        that.showLoading();
                        setTimeout(function(){that.hideLoading()},3000);
                    }
                },
                text: {
                    fontSize: '1.2rem'
                }
            },
            messageButton: {
                event:{
                    tap: function(config){
                        that.showMessage();
                    }
                },
                text: {
                    fontSize: '1.2rem'
                }
            }
        }

    }

    componentDidMount() {
    }

    render () {
        return (
            <div id = "Home" class = "page" >
                <ul>
                    Home21122
                    <HRKitButton config = {this.state.loadingButton}>showLoading</HRKitButton>
                    <HRKitButton config = {this.state.messageButton}>showMessage</HRKitButton>
                </ul>
            </div>
       );
  }
}

export default home;
