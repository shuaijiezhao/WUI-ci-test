import * as React from "react";
import classes from "../handlers/classes";
import { ReactElement, useReducer} from "react";
import {reducer, valueContext} from "./valueContext";

interface Props {
    name: string,
    defaultValue: string,
    // selectedValue?: string,
    value?: string,
    onChange: () => void
    // size?: "lg" | "sm",
}

const RadioGroup: React.FunctionComponent<Props> = (props) => {
    const { name, defaultValue, children, ...others } = props;

    const [state, dispatch] = useReducer(reducer, {
        selectValue: defaultValue,
        name: name
    });

    return (
        <valueContext.Provider value={{ state, dispatch }}>
            <div className={classes("wui-radio-group")}>
                {React.Children.map(children, child => React.cloneElement(child as ReactElement, {...others}))}
            </div>
        </valueContext.Provider>
    )
};

export default RadioGroup;