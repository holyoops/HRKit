import React, { Component } from 'react';
import HRKitTools from '../HRKitTools.js';
import './index.less';
import HRKitButton from '../HRKitButton';
import { browserHistory } from 'react-router';
import { Switch, Route } from 'react-router-dom';

class HRKitTabController extends Component {

    constructor(props) {

        super(props);

        this.state = {
            testButton1: {
                event:{
                    tap: function(config){
                        browserHistory.push();
                    }
                },
                icon:{
                    URL: require('../Resource/Image/search.png')
                },
                text: {
                    content: 'Hello World'
                }
            },
            testButton2: {
                event:{
                    tap: function(config){
                        console.log(222);
                    }
                },
                icon:{
                    URL: require('../Resource/Image/search.png')
                },
                text: {
                    content: 'Hello World'
                }
            }
        }

    }

    componentDidMount() {

    }

    render () {
        return (
            <div id = {this.props.id} class = {'_HRKit-Tab-Controller ' + this.props.class}>
                <div class = '_HRKit-Tab-page'>
                    <Switch>
                        <Route exact path='/' component={ HRKitTools.isPC() ? Home : HomeMb }/>
                        <Route exact path='/' component={ HRKitTools.isPC() ? Home : HomeMb }/>
                        <Route exact path='/' component={ HRKitTools.isPC() ? Home : HomeMb }/>
                    </Switch>
                </div>
                <div class = '_HRKit-Tab-bar'>
                    <HRKitButton id = 'testButton1' class = '_HRKit-Tab-bar-button' config = {this.state.testButton2}></HRKitButton>
                    <HRKitButton id = 'testButton2' class = '_HRKit-Tab-bar-button' config = {this.state.testButton2}></HRKitButton>
                    <HRKitButton id = 'testButton3' class = '_HRKit-Tab-bar-button' config = {this.state.testButton1}></HRKitButton>
                    <HRKitButton id = 'testButton4' class = '_HRKit-Tab-bar-button' config = {this.state.testButton2}></HRKitButton>
                </div>
            </div>
        );

    }

}
export default HRKitTabController;
