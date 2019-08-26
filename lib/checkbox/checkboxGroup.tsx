import * as React from "react";
import {HTMLAttributes, useState, ReactElement} from "react";
import classes from "../handlers/classes";

interface Props extends HTMLAttributes<HTMLElement>{
    value: Array<string>;
    disabled?: boolean;
}

const CheckboxGroup: React.FunctionComponent<Props> = (props) => {
    const { value, disabled, children, className, ...others } = props;
    const preCls: string = 'wui-checkbox-group';
    const [ values, setValues ] = useState(value);

    const handlerClick = (e: any) => {
        if (disabled) {
            return;
        }
        const index = value.indexOf(e.target.value);
        if (index < 0) {
            value.push(e.target.value);
        } else {
            value.splice(index, 1);
        }
        setValues(value);
        console.log(values);
    };

    return (
        <div className={classes(preCls, className)} {...others}>
            {React.Children.map(children, child => {
                return React.cloneElement(child as ReactElement, {
                    onClick: handlerClick
                })
            })}
        </div>
    )
};

export default CheckboxGroup;