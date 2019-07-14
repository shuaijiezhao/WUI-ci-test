import * as React from "react";
import classes from "../handlers/classes";
import {useState} from "react";

import "./switch.scss"

interface Props {
    checked: boolean,
    // defaultChecked: boolean,
    // onChange: React.MouseEventHandler,
    checkedchildren?: any,
    uncheckedchildren?: any,
    disabled?: boolean,
    size?: "sm" | "lg",
    colors?: "primary" | "success" | "info" | "dark" | "warning",
    className?: string
}

export {Props};

const Switch: React.FunctionComponent<Props> = (props) => {
    const { className, ...others } = props;
    const [isChecked, setChecked] = useState(props.checked);

    return (
        <span className={classes("wui-switch",
                        isChecked ? "is-checked" : "",
                        props.size ? `wui-switch-${props.size}` : "",
                        props.disabled ? `wui-switch-disabled` : "",
                        className)}
              onClick={() => {!props.disabled && setChecked(!isChecked)}}
              { ...others }>
            <span className={classes("wui-switch-inner")}>
                {isChecked ? props.checkedchildren : props.uncheckedchildren}
            </span>
        </span>
    )
}

export default Switch;