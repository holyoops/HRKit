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

        let tabButtonList = [];

        let obejct = that.props.routers

        for (let item in obejct) {
            if (obejct.hasOwnProperty(item)) {
                if (obejct[item].tab){
                    let buttonConfig = {
                        event:{
                            tap: function(config){
                                let path = {
                                  pathname: obejct[item].path,
                                  state: {
                                      from: 'tab'
                                  },
                                }
                                that.props.history.push(path);
                                that.setState({
                                    currentFeature: item
                                });
                            }
                        },
                        textIconPosition: 'v',
                        icon:{
                            URL: require('../Resource/Image/search.png')
                        },
                        text: {
                            content: obejct[item].text
                        }
                    }
                    tabButtonList.push(buttonConfig);
                }
            }
        }

        this.state = {
            currentFeature: 0,
            buttonList: tabButtonList
        }

    }

    componentDidMount() {

    }

    render () {
        return (
            <div id = {this.props.id} class = {'_HRKit-Tab-Controller ' + this.props.class}>
                {
                    (function(that){
                        return (<HRKitNavigationController class = '_HRKit-Tab-page' id = {'_HRKit-Tab-page_feature_'+that.state.currentFeature} routers = {that.props.routers}/>);
                    }(this))
                }
                <div class = '_HRKit-Tab-bar'>
                    {this.state.buttonList.map((item) => {
                        return (
                            <HRKitButton class = '_HRKit-Tab-bar-button' config = {item}></HRKitButton>
                        )
                    })}
                </div>
            </div>
        );

    }

}
export default withRouter(HRKitTabController);
