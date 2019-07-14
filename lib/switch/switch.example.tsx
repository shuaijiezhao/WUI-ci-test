import * as React from "react";
import Switch from "./switch";
import {Fragment, useState} from "react";
import {Col, Row} from "../layout/layout";
import {Button} from "../index";

interface Props {
    disabled: boolean,
    checked: boolean
}

const SwitchExample: React.FunctionComponent<Props> = (props) => {
    const [isDisabled, setDisabled] = useState(false);

    return (
        <Fragment>
            <div className="wui-panel">
                <h3><strong>默认开关</strong></h3><br/>
                <Row>
                    <Col sm={2}>
                        <Switch checked={false} />
                    </Col>
                    <Col sm={2}>
                        <Switch checked={true} />
                    </Col>
                </Row>
            </div>
            <div className="wui-panel">
                <h3><strong>不同大小的开关</strong></h3><br/>
                <p>通过`size`属性控制开关的大小</p><br/>
                <Row>
                    <Col sm={2}>
                        <Switch size="sm" checked={false} />
                    </Col>
                    <Col sm={2}>
                        <Switch checked={false} />
                    </Col>
                    <Col sm={2}>
                        <Switch size="lg" checked={false} />
                    </Col>
                </Row>
            </div>
            <div className="wui-panel">
                <h3><strong>事件开关</strong></h3><br/>
                <p>点击开关触发事件</p><br/>
                <Row>
                    <Col sm={2}>
                        <Switch checked={false} checkedChildren={"on"} unCheckedChildren={"off"}/>
                    </Col>
                </Row>
            </div>
            <div className="wui-panel">
                <h3><strong>被禁用开关</strong></h3><br/>
                <Row>
                    <Col sm={2}>
                        <Switch checked={false} disabled={isDisabled}/>
                    </Col>
                    <Col sm={2}>
                        <Button colors="secondary" onClick={() => {setDisabled(!isDisabled)}}>toggle disabled</Button>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}

export default SwitchExample;