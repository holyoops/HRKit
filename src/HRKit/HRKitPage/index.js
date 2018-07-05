import React, { Component } from 'react';
import HRKitLoading from '../HRKitLoading';
import HRKitMessage from '../HRKitMessage';
import ReactDOM from 'react-dom';
import './index.less';

class HRKitPage extends Component {

    constructor(props) {

        super(props);

    }

    showLoading() {

        let _HRKitCover = document.getElementById('_HRKitCover');
        _HRKitCover.className = '_HRKit-Cover-show';
        ReactDOM.render(React.createElement(HRKitLoading, {}), _HRKitCover);

    }

    hideLoading() {

        let _HRKitCover = document.getElementById('_HRKitCover');
        _HRKitCover.className = '_HRKit-Cover-hide';
        ReactDOM.unmountComponentAtNode(_HRKitCover);

    }

    showMessage() {

        let _HRKitMessage = document.getElementById('_HRKitMessage');
        _HRKitMessage.className = '_HRKit-Message-show'
        setTimeout(function(){_HRKitMessage.className = '_HRKit-Message-hide'},5000);

    }

}

export default HRKitPage;
