import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";

import { parseColor, rgbaToRGB, getSize, nextTick } from "./ripple-utils";

const ANIMATION_DURATION = 450;

interface RippleProps {

    fitRipple?      : boolean
    center?         : boolean
    dimBackground?  : boolean
    color?          : string

}

interface RippleState {

    mousedown? : boolean,
    color? : string

}

export class Ripple extends React.Component<RippleProps, RippleState> {

    targetElement : HTMLElement;
    rippleContainer : HTMLElement;

    ripples : JQuery[] = [];
    lastRipple : JQuery;

    timeout : number;

    state : RippleState = {
        mousedown : false
    };

    constructor() {
        super();
        this.handleMousedown = this.handleMousedown.bind(this);
        this.handleMouseup = this.handleMouseup.bind(this);
        this.handleMouseleave = this.handleMouseleave.bind(this);
    }

    render() {
        return (
            <div className="fx-ripple-container"></div>
        );
    }
    
    componentDidMount():void {
        this.rippleContainer = ReactDOM.findDOMNode(this) as HTMLElement;
        this.targetElement = ReactDOM.findDOMNode(this).parentElement;
        this.bindEvents();
        this.setState({
            color : this.getInitialColor()
        });
    }

    componentWillUnmount():void {
        this.unbindEvents();
    }
    
    shouldComponentUpdate(nextProps:any, nextState:any, nextContext:any):boolean {
        return false;
    }

    private bindEvents() {
        $(this.targetElement).on("mousedown", this.handleMousedown);
        $(this.targetElement).on("mouseup", this.handleMouseup);
        $(this.targetElement).on("mouseleave", this.handleMouseleave);
    }

    private unbindEvents() {
        $(this.targetElement).off("mousedown", this.handleMousedown);
        $(this.targetElement).off("mouseup", this.handleMouseup);
        $(this.targetElement).off("mouseleave", this.handleMouseleave);
    }

    private handleMousedown(e : JQueryEventObject) {
        if(this.state.mousedown) {
            return;
        }

        this.setState({
            mousedown : true
        });

        if(this.props.center) {
            this.createRipple(this.rippleContainer.clientWidth / 2, this.rippleContainer.clientHeight / 2);
        } else {
            let event : any = e.originalEvent ? e.originalEvent : e;
            this.createRipple(event.layerX, event.layerY);
        }
    }

    private handleMouseup() {
        if (this.state.mousedown || this.lastRipple != null) {
            this.setState({
                mousedown : false
            });
            nextTick(() => {
                this.clearRipples();
            });
        }
    }

    private handleMouseleave(e : JQueryEventObject) {
        this.handleMouseup();
    }

    private createRipple(left : number, top : number) : void {
        if(!this.isRippleAllowed()) {
            return;
        }

        let ripple      = $('<div class="fx-ripple"></div>'),
            width       = this.targetElement.clientWidth,
            height      = this.targetElement.clientHeight,
            x           = Math.max(Math.abs(width - left), left) * 2,
            y           = Math.max(Math.abs(height - top), top) * 2,
            size        = getSize(this.props.fitRipple, x, y),
            color       = this.state.color;

        ripple.css({
            left:            left + 'px',
            top:             top + 'px',
            background:      'black',
            width:           size + 'px',
            height:          size + 'px',
            backgroundColor: rgbaToRGB(color),
            borderColor:     rgbaToRGB(color)
        });
        this.lastRipple = ripple;

        this.clearTimeout();
        this.timeout = window.setTimeout(() => {
            this.clearTimeout();
            if(!this.state.mousedown) {
                this.onRippleFadeInComplete(ripple);
            }
        }, ANIMATION_DURATION * 0.35);
        
        if(this.props.dimBackground) {
            $(this.rippleContainer).css({
                backgroundColor : color
            });
        }

        $(this.rippleContainer).append(ripple);
        this.ripples.push(ripple);
        ripple.addClass('fx-ripple-placed');

        nextTick(() => {
            ripple.addClass('fx-ripple-scaled fx-ripple-active');
        });
    }

    private getInitialColor() : string {
        return parseColor(this.props.color) || parseColor(window.getComputedStyle(this.rippleContainer).color);
    }

    /**
     * Cycles through all ripples and attempts to remove them.
     * Depending on logic within `fadeInComplete`, some removals will be postponed.
     */
    private clearRipples() {
        for (var i = 0; i < this.ripples.length; i++) {
            this.onRippleFadeInComplete(this.ripples[ i ]);
        }
    }
    
    private onRippleFadeInComplete(ripple : JQuery) {
        if (this.lastRipple === ripple) {
            if (!this.timeout && !this.state.mousedown) {
                this.removeRipple(ripple);
            }
        } else {
            this.removeRipple(ripple);
        }
    }

    private removeRipple(ripple : JQuery) {
        let index = this.ripples.indexOf(ripple);
        if(index < 0) {
            return;
        }
        this.ripples.splice(index, 1);
        ripple.removeClass('fx-ripple-active');
        if (this.ripples.length === 0) {
            $(this.rippleContainer).css({ backgroundColor: '' });
        }
        
        window.setTimeout(() => {
            this.onRippleFadeOutComplete(ripple);
        }, ANIMATION_DURATION);
    }

    private onRippleFadeOutComplete(ripple : JQuery) {
        ripple.remove();
        if(this.lastRipple === ripple) {
            this.lastRipple = null;
        }
    }

    private isRippleAllowed() : boolean {
        let element = this.targetElement;
        do {
            if (!element.tagName || element.tagName === 'BODY') {
                break;
            }
            if (element && element.hasAttribute && element.hasAttribute('disabled')) {
                return false;
            }
        } while (element = (element as any).parentNode);
        return true;
    }

    private clearTimeout() {
        if(this.timeout != null) {
            window.clearTimeout(this.timeout);
            this.timeout = null;
        }
    }

}