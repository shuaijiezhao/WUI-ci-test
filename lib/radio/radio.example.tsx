import * as React from "react";
import Radio from "./radio";
import RadioGroup from "./radioGroup";
import RadioButton from "./radioButton";

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
            <div className="wui-panel">
                <h3><strong>竖方向 Radio</strong></h3><br/>
                <p>可以通过 style 来设置 radio 样式</p><br/>
                <RadioGroup defaultValue="1" name="fruits" onChange={handleChange}>
                    <Radio colors="primary" value="1" style={{display: 'block'}}>苹果</Radio>
                    <Radio colors="success" value="2" style={{display: 'block'}}>香蕉</Radio>
                    <Radio colors="info" value="3" style={{display: 'block'}}>葡萄</Radio>
                    <Radio colors="warning" value="4" style={{display: 'block'}}>菠萝</Radio>
                    <Radio colors="danger" value="5" style={{display: 'block'}}>梨</Radio>
                    <Radio colors="dark" value="6" style={{display: 'block'}}>石榴</Radio>
                </RadioGroup>
            </div>
            <div className="wui-panel">
                <h3><strong>RadioButton 基本使用</strong></h3><br/>
                <p>`defaultValue`参数设置被选中的radio值，`onChange`设置值改变的回调</p><br/>
                <div>
                    <RadioGroup defaultValue="orange" name="fruits" onChange={handleChange}>
                        <RadioButton value="apple" >apple</RadioButton>
                        <RadioButton value="banana" >banana</RadioButton>
                        <RadioButton value="orange" >orange</RadioButton>
                    </RadioGroup>
                </div>
                <div style={{marginTop: "15px"}}>
                    <RadioGroup defaultValue="apple" name="fruits" onChange={handleChange}>
                        <RadioButton value="apple" >apple</RadioButton>
                        <RadioButton value="banana" disabled>banana</RadioButton>
                        <RadioButton value="orange" >orange</RadioButton>
                    </RadioGroup>
                </div>
                <div style={{marginTop: "15px"}}>
                    <RadioGroup defaultValue="apple" name="fruits" onChange={handleChange}>
                        <RadioButton value="apple" disabled>apple</RadioButton>
                        <RadioButton value="banana" disabled>banana</RadioButton>
                        <RadioButton value="orange" disabled>orange</RadioButton>
                    </RadioGroup>
                </div>
            </div>
            <div className="wui-panel">
                <h3><strong>红色填充的 Radio</strong></h3><br/>
                <p>`inverse` 参数设置选中为红色填充</p><br/>
                <RadioGroup defaultValue="4" name="fruits" onChange={handleChange}>
                    <Radio value="1" inverse>苹果</Radio>
                    <Radio value="2" inverse>香蕉</Radio>
                    <Radio value="3" inverse>葡萄</Radio>
                </RadioGroup>
            </div>
        </React.Fragment>

    )
};

export default RadioExample;