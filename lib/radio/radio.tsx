import * as React from "react";
import classes from "../handlers/classes";

import "./radio.scss";
import {useContext, useState} from "react";
import {context} from "./radioGroup";

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
    value: string | number
}

const Radio: React.FunctionComponent<Props> = (props) => {
    const { colors, size, inverse, prefix, disabled, children, ...others } = props;
    const labelCls = prefix === "wui-radio-button" ? prefix : "wui-radio";
    const [isChecked, setChecked] = useState(false);

    // useEffect(() => {
    //     console.log('-------');
    //     console.log(document.getElementsByClassName("is-checked"));
    // });

    return (
        <label className={classes(labelCls,
            isChecked ? "is-checked" : undefined,
            disabled ? "disabled" : undefined,
            colors !== undefined ? `wui-btn-${colors}` : undefined,
            size !== undefined ? `wui-btn-${size}` : undefined,
            inverse !== undefined ? `wui-btn-${inverse}` : undefined)}
            onClick={() => setChecked(true)}>
            <input name={useContext(context)} type="radio" disabled={disabled} {...others}/>
            <label className={labelCls + '-label'}>{children}</label>
        </label>
    )
};

export default Radio;