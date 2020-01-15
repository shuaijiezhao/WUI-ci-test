import * as React from "react";
import Badge from "./badge";
import Icon from "../icon/icon";

const BadgeExample: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <div className="wui-panel">
                <h3><strong>基本样式 Badge</strong></h3><br/>
                <p>`colors`控制背景颜色种类</p><br/>
                <Badge colors='primary'>8</Badge>
            </div>
            <div className="wui-panel">
                <h3><strong>图标 Badge</strong></h3><br/>
                <p>在子元素里自定义内容</p><br/>
                <Badge dataBadge={4} dataBadgePlacement='bottom'>
                    <Icon name='cart'/>
                </Badge>
                <Badge dataBadge={8} colors='warning' dataBadgePlacement='top'>
                    <Icon name='library'/>
                </Badge>
            </div>
        </React.Fragment>
    )
};

export default BadgeExample;