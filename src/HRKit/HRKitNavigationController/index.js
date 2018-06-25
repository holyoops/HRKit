import React, { Component } from 'react';
import HRKitTools from '../HRKitTools.js';
import './index.less';
import HRKitButton from '../HRKitButton';
import { Switch, Route, withRouter } from 'react-router-dom';
// import testPage from '../../pages/testPage';
// import testPageSub from '../../pages/testPageSub';
// const testPageSub = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('../../pages/testPageSub').default)
//     },'testPageSub')
// }
//console.log(testPage);

// let testPageSub = require('../../pages/testPage');
class HRKitNavigationController extends Component {

    constructor(props) {

        super(props);

        let that = this;

        this.state = {
            testButton1: {
                event:{
                    tap: function(config){
                        that.props.history.goBack();
                    }
                },
                icon:{
                    URL: require('../Resource/Image/back.png')
                }
            }
        }

    }

    componentDidMount() {

    }

    render () {
        return (
            <div id = {this.props.id} class = {'_HRKit-Navigation-Controller ' + this.props.class}>
                <div class = '_HRKit-Navigation-bar'>
                    <HRKitButton id = 'testButton3' class = '_HRKit-Navigation-bar-back' config = {this.state.testButton1}></HRKitButton>
                </div>
                <div class = '_HRKit-Navigation-page'>
                    <Switch>
                        <Route exact path='/testPage' component={ require('../../pages/testPage').default }/>
                        <Route exact path='/testPage/testPageSub' component={ require('../../pages/testPageSub').default }/>
                    </Switch>
                </div>
            </div>
        );

    }

}
export default withRouter(HRKitNavigationController);
