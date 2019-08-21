import * as React from "react";
import classes from "../handlers/classes";
import {Dispatch, ReactElement, useReducer, useState} from "react";

interface Props {
    name: string,
    defaultValue: string,
    selectedValue?: string,
    value?: string,
    onChange: () => void
    // size?: "lg" | "sm",
}

interface IsState {
    selectValue: string
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


export const nameContext = React.createContext("");
export const selValue = React.createContext("");

const RadioGroup: React.FunctionComponent<Props> = (props) => {
    const { name, defaultValue, children, ...others } = props;
    const [ selectedValue, setSelectedValue ] = useState(defaultValue);

    const reducer = (state: IsState, action: ActionType) => {
        switch (action.type) {
            case "ONCHANTGE" :
                return {selectValue: action.payload}
                break;
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        selectValue: defaultValue
    });

    const handlerChange = (value: any) => {
        setSelectedValue(value);
    };

    return (
        <nameContext.Provider value={name}>
            <selValue.Provider value={selectedValue}>
                <valueContext.Provider value={{ state, dispatch }}>
                <div className={classes("wui-radio-group")} onChange={handlerChange}>
                    {React.Children.map(children, child => React.cloneElement(child as ReactElement, {...others}))}
                </div>
                </valueContext.Provider>
            </selValue.Provider>
        </nameContext.Provider>
    )
};

export default RadioGroup;