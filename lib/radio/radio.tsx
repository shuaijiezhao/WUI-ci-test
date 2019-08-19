import * as React from "react";
import classes from "../handlers/classes";

import "./radio.scss";
import {useContext} from "react";
import {nameContext, selValue} from "./radioGroup";

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
    const { colors, size, value, inverse, prefix, disabled, children, ...others } = props;
    const labelCls = prefix === "wui-radio-button" ? prefix : "wui-radio";
    // const [isChecked, setChecked] = useState(value === useContext(selValue));
    // const [val, dispatch] = useValue();

    return (
        <label className={classes(labelCls,
            value === useContext(selValue) ? "is-checked" : undefined,
            disabled ? "disabled" : undefined,
            colors !== undefined ? `wui-btn-${colors}` : undefined,
            size !== undefined ? `wui-btn-${size}` : undefined,
            inverse !== undefined ? `wui-btn-${inverse}` : undefined)}
            >
            <input name={useContext(nameContext)} type="radio" disabled={disabled} {...others}/>
            <label className={labelCls + '-label'}>{children}</label>
        </label>
    )
};

export default Radio;