import React from 'react';
// 这里静态引入使用到 tree-shaking 技术（部分引入文件，优化）
// import './Icons/wechat.svg';
// import './Icons/qq.svg';
// import './Icons/aplay.svg';
import './importIcons' // 非静态引入文件（全部引入）

interface IconProps {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>
            <svg>
                <use xlinkHref={`#${props.name}`}></use>
            </svg>
        </span>
    )
}

export default Icon