import React, { Component } from 'react';
import './index.less';

class HRKitLoading extends Component {

    constructor(props) {

        super(props);

    }

    componentDidMount() {

    }

    render () {
        return (
            <div id = "_HRKitLoading" class = "_HRKit-Loading" >
                <div id = "_HRKitLoadingBg" class = "_HRKit-Loading-bg" >
                    <img src = {require('../Resource/Image/spinner.gif')} class = '_HRKit-Loading-img'/>
                    <div class = '_HRKit-Loading-text'>请稍候...</div>
                </div>
            </div>
       );
  }
}

export default HRKitLoading;
