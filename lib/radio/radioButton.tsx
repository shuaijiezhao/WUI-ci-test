import * as React from "react";
import Radio from "./radio";

interface Props {
    value: string | number,
    style?: {},
    prefix?: 'wui-radio-button'
}

const RadioButton: React.FunctionComponent<Props> = (props) => {
    return (
        <Radio {...props}/>
    )
};

export default RadioButton;