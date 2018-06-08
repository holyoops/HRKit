import React, { Component } from 'react';
import './index.less';
import {Switch, Route} from 'react-router-dom'
import Home from '../Home';
import HomeMb from '../HomeMb';
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
            meta.content = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no';
            document.getElementsByTagName('head')[0].appendChild(meta);
        }
    }

    render () {
        return (
            <div id = "Grid">
                <div id = "GridPages" class = "grid-pages">
                    <Switch>
                        <Route exact path='/' component={ HRKitTools.isPC() ? Home : HomeMb }/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Grid;
