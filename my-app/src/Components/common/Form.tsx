import styles from "./Form.module.css";
import React from "react";

// @ts-ignore
export const Textarea = ({input, meta, ...rest}) => {

    const error = meta.touched && meta.error

    return <div className={error ? styles.validatorForm + " " + styles.error : " "}>
        <textarea {...input} {...rest}/>
        {error && <span>{meta.error}</span>}
    </div>
}
// @ts-ignore
export const Input = ({input, meta, ...rest}) => {

    const error = meta.touched && meta.error

    return <div className={error ? styles.validatorForm + " " + styles.error : " "}>
        <input {...input} {...rest}/>
        {error && <span>{meta.error}</span>}
    </div>
}