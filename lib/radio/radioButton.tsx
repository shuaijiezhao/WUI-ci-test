import * as React from "react";
import Radio from "./radio";

interface Props {
    value: string;
    style?: {};
    disabled?: boolean;
}

const RadioButton: React.FunctionComponent<Props> = (props) => {
    return (
        <Radio prefix="wui-radio-button" {...props}/>
    )
};

export default RadioButton;