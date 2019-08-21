import * as React from "react";
import classes from "../handlers/classes";
import {ReactElement, useState} from "react";

interface Props {
    name: string,
    defaultValue: string,
    selectedValue?: string,
    value?: string,
    onChange: () => void
    // size?: "lg" | "sm",
}

export const nameContext = React.createContext("");
export const selValue = React.createContext("");

const RadioGroup: React.FunctionComponent<Props> = (props) => {
    const { name, defaultValue, children, ...others } = props;
    const [ selectedValue, setSelectedValue ] = useState(defaultValue);

    const handlerChange = (value: any) => {
        setSelectedValue(value);
    };

    console.log('--------' + JSON.stringify(others));

    return (
        <nameContext.Provider value={name}>
            <selValue.Provider value={selectedValue}>
                <div className={classes("wui-radio-group")} onChange={handlerChange}>
                    {React.Children.map(children, child => React.cloneElement(child as ReactElement, {...others}))}
                </div>
            </selValue.Provider>
        </nameContext.Provider>
    )
};

export default RadioGroup;