import React, {useState} from "react";
import Dialog, {alert, confirm, modal} from "./dialog";
import {Button} from "../index";

export default function () {
    const [x, setX] = useState(false)
    const openModal = () => {
        const close = modal(
                <div>
                    div
                    <Button colors="secondary" onClick={() => close()}>close</Button>
                </div>)
    }
    return (
        <React.Fragment>
            <div className="wui-panel">
                <h4>Example1</h4>
                <Button colors="primary" onClick={() => setX(!x)}>打开模态框</Button>
                <Dialog visible={x}
                        buttons={[
                                <Button colors="secondary" onClick={() => setX(false)}>取消</Button>,
                                <Button colors="primary" onClick={() => setX(false)}>确定</Button>]}
                        onClose={() => setX(false)}>dialog</Dialog>
            </div>
            <div className="wui-panel">
                <h4>Alert、Confirm、Modal</h4>
                <button onClick={() => alert("alert")}
                        style={{marginRight: '10px'}}>alert</button>
                <button onClick={() => confirm("confirm", ()=>console.log('yes'), ()=>console.log('no'))}
                        style={{marginRight: '10px'}}>confirm</button>
                <button onClick={openModal}>modal</button>
            </div>
        </React.Fragment>
    )
}