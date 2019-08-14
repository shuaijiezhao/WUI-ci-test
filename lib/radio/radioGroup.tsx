import * as React from "react";
import classes from "../handlers/classes";

interface Props {
    name: string,
    defaultValue?: string | number | boolean,
    selectedValue?: string | number | boolean,
    value?: string | number | boolean,
    // size?: "lg" | "sm",
}

export const context = React.createContext("");

const RadioGroup: React.FunctionComponent<Props> = (props) => {
    const { name, selectedValue, children } = props;
    console.log('group---', name, selectedValue);

    return (
        <context.Provider value={name}>
            <div className={classes("wui-radio-group")}>
                {children}
            </div>
        </context.Provider>
    )
};

export default RadioGroup;