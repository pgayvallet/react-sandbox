import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";
import Animator from "../utils/animator";

export interface ModalBackdropOverlayProps {
    
    display : boolean
    
}

export default class ModalBackdropOverlay extends React.Component<ModalBackdropOverlayProps, {}> {

    private el : Element;
    
    render() {
        return (
            <div className="modal-backdrop"></div>    
        );
    }

    componentDidMount():void {
        this.el = ReactDOM.findDOMNode(this);
        if(this.props.display) {
            this.animateToShow();
        }
    }

    shouldComponentUpdate(nextProps:ModalBackdropOverlayProps, nextState:{}, nextContext:any):boolean {
        return false;
    }

    componentWillReceiveProps(nextProps:ModalBackdropOverlayProps, nextContext:any):void {
        var goingVisible = this.props.display === false && nextProps.display === true;
        var goingHidden = this.props.display === true && nextProps.display === false;
        if(goingVisible) {
            this.animateToShow();

        } else if (goingHidden) {
            this.animateToHide();
        }
    }

    animateToShow() {
        $(this.el).removeClass("hidden hide hide-active visible show show-active");
        this.el.classList.add("show");
        Animator.addClassAndWaitForTransitionEnd(this.el, "show-active").then(() =>  {
            $(this.el).removeClass("show show-active").addClass("visible");
        });
    }

    animateToHide() {
        $(this.el).removeClass("visible show show-active hidden hide hide-active");
        this.el.classList.add("hide");
        Animator.addClassAndWaitForTransitionEnd(this.el, "hide-active").then(() =>  {
            $(this.el).removeClass("hide hide-active").addClass("hidden");
        });
    }


}