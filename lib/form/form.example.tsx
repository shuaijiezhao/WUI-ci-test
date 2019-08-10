import * as React from "react";
import Form, {FormValue} from "./form";
import {Fragment, useState} from "react";
import {Button} from "../index";

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: 'zhao1234',
        password: ''
    });
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}}
    ]);
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(formData, e);
    };
    return (
        <Form value={formData} fields={fields}
              buttons={
                  <Fragment>
                      <Button shape="border">取消</Button>
                      <Button btnType="submit" colors="primary">提交</Button>
                  </Fragment>
              }
              onChange={newValue => setFormData(newValue)}
              onSubmit={onSubmit}
        />
    )
};

export default FormExample;