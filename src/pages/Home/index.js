import React, { Component } from 'react';
import './index.less';
import { Link } from 'react-router-dom';

class home extends Component {

    constructor(props) {

        super(props);

    }

    componentDidMount() {

    }

    render () {
        return (
            <div id = "Home" class = "page" >
                <ul>
                    Home
                </ul>
            </div>
       );
  }
}

export default home;
