import React from "react";

import Layout from "./layout";
import Aside from "./aside";
import Footer from "./footer";
import Content from "./content";
import Header from "./header";

import './layout.example.scss';

export default function () {
    return (
        <React.Fragment>
            <div>
                <h2>Example1</h2>
                <Layout style={{height: 500}} className="hi">
                    <Header className="x">
                        <div>header</div>
                    </Header>
                    <Content className="y">
                        <div>content</div>
                    </Content>
                    <Footer className="x">
                        <div>footer</div>
                    </Footer>
                </Layout>
            </div>
            <div>
                <h2>Example2</h2>
                <Layout style={{height: 500}} className="hi">
                    <Header className="x">
                        <div>header</div>
                    </Header>
                    <Layout className="example">
                        <Aside className="z">
                            <div>aside</div>
                        </Aside>
                        <Content className="y">
                            <div>content</div>
                        </Content>
                    </Layout>
                    <Footer className="x">
                        <div>footer</div>
                    </Footer>
                </Layout>
            </div>
            <div>
                <h2>Example3</h2>
                <Layout style={{height: 500}} className="hi">
                    <Header className="x">
                        <div>header</div>
                    </Header>
                    <Layout className="example">
                        <Content className="y">
                            <div>content</div>
                        </Content>
                        <Aside className="z">
                            <div>aside</div>
                        </Aside>
                    </Layout>
                    <Footer className="x">
                        <div>footer</div>
                    </Footer>
                </Layout>
            </div>
            <div>
                <h2>Example4</h2>
                <Layout style={{height: 500}} className="example">
                    <Aside className="z">
                        <div>aside</div>
                    </Aside>
                    <Layout>
                        <Header className="x">
                            <div>header</div>
                        </Header>
                        <Content className="y">
                            <div>content</div>
                        </Content>
                        <Footer className="x">
                            <div>footer</div>
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        </React.Fragment>
    )
};