import * as React from "react";
import classes from "../handlers/classes";

interface Props {
    /**
     * xs显示列数
     */
    xs?: number,
    /**
     * sm显示列数
     */
    sm?: number,
    /**
     * md显示列数
     */
    md?: number,
    /**
     * lg显示列数
     */
    lg?: number,
    /**
     * xs偏移列数
     */
    xsOffset?: number,
    /**
     * sm偏移列数
     */
    smOffset?: number,
    /**
     * md偏移列数
     */
    mdOffset?: number,
    /**
     * lg偏移列数
     */
    lgOffset?: number,
    /**
     * xs右偏移列数
     */
    xsPush?: number,
    /**
     * sm右偏移列数
     */
    smPush?: number,
    /**
     * md右偏移列数
     */
    mdPush?: number,
    /**
     * lg右偏移列数
     */
    lgPush?: number,
    /**
     * xs左偏移列数
     */
    xsPull?: number,
    /**
     * sm左偏移列数
     */
    smPull?: number,
    /**
     * md左偏移列数
     */
    mdPull?: number,
    /**
     * lg左偏移列数
     */
    lgPull?: number,
    className?: string
}

const clsPrefix: string = "wui-col";
const DEVICE_SIZES: Array<string> = ['lg', 'md', 'sm', 'xs'];

const Col: React.FunctionComponent<Props> = (props) => {
    const {className, ...others} = props;
    const tbClass: Array<string> = [];
    DEVICE_SIZES.forEach(size => {
        function popProp(propSuffix: string, modifier: string) {
            const propName: any = `${size}${propSuffix}`;
            const propValue: number = (others as [])[propName];

            if (propValue != undefined && propValue != null) {
                tbClass.push( `${clsPrefix}-${size}${modifier}-${propValue}`);
            }

            delete (others as [])[propName];
        }

        popProp('', '');
        popProp('Offset', '-offset');
        popProp('Push', '-push');
        popProp('Pull', '-pull');

    });
    return (
        <div className={classes(...tbClass, className)}>
            {props.children}
        </div>
    )
}

export default Col;