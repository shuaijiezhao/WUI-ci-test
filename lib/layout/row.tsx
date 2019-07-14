import * as React from "react";
import {scopedClassMaker} from "../handlers/classes";

interface Props {
    className?: string
}

const scm = scopedClassMaker("wui-row")

const Row: React.FunctionComponent<Props> = (props) => {
    const {className, ...others} = props
    return (
        <div className={scm({"": true},{extra: className})} {...others}>
            {props.children}
        </div>
    )
}

export default Row;