import * as React from "react";
import Tag from "./tag";
// import {useState} from "react";
//
// interface KeyboardEvent {
//     keyCode: number
// }

const TagExample: React.FC = () => {
    // const [tagChild, setTagChild] = useState();
    // const addTags: React.EventHandler = (e): void => {
    //
    // };
    //
    // const handlerOnKeyDown: KeyboardEvent = (e: React.KeyboardEvent) => {
    //   if (e.keyCode === 13) {
    //       addTags();
    //   }
    // };

    return (
        <React.Fragment>
            <div className="wui-panel">
                <h3><strong>默认标签</strong></h3><br/>
                <p>默认提供两种形式的标签，只要用于信息标注。</p><br/>
                <Tag colors="dark">dark</Tag>
                <Tag colors="light" bordered>light</Tag>
            </div>
            <div className="wui-panel">
                <h3><strong>语意色标签</strong></h3><br/>
                <p>表达提示信息的标签。</p><br/>
                <Tag colors="success">success</Tag>
                <Tag colors="warning">warning</Tag>
                <Tag colors="danger">danger</Tag>
                <Tag colors="info">info</Tag>
            </div>
            <div className="wui-panel">
                <h3><strong>disable 标签</strong></h3><br/>
                <p>禁用的标签，不可以进行编辑。</p><br/>
                <Tag disabled>disabled</Tag>
            </div>
            <div className="wui-panel">
                <h3><strong>可删除标签</strong></h3><br/>
                <p>用户可以手动删除的标签。</p><br/>
                <Tag visible={true} deleted={true} onClose={()=>console.log('onclose')}>部门</Tag>
            </div>
            <div className="wui-panel">
                <h3><strong>可选标签</strong></h3><br/>
                <p>可以表示选中和未选中两种状态的标签。</p><br/>
                <Tag select={true} bordered>部门</Tag>
                <Tag select={true} bordered>职级</Tag>
                <Tag select={true} bordered>年份</Tag>
                <Tag select={true} bordered>月份</Tag>
            </div>
            <div className="wui-panel">
                <h3><strong>多彩标签</strong></h3><br/>
                <p>包含多种预设色彩的标签样式，可以在不同场景使用，通过`colors`属性控制标签颜色。</p><br/>
                <div>
                    <Tag colors="success">success</Tag>
                    <Tag colors="warning">warning</Tag>
                    <Tag colors="danger">danger</Tag>
                    <Tag colors="info">info</Tag>
                    <Tag bordered={true} colors="success">success</Tag>
                    <Tag bordered={true} colors="warning">warning</Tag>
                    <Tag bordered={true} colors="danger">danger</Tag>
                    <Tag bordered={true} colors="info">info</Tag>
                </div>
            </div>
        </React.Fragment>
    )
};

export default TagExample;