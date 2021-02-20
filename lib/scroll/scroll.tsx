import * as React from "react";
import { HTMLAttributes, UIEventHandler, useState, useEffect, useRef } from "react";
import scrollBarWidth from "./scroll-width";
import "./scroll.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Scroll: React.FC<Props> = (props) => {
    const { children, ...rest } = props;
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [barHeight, setBarHeight] = useState(0);
    const [barTop, setBarTop] = useState(0);

    useEffect(() => {
        const { current } = wrapperRef;
        const scrollHeight = current!.scrollHeight;
        const viewHeight = current!.getBoundingClientRect().height;
        setBarHeight(viewHeight*viewHeight / scrollHeight);
    }, [])

    const onScroll: UIEventHandler = (e) => {
        const { current } = wrapperRef;
        const scrollHeight = current!.scrollHeight;
        const viewHeight = current!.getBoundingClientRect().height;
        const viewTop = current!.scrollTop;
        setBarTop(viewTop*viewHeight / scrollHeight);
    }

    return (
        <div className={"wui-scroll"} {...rest}>
            <div ref={wrapperRef} className={"wui-scroll-wrapper"} style={{right: -scrollBarWidth()}}
                 onScroll={onScroll}>
                {children}
            </div>
            <div className={"wui-scroll-track"}>
                <div className="wui-scroll-bar" style={{height: barHeight, transform: `translateY(${barTop}px)`}}></div>
            </div>
        </div>
    )
}

export default Scroll;