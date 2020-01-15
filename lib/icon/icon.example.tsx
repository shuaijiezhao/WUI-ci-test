import React from "react";
import Icon from "./icon";

import "./icon.example.scss";

const IconExample: React.FunctionComponent = () => {
    return (
        <div className="wui-panel">
            <h3>Icon</h3><br/>
            <p>给 Icon 添加 name 属性就行。</p><br/>
            <div className="icon-contain">
                <ul className="clearfix">
                    <li>
                        <div className="icon-outer">
                            <Icon name="wechat"/>
                        </div>
                        <div>微信</div><br/>
                        <div>wechat</div>
                    </li>
                    <li>
                        <div className="icon-outer">
                            <Icon name="qq"/>
                        </div>
                        <div>qq</div><br/>
                        <div>qq</div>
                    </li>
                    <li>
                        <div className="icon-outer">
                            <Icon name="alipay"/>
                        </div>
                        <div>支付宝</div><br/>
                        <div>alipay</div>
                    </li>
                    <li>
                        <div className="icon-outer">
                            <Icon name="home"/>
                        </div>
                        <div>Home</div><br/>
                        <div>home</div>
                    </li>
                    <li>
                        <div className="icon-outer">
                            <Icon name="library"/>
                        </div>
                        <div>Library</div><br/>
                        <div>library</div>
                    </li>
                    <li>
                        <div className="icon-outer">
                            <Icon name="cart"/>
                        </div>
                        <div>Cart</div><br/>
                        <div>cart</div>
                    </li>
                    <li>
                        <div className="icon-outer">
                            <Icon name="delete"/>
                        </div>
                        <div>Delete</div><br/>
                        <div>delete</div>
                    </li>
                    <li>
                        <div className="icon-outer">
                            <Icon name="deleteX"/>
                        </div>
                        <div>DeleteX</div><br/>
                        <div>deleteX</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default IconExample