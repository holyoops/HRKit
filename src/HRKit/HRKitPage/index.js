import React, { Component } from 'react';
import HRKitLoading from '../HRKitLoading';
import ReactDOM from 'react-dom';
import './index.less';

class HRKitPage extends Component {

    constructor(props) {

        super(props);

    }

    showLoading() {

        let _HRKitCover = document.getElementById('_HRKitCover');
        _HRKitCover.className = 'HRKit-Cover-show';
        ReactDOM.render(React.createElement(HRKitLoading, {}), _HRKitCover);

    }

    hideLoading() {

        let _HRKitCover = document.getElementById('_HRKitCover');
        _HRKitCover.className = 'HRKit-Cover-hide';
        ReactDOM.unmountComponentAtNode(_HRKitCover);
        
    }

}

export default HRKitPage;
