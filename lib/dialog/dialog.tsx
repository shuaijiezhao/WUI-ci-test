import React, {Fragment, ReactElement, ReactNode} from "react";
import ReactDOM from "react-dom";
import {Icon} from '../index'
import {scopedClassMaker} from "../handlers/classes";

import './dialog.scss';

interface Props {
    visible: boolean,
    buttons?: Array<ReactElement>,
    onClose: React.MouseEventHandler,
    closeOnClickMask?: boolean
}

const scopedClass = scopedClassMaker('wui-dialog')

const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClose: React.MouseEventHandler = (e) => {
        props.onClose(e)
    }
    const onClickMask: React.MouseEventHandler = (e) => {
        if (props.closeOnClickMask) {
            props.onClose(e)
        }
    }
    const portal = props.visible ?
        <Fragment>
            <div className={scopedClass('mask')} onClick={onClickMask}></div>
            <div className={scopedClass('')}>
                <div className={scopedClass('close')} onClick={onClose}>
                    <Icon name="close" />
                </div>
                <header className={scopedClass('header')}>
                    提示
                </header>
                <main className={scopedClass('body')}>
                    {props.children}
                </main>
                {props.buttons &&
                <footer className={scopedClass('footer')}>
                    {props.buttons &&  props.buttons.map((button, index)=> React.cloneElement(button, {key: index}))}
                </footer>}
            </div>
        </Fragment> :
        null
    return (
        ReactDOM.createPortal(portal, document.body)
    );
}

Dialog.defaultProps = {
    closeOnClickMask: true
}

const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: ()=>void) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    }
    const component = (
        <Dialog
            visible={true}
            buttons={buttons}
            onClose={() => {
                onClose();
                afterClose && afterClose();
            }}
        >{content}</Dialog>
    )
    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component, div);
    return onClose;
}

const alert = (content: string) => {
    modal(content);
}

const confirm = (content: string, yes: ()=>void, no: ()=>void) => {
    const onYes = () => {
        close();
        yes && yes();
    }
    const onNo = () => {
        close();
        no && no();
    }
    const buttons = [
            <button onClick={onNo} style={{marginRight: '10px'}}>取消</button>,
            <button onClick={onYes}>确定</button>
        ]
    const close = modal(content, buttons, no)
}

export {alert, confirm, modal};
export default Dialog;