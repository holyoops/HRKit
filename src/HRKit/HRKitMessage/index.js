import React, { Component } from 'react';
import './index.less';

class HRKitMessage extends Component {

    constructor(props) {

        super(props);

    }

    componentDidMount() {

    }

    render () {
        return (
            <div id = "_HRKitMessage" class = "_HRKit-Message-hide" >
                <div id = "_HRKitMessageText" class = '_HRKit-Message-text'>请稍候...</div>
            </div>
       );
  }
}

export default HRKitMessage;
