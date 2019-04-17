import React from 'react';
import Button from "./button";

export default function () {
    return (
        <React.Fragment>
            <Button colors="primary">确认</Button>
            <Button colors="secondary">取消</Button>
        </React.Fragment>
    )
}