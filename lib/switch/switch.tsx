import * as React from "react";
import classes from "../handlers/classes";
import {useState} from "react";

import "./switch.scss"

interface Props {
    checked: boolean,
    // defaultChecked: boolean,
    // onChange: React.MouseEventHandler,
    disabled?: boolean,
    size?: "sm" | "lg",
    colors?: "primary" | "success" | "info" | "dark" | "warning"
}

const Switch: React.FunctionComponent<Props> = (props) => {
    const [isChecked, setChecked] = useState(props.checked);

    return (
        <span className={classes("wui-switch",
                        isChecked ? "is-checked" : "")} onClick={() => {setChecked(!isChecked)}}>
            <span className={classes("wui-switch-inner")}></span>
        </span>
    )
}

export default Switch;