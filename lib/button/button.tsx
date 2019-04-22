import React from 'react';
import './button.scss';
import classes from '../handlers/classes';

interface Props {
    colors?: string,
    onClick?: React.MouseEventHandler
}

const Button: React.FunctionComponent<Props> = (props) => {
    return (
        <button onClick={props.onClick} className={classes('wui-btn', `wui-btn-${props.colors}`)}>
            {props.children}
        </button>
    )
}

export default Button