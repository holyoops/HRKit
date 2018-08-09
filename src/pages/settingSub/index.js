import React, { Component } from 'react';
import './index.less';
import { Link } from 'react-router-dom';
import HRKitPage from '../../HRKit/HRKitPage';

class settingSub extends HRKitPage {

    constructor(props) {

        super(props);

        this.state = {

        }

    }

    componentDidMount() {

    }

    render () {
  	     return (
            <div id = "settingSub" class = "page" key="settingSub">
                <ul>
                    <li>Setting 1</li>
                </ul>
            </div>
        );
    }
}

export default settingSub;
