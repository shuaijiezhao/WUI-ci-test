import * as React from "react";
import Form, {FormValue} from "./form";
import {Fragment, useState} from "react";
import {Button} from "../index";
import Validator, {noErroes} from "./vilidator";

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: 'zhao1234',
        password: ''
    });
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}}
    ]);
    const [errors, setErrors] = useState({});
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const rules = [
            {key: 'username', required: true},
            {key: 'username', minLength: 8, maxLength: 12},
            {key: 'username', pattern: /^[0-9a-zA-Z]+$/},
            {key: 'password', required: true}
        ];
        const errors = Validator(formData, rules);
        setErrors(errors);
        if (noErroes(errors)) {
            // 进行下一部操作
        }
    };
    return (
        <Form value={formData} fields={fields}
              buttons={
                  <Fragment>
                      {/*<Button shape="border">取消</Button>*/}
                      <Button btnType="submit" colors="primary">提交</Button>
                  </Fragment>
              }
              errors={errors}
              onChange={newValue => setFormData(newValue)}
              onSubmit={onSubmit}
        />
    )
};

export default FormExample;