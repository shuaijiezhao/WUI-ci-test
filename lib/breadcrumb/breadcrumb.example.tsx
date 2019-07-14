import * as React from "react";
import Breadcrumb from "./breadcrumb";
import BreadcrumbItem from "./breadcrumbItem";
import {Icon} from "../index";

const BreadcrumbExample: React.FunctionComponent = () => {
    return (
        <div>
            <div className="wui-panel">
                <h3>基础用法</h3><br/>
                <p> BreadcrumbItem 定义子面包，`active`参数定义当前状态。</p><br/>
                <Breadcrumb>
                    <BreadcrumbItem href="#">
                        Home
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        Library
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Data
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="wui-panel">
                <h3>图标</h3><br/>
                <p>使用Icon图标组件。</p><br/>
                <Breadcrumb>
                    <BreadcrumbItem href="#">
                        <Icon name="home"/>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Icon name="library"/>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        <Icon name="cart"/>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="wui-panel">
                <h3>图标加文字</h3><br/>
                <p>图标放在文字前面。</p><br/>
                <Breadcrumb>
                    <BreadcrumbItem href="#">
                        <Icon name="home"/>
                        <span>Home</span>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Icon name="library"/>
                        <span>Library</span>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        <Icon name="cart"/>
                        <span>Cart</span>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>
    )
}

export default BreadcrumbExample;