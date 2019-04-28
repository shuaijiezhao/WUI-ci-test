import React from "react";
import {scopedClassMaker} from "../handlers/classes";

const scm = scopedClassMaker('wui-layout');

interface Props extends React.HTMLAttributes<HTMLElement>{
}

const Header: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <div className={scm("header", {extra: className})} {...rest}>
            {props.children}
        </div>
    )
}

export default Header;