import React from 'react';
import './button.scss';
import classes from '../handlers/classes';

interface Props {
    colors?: string
}

const Button: React.FunctionComponent<Props> = (props) => {
    return (
        <button className={classes('wui-btn', `wui-btn-${props.colors}`)}>
            {props.children}
        </button>
    )
}

export default Button