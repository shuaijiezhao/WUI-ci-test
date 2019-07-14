import * as React from "react";
import Switch from "./switch";
import {Fragment} from "react";

const SwitchExample: React.FunctionComponent = () => {
    return (
        <Fragment>
            <div className="wui-panel">
                <h3><strong>默认开关</strong></h3><br/>
                <Switch checked={false} />
            </div>
            <div className="wui-panel">
                <h3><strong>不同大小的开关</strong></h3><br/>
                <p>通过`size`属性控制开关的大小</p><br/>
                <Switch size="sm" checked={false} />
                <Switch checked={false} />
                <Switch size="lg" checked={false} />
            </div>
        </Fragment>
    )
}

export default SwitchExample;