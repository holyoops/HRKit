import React, { Component } from 'react';
import './index.less';
import { Link } from 'react-router-dom';

class setting extends Component {

    constructor(props) {

        super(props);
        this.state = {
        }

    }

    componentDidMount() {

    }

    render () {
  	     return (
             <div id = "setting" class = "page" key = "setting">
                <ul>
                    <li>Setting 1</li>
                    <li><Link to = '/setting/settingSub'>下一页</Link></li>
                </ul>
             </div>
        );
  }
}

export default setting;
