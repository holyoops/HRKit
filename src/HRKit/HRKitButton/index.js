import React, { Component } from 'react';
import HRKitTools from '../HRKitTools.js';
import './index.less';

class HRKitButton extends Component {

    constructor(props) {

        super(props);

        let sample = {
            effectType: '00',
            textIconPosition: 'h', // h for horizontal, v for vertical
            background: {
                color: 'white',
                imageURL: ''
            },
            text: {
                content: this.props.children,
                color: '#333',
                position: {
                    x: 0,
                    y: 0
                },
                fontSize: 'inherit'
            },
            icon: {
                URL: '',
                position: {
                    x: 0,
                    y: 0
                },
                size: {
                    width: 'auto',
                    height: 'auto'
                }
            },
            event: {
                tap: function(){
                }
            }
        }

        let properties = HRKitTools.objectPatcher(sample, this.props.config);

        switch (properties.effectType) {
            case '00':
                properties.effectType = '_HRKit-Button-event-bg-darker';
                break;
            case '01':
                properties.effectType = '_HRKit-Button-event-text-darker';
                break;
            case '10':
                properties.effectType = '_HRKit-Button-event-bg-darker';
                break;
            case '11':
                properties.effectType = '_HRKit-Button-event-bg-darker';
                break;
            default:
                properties.effectType = '_HRKit-Button-event-bg-darker';
                break;
        }

        this.state = {
            properties: properties
        }
    }

    componentDidMount() {
    }

    handleTouchStart(event) {

        let target = event.target;

        if (event.target.attributes.class.value.indexOf('_HRKit-Button-event') === -1) {

            target = event.target.parentNode;

        }

        event.stopPropagation();
        target.classList.add(this.state.properties.effectType);

    }

    handleTouchMove(event) {

        event.stopPropagation();

    }

    handleClick(event) {

        event.stopPropagation();

    }

    handleTouchEnd(type, event) {

        let target = event.target;

        if (target.attributes.class.value.indexOf('_HRKit-Button-event') === -1) {

            target = target.parentNode;

        }

        event.stopPropagation();
        target.classList.remove(this.state.properties.effectType);

        var touchEndPosition;

        if (type === 0) {

            touchEndPosition = {
                x: event.nativeEvent.changedTouches[0].pageX,
                y: event.nativeEvent.changedTouches[0].pageY
            }

        }else{

            touchEndPosition = {
                x: event.pageX,
                y: event.pageY
            }

        }

        let elementAbPosition = HRKitTools.getAbPosition(target);
        let elementSize = {
            w: target.offsetWidth,
            h: target.offsetHeight
        }

        var isInElement = true;

        // // Touch/Mouse point isn't in the button area when mouseup / touchend event triggered.
        // console.log('touchEndPosition.x < elementAbPosition.x:', touchEndPosition.x < elementAbPosition.x);
        // console.log('touchEndPosition.y < elementAbPosition.y:', touchEndPosition.y < elementAbPosition.y);
        // console.log('touchEndPosition.x > ( elementAbPosition.x + elementSize.w ):', touchEndPosition.x > ( elementAbPosition.x + elementSize.w ));
        // console.log('touchEndPosition.y > ( elementAbPosition.y + elementSize.h):', touchEndPosition.y > ( elementAbPosition.y + elementSize.h));
        // console.log('touchEndPosition.y', touchEndPosition.y);
        // console.log('element', target);
        // console.log('elementAbPosition.y', elementAbPosition.y);
        // console.log('elementSize.h', elementSize.h);
        // console.log('elementAbPosition.x', elementAbPosition.x);
        if (touchEndPosition.x < elementAbPosition.x || touchEndPosition.y < elementAbPosition.y || touchEndPosition.x > ( elementAbPosition.x + elementSize.w ) || touchEndPosition.y > ( elementAbPosition.y + elementSize.h) ) {

            isInElement = false;

        }

        if (isInElement) {

            this.state.properties.event.tap();

        }

    }

    handleMouseLeave(event) {

        let target = event.target;

        if (event.target.attributes.class.value.indexOf('_HRKit-Button-event') === -1) {

            target = event.target.parentNode;

        }

        event.stopPropagation();
        target.classList.remove(this.state.properties.effectType);

    }

    handleTouchCancel(event) {

        let target = event.target;

        if (event.target.attributes.class.value.indexOf('_HRKit-Button-event') === -1) {

            target = event.target.parentNode;

        }

        event.stopPropagation();
        target.classList.remove(this.state.properties.effectType);

    }

    updateButton (p){

        let properties = HRKitTools.objectPatcher(this.state.properties, p);

        this.updateState({
            properties: properties
        });
    }

    render () {

        return (
            <div id = {this.props.id} class = {'_HRKit-Button ' + this.props.class}>
                <div class = {'_HRKit-Button-event' + (this.state.properties.textIconPosition === 'v' ? ' _HRKit-Button-event-vertical' : '')} onTouchStart = {this.handleTouchStart.bind(this)} onTouchMove = {this.handleTouchMove.bind(this)} onTouchEnd = {this.handleTouchEnd.bind(this, 0)} onTouchCancel = {this.handleTouchCancel.bind(this)} onClick = {this.handleClick.bind(this)} onMouseDown = {HRKitTools.isPC()?this.handleTouchStart.bind(this):''} onMouseUp =              {HRKitTools.isPC()?this.handleTouchEnd.bind(this, 1):''} onMouseLeave = {HRKitTools.isPC()?this.handleMouseLeave.bind(this):''}>
                    <img class = '_HRKit-Button-icon' src = {this.state.properties.icon.URL} />
                    <span class = {'_HRKit-Button-text'} style = {{fontSize: this.state.properties.text.fontSize, color: this.state.properties.text.color}}>{this.state.properties.text.content}</span>
                </div>
            </div>
        );

    }

}
export default HRKitButton;
