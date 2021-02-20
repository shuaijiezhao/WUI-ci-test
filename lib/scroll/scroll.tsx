import * as React from "react";
import { HTMLAttributes, UIEventHandler, MouseEventHandler, useState, useEffect, useRef } from "react";
import scrollBarWidth from "./scroll-width";
import "./scroll.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {}

// 是否是手机端，pc端没有 ontouch 事件
const isTouchDevice: boolean = 'ontouchstart' in document;

const Scroll: React.FC<Props> = (props) => {
    const { children, ...rest } = props;
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [barHeight, setBarHeight] = useState(0);
    const [barTop, _setBarTop] = useState(0);
    const [barVisible, setBarVisible] = useState(false);
    const timeoutIdRef = useRef<number | null>(null);

    const useWrapperRefRect = () => {
        const { current } = wrapperRef;
        const scrollHeight = current!.scrollHeight;
        const viewHeight = current!.getBoundingClientRect().height;
        const viewTop = current!.scrollTop
        return { scrollHeight, viewHeight, viewTop }
    }

    useEffect(() => {
        const { viewHeight, scrollHeight } = useWrapperRefRect();
        setBarHeight(viewHeight*viewHeight / scrollHeight);
    }, [])

    const onScroll: UIEventHandler = (e) => {
        const { scrollHeight, viewHeight, viewTop } = useWrapperRefRect();
        _setBarTop(viewTop*viewHeight / scrollHeight);
        
        if (isTouchDevice) {
            setBarVisible(true);
            timeoutIdRef.current && window.clearTimeout(timeoutIdRef.current);
            timeoutIdRef.current = window.setTimeout(() => {
                setBarVisible(false);
            }, 300)
        }
    }

    const draggingRef = useRef(false);
    const firstYRef = useRef(0);
    const firstBarTopRef = useRef(0);

    const setBarTop = (num: number) => {
        const { scrollHeight, viewHeight } = useWrapperRefRect();
        const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight;
        if (num >= 0 && num < maxBarTop) {
            _setBarTop(num);
        }
    }

    const onMouseDownBar: MouseEventHandler = (e) => {
        draggingRef.current = true;
        firstYRef.current = e.clientY;
        firstBarTopRef.current = barTop;
    }

    const onMouseUpBar = () => {
        draggingRef.current = false;
    }

    const onMouseMoveBar = (e: any) => {
        if (draggingRef.current) {
            const delta = e.clientY - firstYRef.current;
            const newBarTop = firstBarTopRef.current + delta;
            setBarTop(newBarTop);
            // 这里可能回存在一个问题：newBarTop 可能不是最新的，因为setBarTop() 可能回延迟一小会
            const { scrollHeight, viewHeight } = useWrapperRefRect();
            wrapperRef.current!.scrollTop = newBarTop * scrollHeight / viewHeight;
        }
    }

    const onSelectStart = (e: any) => {
        wrapperRef.current && e.preventDefault();
    }

    useEffect(() => {
        document.addEventListener('mouseup', onMouseUpBar);
        document.addEventListener('mousemove', onMouseMoveBar);
        document.addEventListener('selectstart', onSelectStart);

        return () => {
            document.removeEventListener('mouseup', onMouseUpBar);
            document.removeEventListener('mousemove', onMouseMoveBar);
            document.removeEventListener('selectstart', onSelectStart);
        }
    }, [])

    return (
        <div className={"wui-scroll"} {...rest}>
            <div ref={wrapperRef} className={"wui-scroll-wrapper"} style={{right: -scrollBarWidth()}}
                 onScroll={onScroll}>
                {children}
            </div>
            {
                !isTouchDevice && !barVisible && <div className={"wui-scroll-track"}>
                    <div className="wui-scroll-bar" style={{height: barHeight, transform: `translateY(${barTop}px)`}}
                        onMouseDown={onMouseDownBar}></div>
                </div>
            }
            
        </div>
    )
}

export default Scroll;