import React from "react";
import Icon from "./icon";

const IconExample: React.FunctionComponent = () => {
    return (
        <div className="icon-contain">
            <Icon name="wechat"/>
            <Icon name="qq"/>
            <Icon name="alipay"/>
            <Icon name="home"/>
            <Icon name="library"/>
            <Icon name="cart"/>
        </div>
    )
}

export default IconExample