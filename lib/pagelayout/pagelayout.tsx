import React, {ReactElement} from "react";
import Aside from "./aside";
import {scopedClassMaker} from "../handlers/classes";
import "./pagelayout.scss";

const scm = scopedClassMaker('wui-layout');

interface Props extends React.HTMLAttributes<HTMLElement>{
    children: ReactElement | Array<ReactElement>
}

const Pagelayout: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    const childrenAsArray = props.children as Array<ReactElement>;
    const hasAside = 'length' in childrenAsArray &&
                        childrenAsArray.reduce((result, node) => result || node.type === Aside, false)
    return (
        <div className={scm({'': true, hasAside}, {extra: className})} {...rest}>
            {props.children}
        </div>
    )
}

export default Pagelayout;
export {Pagelayout};
export {default as Header} from './header';
export {default as Content} from './content';
export {default as Aside} from './aside';
export {default as Footer} from './footer';
