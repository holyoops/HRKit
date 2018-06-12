import React, { Component } from 'react';
import HRKitTabController from '../../HRKit/HRKitTabController';
import './index.less';

class HomeMb extends Component {

    constructor(props) {

        super(props);

        this.state = {

        }

    }

    componentDidMount() {

    }

    render () {
  	     return (
             <div id = "HomeMb" class = "page" >
                Mobile Browser
                <HRKitTabController id = 'tabbar' class = 'tabbar'></HRKitTabController>
             </div>
        );
  }
}

export default HomeMb;
