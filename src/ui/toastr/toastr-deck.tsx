import * as React from "react";
import * as ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { connect } from 'react-redux';
import {Toast} from "./toastr-model";

interface ToastrDeckProps {
    
    toasts : Toast[]
    
}

const mapStateToProps = (state) : ToastrDeckProps => {
    return {
        toasts : state.toastr.toasts
    };
};

//@connect(mapStateToProps)
class _ToastrDeck extends React.Component<ToastrDeckProps, any> {

    render() {
        return (
            <div className="toastr-deck">
                <ReactCSSTransitionGroup component="div" className="toastr-transition"
                                         transitionName="toast"
                                         transitionEnterTimeout={250} transitionLeaveTimeout={250}>
                    {this.props.toasts.map(t => {
                        return <div className="toast" key={t.id}>this is a toast !</div>;
                    })}
                </ReactCSSTransitionGroup>
            </div>
        );
    }

}

export let ToastrDeck = connect(mapStateToProps)(_ToastrDeck);


