import * as React from "react";
import classes from "../handlers/classes";
import "./checkbox.scss";
import {HTMLAttributes, useState} from "react";

interface Props extends HTMLAttributes<HTMLElement>{
    colors?: 'dark' | 'success' | 'info' | 'warning' | 'danger' | 'primary';
    disabled?: boolean;
    inverse?: boolean;
    checked?: boolean;
    onChange?: () => void;
    value?: string;
}

const Checkbox: React.FunctionComponent<Props> = (props) => {
    const { colors, onChange, disabled, inverse, className, checked, children, ...others } = props;
    const preCls: string = 'wui-checkbox';
    const [ isChecked, setIsChecked ] = useState(checked || false);
    const handlerClick = (): void => {
        if (onChange) {
            onChange();
        } else {
            setIsChecked(!isChecked)
        }
    };
    return (
        <label className={classes(className, preCls,
                colors !== undefined ? `${preCls}-${colors}` : undefined,
                disabled ? `disabled` : undefined,
                inverse !== undefined ? `${preCls}-inverse` : undefined,
                onChange && checked ? 'is-checked' : (isChecked ? "is-checked" : undefined))}
                onClick={handlerClick}>
            <input type="checkbox" disabled={disabled} {...others}/>
            <label className={preCls + '-label'}>{children}</label>
        </label>
    )
};

export default Checkbox;