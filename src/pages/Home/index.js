import React, { Component } from 'react';
import './index.less';
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor(props) {

        super(props);

    }

    componentDidMount() {

    }

    render () {
        return (
            <div id = "Home" class = "page" >
                <ul>
                    <li>Home 1</li>
                    <li><Link to = '/testPage/testPageSub'>testPageSub</Link></li>
                </ul>
            </div>
       );
  }
}

export default Home;
