import * as React from "react";
import { HTMLAttributes } from "react";
import scrollBarWidth from "./scroll-width";
import "./scroll.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Scroll: React.FC<Props> = (props) => {
    const { children, ...rest } = props;

    return (
        <div className={"wui-scroll"} {...rest}>
            <div className={"wui-scroll-wrapper"} style={{right: -scrollBarWidth()}}>
                {children}
            </div>
        </div>
    )
}

export default Scroll;