import React, {ButtonHTMLAttributes} from 'react';
import './button.scss';
import classes from '../handlers/classes';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    colors?: 'primary' | 'secondary' | 'accent' | 'success' | 'info' | 'warning' | 'danger' | 'dark' | 'light' | 'default',
    onClick?: React.MouseEventHandler,
    bordered?: 'border',
    size?: 'sm' | 'lg' | 'xg',
    shape?: 'block' | 'round' | 'border' | 'squared' | 'floating' | 'pillRight' | 'pillLeft' | 'icon',
    disabled?: boolean,
    btnType?: 'submit' | 'reset' | 'button'
}

const Button: React.FunctionComponent<Props> = (props) => {
    return (
        <button type={props.btnType} onClick={props.onClick} className={classes('wui-btn',
            props.colors !== undefined ? `wui-btn-${props.colors}` : undefined,
            props.bordered !== undefined ? `wui-btn-${props.bordered}` : undefined,
            props.size !== undefined ? `wui-btn-${props.size}` : undefined,
            props.shape !== undefined ? `wui-btn-${props.shape}` : undefined)} disabled={props.disabled}>
            {props.children}
        </button>
    )
};

export default Button