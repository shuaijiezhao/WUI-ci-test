import * as React from "react";
import { HTMLAttributes, UIEventHandler, MouseEventHandler, TouchEventHandler, useState, useEffect, useRef } from "react";
import scrollBarWidth from "./scroll-width";
import "./scroll.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
    onPull?: ()=>void;
    refreshIconRender?: ()=>React.ReactElement
}

// 是否是手机端，pc端没有 ontouch 事件
const isTouchDevice: boolean = 'ontouchstart' in document;

/**
 * 滚动条组件
 * @param refreshIconRender 用来渲染自定义的刷新图标 
 */
const Scroll: React.FC<Props> = (props) => {
    const { children, onPull, refreshIconRender, ...rest } = props;
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [barHeight, setBarHeight] = useState(0);
    const [barTop, _setBarTop] = useState(0);

    const [barVisible, setBarVisible] = useState(false);
    const timeoutIdRef = useRef<number | null>(null);

    const useWrapperRefRect = () => {
        const { current } = wrapperRef;
        const scrollHeight = current!.scrollHeight;
        const scrollTop = current!.scrollTop;
        const viewHeight = current!.getBoundingClientRect().height;
        const viewTop = current!.scrollTop
        return { scrollHeight, viewHeight, viewTop, scrollTop }
    }

    const [translateY, _setTranslateY] = useState(0);
    const lastYRef = useRef(0);
    const moveCount = useRef(0);
    const pulling = useRef(false);

    const setTranslateY = (y: number) => {
        if (y < 0) {
            y = 0;
        } else if (y > 100) {
            y = 100;
        }
        _setTranslateY(y);
    }

    const onTouchStart: TouchEventHandler = (e) => {
        const { scrollTop } = useWrapperRefRect();
        if (scrollTop !== 0) return;
        pulling.current = true;
        lastYRef.current = e.touches[0].clientY;
        moveCount.current = 0;
    }

    const onTouchMove: TouchEventHandler = (e) => {
        const deltaY = e.touches[0].clientY - lastYRef.current;
        moveCount.current += 1;
        if (moveCount.current === 1 && deltaY < 0) {
            pulling.current = false;
            return;
        }
        if (!pulling.current) return;
        setTranslateY(translateY + deltaY);
        lastYRef.current = e.touches[0].clientY;
    }

    const onTouchEnd = () => {
        if (pulling.current) {
            _setTranslateY(0);
            onPull && onPull();
            pulling.current = false;
        }
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
        wrapperRef.current && draggingRef.current && e.preventDefault();
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
            <div ref={wrapperRef} className={"wui-scroll-wrapper"} 
                 style={{right: -scrollBarWidth(), transform: `translateY(${translateY}px)`}}
                 onTouchStart={onTouchStart}
                 onTouchMove={onTouchMove}
                 onTouchEnd={onTouchEnd}
                 onScroll={onScroll}>
                {children}
            </div>
            {
                (!isTouchDevice || barVisible) && <div className={"wui-scroll-track"}>
                    <div className="wui-scroll-bar" style={{height: barHeight, transform: `translateY(${barTop}px)`}}
                        onMouseDown={onMouseDownBar}></div>
                </div>
            }
            <div className="wui-scroll-pulling" style={{height: translateY}}>
                {
                    translateY === 100 ? 
                    <span className="wui-scroll-pulling-text">松开立即刷新</span> : 
                    (props.refreshIconRender && props.refreshIconRender() || <span className="wui-scroll-pulling-icon">↓</span> )
                }
            </div>
        </div>
    )
}

export default Scroll;