import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, NavLink} from "react-router-dom";

import ButtonExample from "./lib/button/button.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";
import PageLayoutExample from "./lib/pagelayout/pagelayout.example";
// import IconExample from "./lib/icon/icon.example";
import Pagelayout, {Aside, Content, Footer, Header} from "./lib/pagelayout/pagelayout";
import SwitchExample from "./lib/switch/switch.example";

import './example.scss';
import IconDemo from "./lib/icon/icon.demo";
import BreadcrumbExample from "./lib/breadcrumb/breadcrumb.example";

const logo = require('./wui.png')

const floorArray:Array<Array<Array<string | Array<string>>>> = [
    [
        ["基础 General"],
        [
            ["/icon", "图标 Icon"],
            ["/button", "按钮 Button"]
        ]
    ],
    [
        ["布局 Pagelayout"],
        [
            ["/layout", "栅格布局 Layout"],
            ["/pagelayout", "页面布局 PageLayout"]
        ]
    ],
    [
        ["导航 Navigation"],
        [
            ["/breadcrumb", "面包屑 Breadcrumb"]
        ]
    ],
    [
        ["反馈 Feedback"],
        [
            ["/dialog", "模态窗 Model"]
        ]
    ],
    [
        ["表单 Form"],
        [
            ["/switch", "开关 Switch"]
        ]
    ]
]

const App: React.FunctionComponent = () => {
    return (
        <div id="wui-docs" className="wui-docs">
            <h1>关于 <code>wui-react</code></h1>
            <p>
                <code>wui-react</code> 是一套基 <code>React.js</code> 的开源组件库。
            </p>
        </div>
    )
}

ReactDOM.render(
    <Router>
        <Pagelayout className="site-page">
            <Header className="site-header">
                <div className="logo">
                    <img src={logo} width="48" height="48" alt=""/>
                    <span> wui-react </span>
                </div>
            </Header>
            <Pagelayout>
                <Aside className="site-aside">
                    <ul>
                        <li className="first-floor">
                            <NavLink exact to="/"><span>概述</span></NavLink>
                        </li>
                        <li>
                            <ul>
                                <h2>组件</h2>
                                {
                                    floorArray.map((floor, index) => {
                                        return (
                                            <li key={index}>
                                                <h3>{floor[0]}</h3>
                                                <ul>
                                                    {floor[1].map((item, i) => {
                                                        return (
                                                            <li key={i}>
                                                                <NavLink to={item[0]}>{item[1]}</NavLink>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    </ul>
                </Aside>
                <Pagelayout>
                    <Content className="site-main">
                        <Route exact path="/" component={App}/>
                        <Route path="/icon" component={IconDemo}/>
                        <Route path="/button" component={ButtonExample}/>
                        <Route path="/dialog" component={DialogExample}/>
                        <Route path="/layout" component={LayoutExample}/>
                        <Route path="/pagelayout" component={PageLayoutExample}/>
                        <Route path="/breadcrumb" component={BreadcrumbExample}/>
                        <Route path="/switch" component={SwitchExample}/>
                    </Content>
                    <Footer className="site-footer">
                        <div>Copyright © 2019 版权所有：shuaijiezhao</div>
                    </Footer>
                </Pagelayout>
            </Pagelayout>
        </Pagelayout>
    </Router>,
    document.querySelector("#root"))