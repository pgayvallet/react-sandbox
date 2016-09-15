
import ComponentDecorator = ReactRedux.ComponentDecorator;
import MapDispatchToPropsObject = ReactRedux.MapDispatchToPropsObject;
import MapDispatchToPropsFunction = ReactRedux.MapDispatchToPropsFunction;
import FuncOrSelf = ReactRedux.FuncOrSelf;
import MapStateToProps = ReactRedux.MapStateToProps;

import { connect as reduxConnect } from 'react-redux';
import * as _ from 'lodash';


/**
 * Overload the redux base connect method to always add locale to the state, to allow rerender on language change,
 * without having to verbosely add { language : state.i18n.currentLanguage } on every connect functions
 *
 * @see react-redux/index.d.ts
 *
 * @param mapStateToProps
 * @param mapDispatchToProps
 */
export function connect<TStateProps, TDispatchProps, TOwnProps>(
    mapStateToProps: FuncOrSelf<MapStateToProps<TStateProps, TOwnProps>>,
    mapDispatchToProps?: FuncOrSelf<MapDispatchToPropsFunction<TDispatchProps, TOwnProps>|MapDispatchToPropsObject>
): ComponentDecorator<TStateProps & TDispatchProps, TOwnProps> {
    
    let wrappedMapStateToProps : MapStateToProps<TStateProps, TOwnProps>;
    
    let getLocale = (state) : string => {
        return state.i18n.locale;
    };
    
    if(mapStateToProps == null) {
        wrappedMapStateToProps = (state : TStateProps) => {
            return { locale : getLocale(state) } as any;
        };
        
    } else {
        let mapStateToPropsArgsLength = (mapStateToProps as any).length;
        if(mapStateToPropsArgsLength === 1) {
            wrappedMapStateToProps = (state : TStateProps) => {
                return _.extend({ locale : getLocale(state) }, (mapStateToProps as any)(state)) as any;
            };
        } else {
            wrappedMapStateToProps = (state : TStateProps, props : TOwnProps) => {
                return _.extend({ locale : getLocale(state) }, (mapStateToProps as any)(state, props)) as any;
            };
        }
    }
    
    return reduxConnect(
        wrappedMapStateToProps,
        mapDispatchToProps as MapDispatchToPropsFunction<TDispatchProps, TOwnProps>
    );
}