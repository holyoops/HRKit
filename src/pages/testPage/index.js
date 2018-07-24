import React, { Component } from 'react';
import './index.less';
import { Link } from 'react-router-dom';
import HRKitPage from '../../HRKit/HRKitPage';

class testPage extends HRKitPage {

    constructor(props) {

        super(props);

        this.state = {

        }

    }

    componentDidMount() {

    }

    render () {
  	     return (
             <div  id = "testPage" class = "page">
                <ul>
                    <li>test Page</li>
                    <li><Link to = '/others/HRKit/testPage/testPageSub'>testPageSub</Link></li>
                </ul>
             </div>
        );
  }
}

export default testPage;
