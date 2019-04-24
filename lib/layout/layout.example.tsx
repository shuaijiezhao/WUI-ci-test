import React from "react";
import Layout from "./layout";
import Aside from "./aside";
import Footer from "./footer";
import Content from "./content";
import Header from "./header";

export default function () {
    return (
        <React.Fragment>
            <div>
                <h2>Example1</h2>
                <Layout className="example1">
                    <Header></Header>
                    <Content></Content>
                    <Footer></Footer>
                </Layout>
            </div>
            <div>
                <h2>Example2</h2>
                <Layout className="example2">
                    <Header></Header>
                    <Layout>
                        <Aside></Aside>
                        <Content></Content>
                    </Layout>
                    <Footer></Footer>
                </Layout>
            </div>
            <div>
                <h2>Example3</h2>
                <Layout className="example3">
                    <Header></Header>
                    <Layout>
                        <Content></Content>
                        <Aside></Aside>
                    </Layout>
                    <Footer></Footer>
                </Layout>
            </div>
            <div>
                <h2>Example4</h2>
                <Layout className="example4">
                    <Aside></Aside>
                    <Layout>
                        <Header></Header>
                        <Content></Content>
                        <Footer></Footer>
                    </Layout>
                </Layout>
            </div>
        </React.Fragment>
    )
};