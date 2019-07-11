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

const componentArray = [
    ["/", "概述"],
    ["/icon", "Icon"],
    ["/button", "Button"],
    ["/dialog", "Model"],
    ["/layout", "Layout"],
]

const App: React.FunctionComponent = () => {
    return (
        <div id="wui-docs" className="wui-docs">
            <h1>关于 <code>wui</code></h1>
            <p>
                <code>wui</code> 是一套基 <code>React.js</code> 的开源组件库。
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
                    <span> WUI </span>
                </div>
            </Header>
            <Layout>
                <Aside className="site-aside">
                    <h2>组件</h2>
                    <ul>
                        {componentArray.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink exact to={item[0]}>{item[1]}</NavLink>
                                </li>
                            )
                        })}
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
                        <div>版权所有：shuaijiezhao</div>
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    </Router>,
    document.querySelector("#root"))