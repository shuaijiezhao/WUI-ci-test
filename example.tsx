import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, NavLink} from "react-router-dom";

import ButtonExample from "./lib/button/button.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";
// import IconExample from "./lib/icon/icon.example";
import Layout, {Aside, Content, Footer, Header} from "./lib/layout/layout";

import './example.scss';
import IconDemo from "./lib/icon/icon.demo";

const logo = require('./wui.png')

const floorArray:Array<Array<Array<string | Array<string>>>> = [
    [
        ["基础 Genaral"],
        [
            ["/icon", "图标 Icon"],
            ["/button", "按钮 Button"]
        ]
    ],
    [
        ["布局 Layout"],
        [
            ["/layout", "页面布局 PageLayout"]
        ]
    ],
    [
        ["反馈 Feedback"],
        [
            ["/dialog", "模态窗 Model"]
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
        <Layout className="site-page">
            <Header className="site-header">
                <div className="logo">
                    <img src={logo} width="48" height="48" alt=""/>
                    <span> wui-react </span>
                </div>
            </Header>
            <Layout>
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
                <Layout>
                    <Content className="site-main">
                        <Route exact path="/" component={App}/>
                        <Route path="/icon" component={IconDemo}/>
                        <Route path="/button" component={ButtonExample}/>
                        <Route path="/dialog" component={DialogExample}/>
                        <Route path="/layout" component={LayoutExample}/>
                    </Content>
                    <Footer className="site-footer">
                        <div>Copyright © 2019 版权所有：shuaijiezhao</div>
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    </Router>,
    document.querySelector("#root"))