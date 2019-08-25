import * as React from "react";
import {HTMLAttributes, useState} from "react";
import classes from "../handlers/classes";
import {ReactElement} from "react";

interface Props extends HTMLAttributes<HTMLElement>{
    value: Array<string>;
    disabled?: boolean;
}

const CheckboxGroup: React.FunctionComponent<Props> = (props) => {
    const { value, disabled, children, className, ...others } = props;
    const preCls: string = 'wui-checkbox-group';
    const [ values, setValues ] = useState(value);
    let selValues: Array<string> = [...value];
    const handlerChange = (e: any) => {
        if (disabled) {
            return;
        }
        console.log("E------" + value.indexOf(e.target.value));
        let index = value.indexOf(e.target.value);
        if (index < 0) {
            console.log(11111);
            selValues.push(e.target.value);
            console.log("values-----------" + values);
        } else {
            values.splice(index, 1)
        }
        setValues(selValues);
        console.log("[]-------" + value);
    };

    return (
        <div className={classes(preCls, className)} {...others}>
            {React.Children.map(children, child => {
                return React.cloneElement(child as ReactElement, {
                    onChange: handlerChange,
                    disabled,
                })
            })}
        </div>
    )
};

export default CheckboxGroup;