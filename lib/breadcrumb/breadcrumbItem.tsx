import * as React from "react";
import classes from "../handlers/classes";

interface Props {
    className?: string,
    /**
     * 如果设置成true渲染`span` 而不是 `a`
     */
    active?: boolean,
    /**
     * `href` a标签href
     */
    href?: string,
    /**
     * `title`  a标签title
     */
    title?: any,
}

const BreadcrumbItem: React.FunctionComponent<Props> = (props) => {
    const { active, href, title, className, ...others } = props;
    const linkProps = {href, title}
    return (
        <li {...others} className={classes(active ? "active" : "", className)}>
            { href ?
              <a {...others} {...linkProps} /> :
              <span {...others} />
            }
        </li>
    )
}

export default BreadcrumbItem;