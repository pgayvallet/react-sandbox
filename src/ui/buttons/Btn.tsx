import * as React from "react";
import * as classNames from "classnames";

interface BtnProps {

    className? : string
    onClick?   : (...args: any[]) => any

}

export class Btn extends React.Component<BtnProps, any> {

    render() {
        return (
            <button {...this.props} className={classNames("btn", this.props.className)}>
                {this.props.children}
            </button>
        );
    }

}


export class BtnPrimary extends React.Component<BtnProps, any> {
    render() {
        return <Btn {...this.props} className={classNames(this.props.className, "btn-primary")}/>
    }
}

export class BtnSecondary extends React.Component<BtnProps, any> {
    render() {
        return <Btn {...this.props} className={classNames(this.props.className, "btn-secondary")}/>
    }
}

export class BtnWarning extends React.Component<BtnProps, any> {
    render() {
        return <Btn {...this.props} className={classNames(this.props.className, "btn-warning")}/>
    }
}

export class BtnDanger extends React.Component<BtnProps, any> {
    render() {
        return <Btn {...this.props} className={classNames(this.props.className, "btn-danger")}/>
    }
}

export class BtnSuccess extends React.Component<BtnProps, any> {
    render() {
        return <Btn {...this.props} className={classNames(this.props.className, "btn-success")}/>
    }
}