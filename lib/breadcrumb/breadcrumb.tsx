import * as React from "react";
import {scopedClassMaker} from "../handlers/classes";

import "./breadcrumb.scss";

interface Props {
    className?: string,
}

const crm = scopedClassMaker("wui-breadcrumb")

const Breadcrumb: React.FunctionComponent<Props> = (props) => {
    const { className, ...others } = props;
    return (
        <ol {...others} className={crm({"": true}, {extra: className})} />
    )
}

export default Breadcrumb;