import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

const fn: React.MouseEventHandler<Element> = (e) => {
    console.log(e.target)
};

ReactDOM.render(<div>
    <Icon name="wechat" onClick={fn}/>
    {/*<Icon name="qq"/>*/}
    {/*<Icon name="alipay"/>*/}
</div>, document.querySelector("#root"));