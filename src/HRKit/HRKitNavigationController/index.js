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
            navigationHistory: {},
            backButton: {
                event:{
                    tap: function(config){

                        let targetURL = that.state.navigationHistory[that.props.id][that.state.navigationHistory[that.props.id].length - 2];
                        that.state.navigationHistory[that.props.id].pop();
                        that.state.navigationHistory[that.props.id].pop();
                        that.props.history.push(targetURL);
                    }
                },
                icon:{
                    URL: require('../Resource/Image/back.png')
                }
            }
        }

    }

    componentDidMount() {

        console.log('mount:',this.props);

    }

    componentDidUpdate(){

        console.log('update:',this.props);

    }

    render () {


        if ( typeof(this.state.navigationHistory[this.props.id]) === 'undefined' ){

            this.state.navigationHistory[this.props.id] = [];
            this.state.navigationHistory[this.props.id].push(this.props.location.pathname);

        }else if ( typeof(this.props.location.state) === 'undefined' ){

            this.state.navigationHistory[this.props.id].push(this.props.location.pathname);

        }else{

            if ( this.props.location.state.from === 'tab' ){

                let targetURL = this.state.navigationHistory[this.props.id][this.state.navigationHistory[this.props.id].length - 1];
                this.state.navigationHistory[this.props.id].pop();
                this.props.history.push(targetURL);

            }else{

                this.state.navigationHistory[this.props.id].push(this.props.location.pathname);

            }

        }



        console.log('render:', this.state.navigationHistory);

        return (
            <div id = {this.props.id} class = {'_HRKit-Navigation-Controller ' + this.props.class}>
                <div class = {this.state.navigationHistory[this.props.id].length > 1 ? '_HRKit-Navigation-bar' : '_HRKit-Navigation-bar _HRKit-Navigation-bar-hidden'}>
                    <HRKitButton id = 'testButton3' class = '_HRKit-Navigation-bar-back' config = {this.state.backButton}></HRKitButton>
                </div>
                <span></span>
                <div class = '_HRKit-Navigation-page'>
                    <Switch>
                        <Route exact path='/' component={ require('../../pages/Home').default }/>
                        <Route exact path='/testPage' component={ require('../../pages/testPage').default }/>
                        <Route exact path='/testPage/testPageSub' component={ require('../../pages/testPageSub').default }/>
                    </Switch>
                </div>
            </div>
        );

    }

}
export default withRouter(HRKitNavigationController);
