import React from 'react';
import CodeDemo from "../../codeDemo";
import IconExample from "./icon.example";

const IconDemo: React.FunctionComponent = () => {
    return (
        <CodeDemo code={require('!!raw-loader!./icon.example.tsx').default}>
            <IconExample />
        </CodeDemo>
    )
}

export default IconDemo;