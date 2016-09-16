import * as React from "react";


export class CircularLoader extends React.Component<any, any> {

    render() {
        return (
             <div className="tl-circular-loader">
                <svg className="circular" viewBox="25 25 50 50">
                    <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10"></circle>
                </svg>
             </div>
        );
    }
    
}