import React, { Component } from 'react';
import './index.less';

class testPageSub extends Component {

    constructor(props) {

        super(props);

        this.state = {

        }

    }

    componentDidMount() {

    }

    render () {
  	     return (
             <div id = "testPageSub">
                <ul>
                    <li class = "li">1</li>
                    <li class = "li red">2</li>
                    <li class = "li">3</li>
                    <li class = "li red">4</li>
                    <li class = "li">5</li>
                    <li class = "li red">6</li>
                    <li class = "li">7</li>
                    <li class = "li red">8</li>
                    <li class = "li">9</li>
                    <li class = "li red">10</li>
                    <li class = "li">11</li>
                    <li class = "li red">12</li>
                    <li class = "li">13</li>
                    <li class = "li red">14</li>
                    <li class = "li">15</li>
                    <li class = "li red">16</li>
                </ul>
             </div>
        );
  }
}

export default testPageSub;
