import * as React from "react";
import Radio from "./radio";
// import RadioButton from "./radioButton";
import RadioGroup from "./radioGroup";

const RadioExample: React.FunctionComponent = () => {
    const handleChange = () => {};
    return (
        <React.Fragment>
            <div className="wui-panel">
                <h3><strong>Radio 基本用法</strong></h3><br/>
                <p>`defaultValue`设置默认被选中的radio值，`disabled`参数设置是否可用，`onChange`是值改变的回调</p><br/>
                <RadioGroup defaultValue="4" name="fruits" onChange={handleChange}>
                    <Radio value="1" disabled>苹果</Radio>
                    <Radio value="2" disabled>香蕉</Radio>
                    <Radio value="3" >葡萄</Radio>
                    <Radio value="4" >菠萝</Radio>
                    <Radio value="5" >梨</Radio>
                    <Radio value="6" >石榴</Radio>
                </RadioGroup>
            </div>
            <div className="wui-panel">
                <h3><strong>不同颜色的 radio</strong></h3><br/>
                <p>`colors`参数控制背景色</p><br/>
                <RadioGroup defaultValue="1" name="fruits" onChange={handleChange}>
                    <Radio colors="primary" value="1" >苹果</Radio>
                    <Radio colors="success" value="2" >香蕉</Radio>
                    <Radio colors="info" value="3" >葡萄</Radio>
                    <Radio colors="warning" value="4" >菠萝</Radio>
                    <Radio colors="danger" value="5" >梨</Radio>
                    <Radio colors="dark" value="6" >石榴</Radio>
                </RadioGroup>
            </div>
        </React.Fragment>

    )
};

export default RadioExample;