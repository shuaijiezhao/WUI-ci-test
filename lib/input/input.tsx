import * as React from "react";
import {InputHTMLAttributes} from "react";
import classes from "../handlers/classes";

import "./input.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement>{

}

const Input: React.FunctionComponent<Props> = (props) => {
    const { className, ...others } = props;
    return (
        <input className={classes("wui-input", className)} {...others} />
    )
};
export default Input;