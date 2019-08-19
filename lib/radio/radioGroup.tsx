import * as React from "react";
import classes from "../handlers/classes";
import {useContext} from "react";

interface Props {
    name: string,
    defaultValue: string,
    selectedValue?: string,
    value?: string,
    // size?: "lg" | "sm",
}

export const nameContext = React.createContext("");
export const selValue = React.createContext("");

const RadioGroup: React.FunctionComponent<Props> = (props) => {
    const { name, defaultValue, children } = props;

    return (
        <nameContext.Provider value={name}>
            <selValue.Provider value={defaultValue}>
                <div className={classes("wui-radio-group")}>
                    {children}
                </div>
            </selValue.Provider>
        </nameContext.Provider>
    )
};

export const useValue = () => useContext(selValue);

export default RadioGroup;