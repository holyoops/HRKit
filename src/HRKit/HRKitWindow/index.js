import React, { Component } from 'react';
import './index.less';
import {Switch, Route} from 'react-router-dom'
import HRKitTabController from '../HRKitTabController';
import HRKitMessage from '../HRKitMessage';
import HRKitTools from '../HRKitTools';

class HRKitWindow extends Component {

    constructor(props) {

        super(props);

    }

    componentDidMount() {

        if (HRKitTools.isPC()){

            document.getElementsByTagName("html")[0].style.fontSize = '10px';

        }else {

            var meta = document.createElement('meta');
            meta.name = 'viewport';
            let ratio = window.devicePixelRatio;
            let scale = 1 / ratio;
            document.getElementsByTagName('html')[0].style.fontSize = ratio * 10 +'px';
            meta.content = 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no';
            document.getElementsByTagName('head')[0].appendChild(meta);
            
        }

    }

    handleTouchStart(event) {

        event.stopPropagation();

    }

    render () {
        return (
            <div id = '_HRKitWindow' onTouchStart = {this.handleTouchStart.bind(this)}>
                <HRKitTabController routers = {this.props.routers}/>
                <div id = '_HRKitCover' class = '_HRKit-Cover-hide'></div>
                <HRKitMessage />
            </div>
        );
    }
}

export default HRKitWindow;
