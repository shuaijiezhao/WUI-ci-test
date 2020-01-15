import * as React from "react";
import {HTMLAttributes, useState} from "react";
import classes from "../handlers/classes";
import Icon from "../icon/icon";
import "./tag.scss";

interface Props extends HTMLAttributes<HTMLElement> {
    style?: object,
    bordered?: boolean,
    colors?: string,
    disabled?: boolean,
    deleted?: boolean,
    select?: boolean,
    visible?: boolean,
    className?: string,
    tagClick?: React.MouseEventHandler,
    onClose?: React.MouseEventHandler,
}

const Tag: React.FC<Props> = (props) => {
    const {colors, disabled, select, deleted, className, bordered, children, visible, onClose, tagClick, ...others} = props;
    const [selected, setSelected] = useState(false);

    const clsPrefix: string = 'wui-tag';

    const handlerTagClick: React.MouseEventHandler = (e) => {
        setSelected(!selected);
        tagClick && tagClick(e);
    };

    const IconSty: object = {
        transform: 'scale(1.5)',
        marginLeft: '5px',
        cursor: 'pointer'
    };

    return (
        <span className={classes(clsPrefix, className,
                colors !== undefined ? `${clsPrefix}-${colors}` : undefined,
                deleted !== undefined ? `${clsPrefix}-deleted` : undefined,
                bordered !== undefined ? `${clsPrefix}-border` : undefined,
                select !== undefined ? `${clsPrefix}-select` : undefined,
                disabled ? `${clsPrefix}-disabled` : undefined,
                select && selected ? `${clsPrefix}-selected` : undefined
            )} onClick={handlerTagClick} {...others}>
            {children}
            {visible ? <Icon name='deleteX' style={IconSty} onClick={(e) => onClose && onClose(e)}/> : null}
        </span>
    )
};

export default Tag;