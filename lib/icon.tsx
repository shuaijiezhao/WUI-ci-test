import React from 'react';
// 这里静态引入使用到 tree-shaking 技术（部分引入文件，优化）
// import './Icons/wechat.svg';
// import './Icons/qq.svg';
// import './Icons/alipay.svg';
import './importIcons' // 非静态引入文件（全部引入）
import './icon.scss'
import classes from './handlers/classes'

interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const { className, ...restProps } = props;
    return (
        <svg className={classes('icon', className)}
             {...restProps}>
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    )
};

export default Icon