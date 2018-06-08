import React, { Component } from 'react';
import HRKitButton from '../../HRKit/HRKitButton';
import './index.less';

class HomeMb extends Component {

    constructor(props) {

        super(props);

        this.state = {
            testButton1: {
                event:{
                    tap: function(config){
                        console.log(111);
                    }
                },
                icon:{
                    URL: require('../../HRKit/Resource/Image/search.png')
                },
                text: {
                    content: 'Hello World'
                }
            },
            testButton2: {
                event:{
                    tap: function(config){
                        console.log(222);
                    }
                },
                icon:{
                    URL: require('../../HRKit/Resource/Image/search.png')
                },
                text: {
                    content: 'Hello World'
                }
            }
        }

    }

    componentDidMount() {

    }

    render () {
  	     return (
             <div id = "HomeMb" class = "page" >
                Mobile Browser
                <HRKitButton id = 'testButton' class = 'test-button' config = {this.state.testButton1}></HRKitButton>
                <HRKitButton id = 'testButton' class = 'test-button' config = {this.state.testButton2}></HRKitButton>
             </div>
        );
  }
}

export default HomeMb;
