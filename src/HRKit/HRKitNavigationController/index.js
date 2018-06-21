import React, { Component } from 'react';
import HRKitTools from '../HRKitTools.js';
import './index.less';
import HRKitButton from '../HRKitButton';
import { Switch, Route, withRouter } from 'react-router-dom';
// import testPage from '../../pages/testPage';
import testPageSub from '../../pages/testPageSub';

const testPage = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../../pages/testPage').default)
    },'testPage')
}
console.log(testPage);

// let testPageSub = require('../../pages/testPage');
class HRKitNavigationController extends Component {

    constructor(props) {

        super(props);

    }

    componentDidMount() {

    }

    render () {
        return (
            <div id = {this.props.id} class = {'_HRKit-Navigation-Controller ' + this.props.class}>
                <div class = '_HRKit-Navigation-page'>
                    <Switch>
                        <Route exact path='/testPage' getComponent={ testPage }/>
                        <Route exact path='/testPage/testPageSub' component={ testPageSub }/>
                    </Switch>
                </div>
            </div>
        );

    }

}
export default withRouter(HRKitNavigationController);
