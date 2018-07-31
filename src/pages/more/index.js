import React, { Component } from 'react';
import './index.less';
import { Link } from 'react-router-dom';

class more extends Component {

    constructor(props) {

        super(props);

        this.state = {

        }

    }

    componentDidMount() {

    }

    render () {
  	     return (
             <div id = "more" class = "page">
                <ul>
                    <li>more1</li>
                    <li><Link to = '/more/moreSub'>下一页</Link></li>
                </ul>
             </div>
        );
  }
}

export default more;
