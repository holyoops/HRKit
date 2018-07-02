import React, { Component } from 'react';
import './index.less';
import { Link } from 'react-router-dom';

class settingSub extends Component {

    constructor(props) {

        super(props);

        this.state = {

        }

    }

    componentDidMount() {

    }

    render () {
  	     return (
            <div id = "settingSub" class = "page">
                <ul>
                    <li>Setting 1</li>
                </ul>
            </div>
        );
    }
}

export default settingSub;
