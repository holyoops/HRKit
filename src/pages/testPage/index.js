import React, { Component } from 'react';
import './index.less';
import { Link } from 'react-router-dom';

class testPage extends Component {

    constructor(props) {

        super(props);

        this.state = {

        }

    }

    componentDidMount() {

    }

    render () {
  	     return (
             <div id = "page">
                <ul>
                    <li>page0</li>
                    <li><Link to = '/testPage/testPageSub'>testPageSub</Link></li>
                </ul>
             </div>
        );
  }
}

export default testPage;
