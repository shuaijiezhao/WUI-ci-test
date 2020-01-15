import * as React from "react";
import {HTMLAttributes, ReactNode} from "react";
import classes from "../handlers/classes";
import "./badge.scss";

interface Props extends HTMLAttributes<HTMLElement> {
    colors?: 'primary' | 'accent' | 'success' | 'info' | 'warning' | 'danger' | 'default',
    dataBadge?: string | object | ReactNode,
    dataBadgePlacement?: 'top' | 'bottom',
}

const Badge: React.FunctionComponent<Props> = (props) => {
    const { colors, className, children, dataBadge, dataBadgePlacement, ...others } = props;

    const clsPrefix = 'wui-badge';

    return (
        <span className={classes(clsPrefix, className,
                colors !== undefined ? `${clsPrefix}-${colors}` : undefined,
                dataBadgePlacement !== undefined ? `${clsPrefix}-${dataBadgePlacement}` : undefined,
                dataBadge !== undefined ? 'data-badge' : undefined
            )} {...others}>
            {dataBadge && (<span>{children}<span className='data-icon'>{dataBadge}</span></span>)}
            {!dataBadge && (<span className='badge-single'>{children}</span>)}
        </span>
    )
}

export default Badge;