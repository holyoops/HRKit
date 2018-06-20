import React, { Component } from 'react';
import './index.less';
import {Switch, Route} from 'react-router-dom'
import HRKitTabController from '../../HRKit/HRKitTabController';
import HRKitTools from '../../HRKit/HRKitTools.js';

class Grid extends Component {

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        if (HRKitTools.isPC()){
            document.getElementsByTagName("html")[0].style.fontSize = '10px';
        }else {
            document.getElementsByTagName("html")[0].style.fontSize = '10px';
            var meta = document.createElement('meta');
            meta.name = 'viewport';
            console.log('ratio: ', window.devicePixelRatio);
            if (window.devicePixelRatio === 2){
                meta.content = 'width=device-width, initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no';
            }else if (window.devicePixelRatio === 3){
                meta.content = 'width=device-width, initial-scale=0.33, maximum-scale=0.33, minimum-scale=0.33, user-scalable=no';
            }else{
                meta.content = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no';
            }
            document.getElementsByTagName('head')[0].appendChild(meta);
        }
    }

    render () {
        return (
            <div id = "Grid">
                <HRKitTabController />
            </div>
        );
    }
}

export default Grid;
