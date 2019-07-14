import React from "react";

import Pagelayout from "./pagelayout";
import Aside from "./aside";
import Footer from "./footer";
import Content from "./content";
import Header from "./header";

import './pagelayout.example.scss';

export default function () {
    return (
        <React.Fragment>
            <div>
                <h2>Example1</h2>
                <Pagelayout style={{height: 500}}>
                    <Header className="x">
                        <div>header</div>
                    </Header>
                    <Content className="y">
                        <div>content</div>
                    </Content>
                    <Footer className="x">
                        <div>footer</div>
                    </Footer>
                </Pagelayout>
            </div>
            <div>
                <h2>Example2</h2>
                <Pagelayout style={{height: 500}}>
                    <Header className="x">
                        <div>header</div>
                    </Header>
                    <Pagelayout className="example">
                        <Aside className="z">
                            <div>aside</div>
                        </Aside>
                        <Content className="y">
                            <div>content</div>
                        </Content>
                    </Pagelayout>
                    <Footer className="x">
                        <div>footer</div>
                    </Footer>
                </Pagelayout>
            </div>
            <div>
                <h2>Example3</h2>
                <Pagelayout style={{height: 500}}>
                    <Header className="x">
                        <div>header</div>
                    </Header>
                    <Pagelayout className="example">
                        <Content className="y">
                            <div>content</div>
                        </Content>
                        <Aside className="z">
                            <div>aside</div>
                        </Aside>
                    </Pagelayout>
                    <Footer className="x">
                        <div>footer</div>
                    </Footer>
                </Pagelayout>
            </div>
            <div>
                <h2>Example4</h2>
                <Pagelayout style={{height: 500}} className="example">
                    <Aside className="z">
                        <div>aside</div>
                    </Aside>
                    <Pagelayout>
                        <Header className="x">
                            <div>header</div>
                        </Header>
                        <Content className="y">
                            <div>content</div>
                        </Content>
                        <Footer className="x">
                            <div>footer</div>
                        </Footer>
                    </Pagelayout>
                </Pagelayout>
            </div>
        </React.Fragment>
    )
};