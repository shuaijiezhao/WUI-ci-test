import * as React from "react";
import Checkbox from "./checkbox";
import {Fragment, useState} from "react";
import Button from "../button/button";
// import CheckboxGroup from "./checkboxGroup";

const CheckboxExample: React.FunctionComponent = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isDisable, setIsDisable] = useState(false);

    const disabledClick = () => {
        setIsDisable(!isDisable);
    };
    const checkClick = () => {
        setIsChecked(!isChecked);
    };

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
                            onClick={checkClick}>{isChecked ? 'unCheck' : "check"}</Button>
                    <Button colors="secondary" onClick={disabledClick}>{isDisable ? "enable" : "disable"}</Button>
                </p>
                <p>
                    <Checkbox disabled={isDisable} checked={isChecked} onChange={checkClick}>
                        {`${isDisable ? "disable" : "enable"} - ${isChecked ? "check" : "unCheck"}`}
                    </Checkbox>
                </p>
            </div>
            {/*<div className="wui-panel">*/}
                {/*<h3><strong>CheckboxGroup 在 form 中使用</strong></h3><br/>*/}
                {/*<p>`value` 参数设置默认值，`onChange`设置值改变的回调。</p><br/>*/}
                {/*<CheckboxGroup value={[]}>*/}
                    {/*<Checkbox value='1'>1</Checkbox>*/}
                    {/*<Checkbox value='2'>2</Checkbox>*/}
                    {/*<Checkbox value='3'>3</Checkbox>*/}
                    {/*<Checkbox value='4'>4</Checkbox>*/}
                    {/*<Checkbox value='5'>5</Checkbox>*/}
                {/*</CheckboxGroup>*/}
            {/*</div>*/}
        </Fragment>
    )
};

export default CheckboxExample;