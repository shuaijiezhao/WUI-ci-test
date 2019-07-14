import * as React from "react";
import {Col, Row} from "./layout";

import "./layout.example.scss";

const LayoutExample: React.FunctionComponent = () => {
    return (
        <div>
            <div className="wui-panel demo-1">
                <h3><strong>基础布局</strong></h3><br/>
                <p> 使用 Row 组件和 Col 组件进行页面栅格切分 </p><br/>
                <Row>
                    <Col md={12} xs={12} sm={12}>
                        <div className='grayDeep'>12</div>
                    </Col>
                    <Col md={6} xs={6} sm={6}>
                        <div className='gray'>6</div>
                    </Col>
                    <Col md={6} xs={6} sm={6}>
                        <div className='grayLight'>6</div>
                    </Col>
                    <Col md={4} xs={4} sm={4}>
                        <div className='grayDeep'>4</div>
                    </Col>
                    <Col md={4} xs={4} sm={4}>
                        <div className='gray'>4</div>
                    </Col>
                    <Col md={4} xs={4} sm={4}>
                        <div className='grayLight'>4</div>
                    </Col>
                    <Col md={3} xs={3} sm={3}>
                        <div className='grayDeep'>3</div>
                    </Col>
                    <Col md={3} xs={3} sm={3}>
                        <div className='gray'>3</div>
                    </Col>
                    <Col md={3} xs={3} sm={3}>
                        <div className='grayLight'>3</div>
                    </Col>
                    <Col md={3} xs={3} sm={3}>
                        <div className='grayDeep'>3</div>
                    </Col>
                    <Col md={2} xs={2} sm={2}>
                        <div className='gray'>2</div>
                    </Col>
                    <Col md={2} xs={2} sm={2}>
                        <div className='grayLight'>2</div>
                    </Col>
                    <Col md={2} xs={2} sm={2}>
                        <div className='grayDeep'>2</div>
                    </Col>
                    <Col md={2} xs={2} sm={2}>
                        <div className='gray'>2</div>
                    </Col>
                    <Col md={2} xs={2} sm={2}>
                        <div className='grayLight'>2</div>
                    </Col>
                    <Col md={2} xs={2} sm={2}>
                        <div className='grayDeep'>2</div>
                    </Col>
                </Row>
            </div>
            <div className="wui-panel demo-2">
                <h3><strong>偏移的栅格</strong></h3><br/>
                <p> 使用 mdOffset lgOffset smOffset xsOffset 来设置栅格偏移的量 </p><br/>
                <Row>
                    <Col md={3} mdOffset={3} xs={3} xsOffset={3} sm={3} smOffset={3}>
                        <div className='grayDeep'>3 offset-3</div>
                    </Col>
                    <Col md={3} mdOffset={3} xs={3} xsOffset={3} sm={3} smOffset={3}>
                        <div className='gray'>3 offset-3</div>
                    </Col>
                    <Col md={6} mdOffset={6} xs={6} xsOffset={6} sm={6} smOffset={6}>
                        <div className='grayLight'>6 offset-6</div>
                    </Col>
                    <Col md={4} mdOffset={2} xs={4} xsOffset={2} sm={4} smOffset={2}>
                        <div className='gray'>4 offset-2</div>
                    </Col>
                    <Col md={2} mdOffset={3} xs={2} xsOffset={3} sm={2} smOffset={3}>
                        <div className='grayLight'>2 offset-3</div>
                    </Col>
                    <Col md={6} mdOffset={3} xs={6} xsOffset={3} sm={6} smOffset={3}>
                        <div className='grayDeep'>6 offset-3</div>
                    </Col>
                </Row>
            </div>
            <div className="wui-panel demo-3">
                <h3><strong>平移的栅格</strong></h3><br/>
                <p> 通过设置 mdPull, mdPush 来控制平移的量 </p><br/>
                <Row>
                    <Col md={8} mdPush={4} xs={8} xsPush={4} sm={8} smPush={4}>
                        <div className='grayDeep'>8 push-4</div>
                    </Col>
                    <Col md={4} mdPull={8} xs={4} xsPull={8} sm={4} smPull={8}>
                        <div className='gray'>4 pull-8</div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default LayoutExample;