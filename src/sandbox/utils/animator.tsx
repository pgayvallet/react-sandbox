import * as _ from "lodash";
import * as $ from "jquery";
import * as Promise from "bluebird";

const VENDORS_TRANSITION_EVENTS = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";

/**
 * Utility class around animations
 */
export default class Animator {

    /**
     * Add given `cssClass̀  to given `el`, and waits for the transitioned event to trigger for at max `timeout` ms.
     * 
     * @param el
     * @param cssClass
     * @param timeout
     * @return {Promise<void>}
     */
    static addClassAndWaitForTransitionEnd(el : Element, cssClass : string, timeout : number = 1500) : Promise<void> {
        return new Promise<void>((resolve, reject) => {
            let jqEl = $(el);
            let callbackFired = false;

            let transitionEndCallback = () => {
                resolve();
                callbackFired = true;
                window.clearTimeout(timeoutId);
            };

            let timeoutCallback = () => {
                // callback already fired, we are arriving second. Promise already resolved, we do nothing.
                if(callbackFired) {
                    return;
                }
                jqEl.unbind(VENDORS_TRANSITION_EVENTS, transitionEndCallback);
                resolve();
            };

            jqEl.one(VENDORS_TRANSITION_EVENTS, transitionEndCallback);
            let timeoutId = _.delay(timeoutCallback, timeout);

            _.defer(() => {
                jqEl.addClass(cssClass);
            });
        });
    }
    
}