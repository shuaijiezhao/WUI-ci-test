import * as React from "react";
import Radio from "./radio";
// import RadioButton from "./radioButton";
import RadioGroup from "./radioGroup";

const RadioExample: React.FunctionComponent = () => {
    const handleChange = () => {};
    return (
        <RadioGroup defaultValue="4" name="fruits" onChange={handleChange}>
            <Radio value="1" disabled>苹果</Radio>
            <Radio value="2" disabled>香蕉</Radio>
            <Radio value="3" >葡萄</Radio>
            <Radio value="4" >菠萝</Radio>
            <Radio value="5" >梨</Radio>
            <Radio value="6" >石榴</Radio>
        </RadioGroup>
    )
};

export default RadioExample;