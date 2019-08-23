import * as React from "react";
import {CSSProperties, useContext} from "react";
import classes from "../handlers/classes";
import {valueContext} from "./valueContext";

import "./radio.scss";

/**
 * colors 颜色 样式
 * size 大小
 * inverse 样式 是否使用红色填充
 */
interface Props {
    colors?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'dark',
    size?: 'sm' | 'lg',
    disabled?: boolean,
    inverse?: boolean,
    prefix?: string,
    value: string,
    style?: CSSProperties
}

const Radio: React.FunctionComponent<Props> = (props) => {
    const { colors, size, style, value, inverse, prefix, disabled, children, ...others } = props;
    const labelCls = prefix === "wui-radio-button" ? prefix : "wui-radio";
    const { state, dispatch } = useContext(valueContext);

    const handleClick = () => {
        if (disabled) {
            return;
        }
        dispatch({type: "ONCHANGE", payload: value});
    };

    return (
        <label className={classes(labelCls,
            value === state.selectValue ? "is-checked" : undefined,
            disabled ? "disabled" : undefined,
            colors !== undefined ? `wui-radio-${colors}` : undefined,
            size !== undefined ? `wui-radio-${size}` : undefined,
            inverse !== undefined ? `wui-radio-inverse` : undefined)}
            onClick = {handleClick}
            style = {style}
            >
            <input name={state.name} type="radio" disabled={disabled} {...others}/>
            <label className={labelCls + '-label'}>{children}</label>
        </label>
    )
};

export default Radio;