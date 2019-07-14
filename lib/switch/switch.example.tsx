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
        </Fragment>
    )
}

export default SwitchExample;