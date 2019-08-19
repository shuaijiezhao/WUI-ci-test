import * as React from "react";
import {ReactFragment} from "react";
import Input from "../input/input";
import classes from "../handlers/classes";

import "./form.scss";

export interface FormValue {
    [K: string]: any
}

interface Props {
    value: FormValue,
    fields: Array<{name: string, label: string, input: { type: string }}>,
    buttons: ReactFragment,
    onSubmit: React.FormEventHandler,
    onChange: (value: FormValue) => void,
    errors: { [key: string]: string[] },
    errorsDisplayModel?: 'first' | 'all'
}

const Form: React.FunctionComponent<Props> = (props) => {
    const formData = props.value;
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        props.onSubmit(e);
    };
    const onInputChange = (name: string, value: string) => {
        const newFormData = {...formData, [name]: value};
        props.onChange(newFormData);
    };
    return (
        <form className={classes("wui-form")} onSubmit={onSubmit}>
            <table>
                <tbody>
                    {props.fields.map(field =>
                        <tr className={classes("wui-form-tr")} key={field.name}>
                            <td className="wui-form-td">
                                <span>{field.label}</span>
                            </td>
                            <td className="wui-form-td">
                                <Input type={field.input.type} value={formData[field.name]}
                                       onChange={e => onInputChange(field.name, e.target.value)}/>
                                <div className="wui-form-error">
                                    { props.errors[field.name] ?
                                        (props.errorsDisplayModel === 'first' ?
                                            props.errors[field.name][0] :
                                            props.errors[field.name].join('，')) :
                                      <span>&nbsp;</span>
                                    }
                                </div>
                            </td>
                        </tr>
                    )}
                    <tr className="wui-form-tr">
                        <td className="wui-form-td"/>
                        <td className="wui-form-td">{props.buttons}</td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
};

Form.defaultProps = {
  errorsDisplayModel: 'first'
};

export default Form;