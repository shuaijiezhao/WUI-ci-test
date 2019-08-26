import * as React from "react";
import Checkbox from "./checkbox";
import {Fragment, useState} from "react";
import Button from "../button/button";
import CheckboxGroup from "./checkboxGroup";

const CheckboxExample: React.FunctionComponent = () => {
    const isChecked = useISSelf(false);
    const isDisable = useISSelf(false);

    return (
        <Fragment>
            <div className="wui-panel">
                <h3><strong>基本用法</strong></h3><br/>
                <p>`checked` 参数设置是否选中，`disabled`设置是否可用</p><br/>
                <Checkbox disabled className="test"></Checkbox>
                <Checkbox disabled className="test1" checked></Checkbox>
                <Checkbox className="test2">checkbox</Checkbox>
            </div>
            <div className="wui-panel">
                <h3><strong>不同颜色的 Checkbox</strong></h3><br/>
                <p>不同颜色的 Checkbox</p><br/>
                <Checkbox colors="primary">primary</Checkbox>
                <Checkbox colors="success">success</Checkbox>
                <Checkbox colors="info">info</Checkbox>
                <Checkbox colors="danger">danger</Checkbox>
                <Checkbox colors="warning">warning</Checkbox>
                <Checkbox colors="dark">dark</Checkbox>
            </div>
            <div className="wui-panel">
                <h3><strong>受控的 Checkbox</strong></h3><br/>
                <p>`checked` 参数设置是否选中，`disabled`设置是否可用。</p><br/>
                <p>
                    <Button colors="secondary" style={{marginRight: "8px"}}
                            onClick={isChecked.handlerChange}>{isChecked.value ? 'unCheck' : "check"}</Button>
                    <Button colors="secondary" onClick={isDisable.handlerChange}>{isDisable.value ? "enable" : "disable"}</Button>
                </p>
                <p>
                    <Checkbox disabled={isDisable.value} checked={isChecked.value} onChange={isChecked.handlerChange}>
                        {`${isDisable.value ? "disable" : "enable"} - ${isChecked.value ? "check" : "unCheck"}`}
                    </Checkbox>
                </p>
            </div>
            <div className="wui-panel">
                <h3><strong>CheckboxGroup 基本使用</strong></h3><br/>
                <p>`value` 参数设置默认值，`onChange`设置值改变的回调，`disabled`设置是否可用</p><br/>
                <CheckboxGroup value={[]} style={{marginBottom: "10px"}}>
                    <Checkbox value='1'>1</Checkbox>
                    <Checkbox value='2' checked>2</Checkbox>
                    <Checkbox value='3'>3</Checkbox>
                    <Checkbox value='4' disabled>4</Checkbox>
                    <Checkbox value='5'>5</Checkbox>
                </CheckboxGroup>
            </div>
        </Fragment>
    )
};

const useISSelf = (initialValue: boolean) => {
    const [value, setValue] = useState(initialValue);
    const handlerChange = () => setValue(!value);
    return {
        value,
        handlerChange
    }
};

export default CheckboxExample;