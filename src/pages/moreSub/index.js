import React, { Component } from 'react';
import './index.less';
import { Link } from 'react-router-dom';

class moreSub extends Component {

    constructor(props) {

        super(props);

        this.state = {

        }

    }

    componentDidMount() {

    }

    render () {
  	     return (
             <div id = "moreSub" class = "page" key = "moreSub">
                <ul>
                    <li>more</li>
                </ul>
             </div>
        );
  }
}

export default moreSub;
