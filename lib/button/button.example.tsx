import React from 'react';
import Button from "./button";
import Icon from "../icon/icon";

export default function () {
    return (
        <React.Fragment>
            <div className="wui-panel">
                <h3><strong>默认按钮</strong></h3>
                <p>主按钮、次按钮主要用于确定和取消</p>
                <Button colors="primary">主按钮</Button>
                <Button colors="secondary">次按钮</Button>
            </div>
            <div className="wui-panel">
                <h3><strong>不同颜色的按钮</strong></h3>
                <p>通过`colors`属性控制按钮颜色</p>
                <Button colors="primary">primary</Button>
                <Button colors="success">success</Button>
                <Button colors="info">info</Button>
                <Button colors="warning">warning</Button>
                <Button colors="danger">danger</Button>
                <Button colors="dark">dark</Button>
                <br/>
                <Button colors="primary" bordered="border">primary</Button>
                <Button colors="success" bordered="border">success</Button>
                <Button colors="info" bordered="border">info</Button>
                <Button colors="warning" bordered="border">warning</Button>
                <Button colors="danger" bordered="border">danger</Button>
                <Button colors="dark" bordered="border">dark</Button>
            </div>
            <div className="wui-panel">
                <h3><strong>按钮尺寸</strong></h3>
                <p>按钮有小、中、大、巨大四种尺寸。通过设置 size 为 sm、lg、xg 分别把按钮设为小、大、巨大尺寸。若不设置 size，则尺寸为中。</p>
                <Button colors="primary" size="sm">小按钮</Button>
                <Button colors="primary">默认</Button>
                <Button colors="primary" size="lg">大按钮</Button>
                <Button colors="primary" size="xg">巨大按钮</Button>
            </div>
            <div className="wui-panel btn-demo">
                <h3><strong>图标按钮</strong></h3>
                <p>当需要在 Button 内嵌入图标时，可以在 Button 内使用 Icon 组件。</p>
                <Button colors="primary" shape="icon"><Icon name="search"/></Button>
                <Button colors="primary"><Icon name="search"/>Search</Button>
                <Button colors="secondary" shape="icon"><Icon name="delete"/></Button>
                <Button colors="secondary"><Icon name="delete"/>Delete</Button>
                <Button colors="info" shape="icon"><Icon name="upload"/></Button>
                <Button colors="info"><Icon name="upload"/>Upload</Button>
                <Button bordered="border" shape="icon"><Icon name="edit"/></Button>
                <Button bordered="border"><Icon name="edit"/>Edit</Button>
            </div>
        </React.Fragment>
    )
}