import React, { Component } from 'react';
import HRKitTools from '../HRKitTools.js';
import './index.less';
import HRKitButton from '../HRKitButton';
import { Switch, Route, withRouter } from 'react-router-dom';
import HRKitNavigationController from '../HRKitNavigationController';

class HRKitTabController extends Component {

    constructor(props) {

        super(props);

        let that = this;

        let featuresPageURL = ['', '', '', ''];

        let currentFeature = 0;

        this.state = {
            currentFeature: 0,
            featureButton1st: {
                event:{
                    tap: function(config){
                        var path = {
                          pathname: '/',
                          state: {
                              from: 'tab'
                          },
                        }
                        that.props.history.push(path);
                        that.setState({
                            currentFeature: 0
                        });
                    }
                },
                textIconPosition: 'v',
                icon:{
                    URL: require('../Resource/Image/search.png')
                },
                text: {
                    content: 'Hello World'
                }
            },
            featureButton2nd: {
                event:{
                    tap: function(config){
                        var path = {
                          pathname: '/testPage',
                          state: {
                              from: 'tab'
                          },
                        }
                        that.props.history.push(path);
                        that.setState({
                            currentFeature: 1
                        });
                    }
                },
                icon:{
                    URL: require('../Resource/Image/search.png')
                },
                text: {
                    content: 'Hello'
                }
            },
            featureButton3rd: {
                event:{
                    tap: function(config){
                        that.props.history.push('/testPage');
                        that.setState({
                            currentFeature: 2
                        });
                    }
                },
                icon:{
                    URL: require('../Resource/Image/search.png')
                },
                text: {
                    content: 'Hello'
                }
            },
            featureButton4th: {
                event:{
                    tap: function(config){
                        that.props.history.push('/testPage');
                        that.setState({
                            currentFeature: 3
                        });
                    }
                },
                icon:{
                    URL: require('../Resource/Image/search.png')
                },
                text: {
                    content: 'Hello'
                }
            }
        }

    }

    componentDidMount() {

    }

    render () {
        return (
            <div id = {this.props.id} class = {'_HRKit-Tab-Controller ' + this.props.class}>
                {
                    (function(obj){
                        switch (obj.state.currentFeature) {
                            case 0:
                                return (<HRKitNavigationController class = '_HRKit-Tab-page' id = 'feature1st'/>);
                                break;
                            case 1:
                                return (<HRKitNavigationController class = '_HRKit-Tab-page' id = 'feature2nd' />);
                                break;
                            case 2:
                                return (<HRKitNavigationController class = '_HRKit-Tab-page' id = 'feature3rd' />);
                                break;
                            case 3:
                                return (<HRKitNavigationController class = '_HRKit-Tab-page' id = 'feature4th' />);
                                break;
                            default:
                                return (<HRKitNavigationController class = '_HRKit-Tab-page' id = 'feature1st' />);
                                break;

                        }
                    }(this))
                }

                <div class = '_HRKit-Tab-bar'>
                    <HRKitButton id = 'featureButton1st' class = '_HRKit-Tab-bar-button' config = {this.state.featureButton1st}></HRKitButton>
                    <HRKitButton id = 'featureButton2nd' class = '_HRKit-Tab-bar-button' config = {this.state.featureButton2nd}></HRKitButton>
                    <HRKitButton id = 'featureButton3rd' class = '_HRKit-Tab-bar-button' config = {this.state.featureButton3rd}></HRKitButton>
                    <HRKitButton id = 'featureButton4th' class = '_HRKit-Tab-bar-button' config = {this.state.featureButton4th}></HRKitButton>
                </div>
            </div>
        );

    }

}
export default withRouter(HRKitTabController);
