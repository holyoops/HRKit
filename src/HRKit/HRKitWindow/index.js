import React, { Component } from 'react';
import './index.less';
import {Switch, Route} from 'react-router-dom'
import HRKitTabController from '../HRKitTabController';
import HRKitTools from '../HRKitTools';

class HRKitWindow extends Component {

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        if (HRKitTools.isPC()){
            document.getElementsByTagName("html")[0].style.fontSize = '10px';
        }else {
            var meta = document.createElement('meta');
            meta.name = 'viewport';
            console.log('ratio: ', window.devicePixelRatio);
            let ratio = window.devicePixelRatio;
            let scale = 1/ratio;
            document.getElementsByTagName("html")[0].style.fontSize = ratio * 10 +'px';
            meta.content = 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no';
            document.getElementsByTagName('head')[0].appendChild(meta);
        }
    }

    render () {
        return (
            <div id = "_HRKitWindow">
                <HRKitTabController />
            </div>
        );
    }
}

export default HRKitWindow;
