import * as React from "react";
import classes from "../handlers/classes";
import {Dispatch, ReactElement, useReducer} from "react";

interface Props {
    name: string,
    defaultValue: string,
    // selectedValue?: string,
    value?: string,
    onChange: () => void
    // size?: "lg" | "sm",
}

interface IsState {
    selectValue: string;
    name: string
}
interface ReducerContext {
    state: IsState;
    dispatch: Dispatch<ActionType>;
}
interface ActionType {
    type: string;
    payload: string
}
export const valueContext = React.createContext({} as ReducerContext);

const RadioGroup: React.FunctionComponent<Props> = (props) => {
    const { name, defaultValue, children, ...others } = props;

    const reducer = (state: IsState, action: ActionType) => {
        switch (action.type) {
            case "ONCHANGE" :
                return {...state, selectValue: action.payload};
                break;
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, {
        selectValue: defaultValue,
        name: name
    });

    const handlerChange = (value: any) => {
        dispatch({type: 'ONCHANGE', payload: value})
    };

    return (
        <valueContext.Provider value={{ state, dispatch }}>
            <div className={classes("wui-radio-group")} onChange={handlerChange}>
                {React.Children.map(children, child => React.cloneElement(child as ReactElement, {...others}))}
            </div>
        </valueContext.Provider>
    )
};

export default RadioGroup;