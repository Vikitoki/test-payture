import React from "react";
import { FC } from "react";
import { Field, ErrorMessage } from "formik";
import { ReactNode } from "react";
import InputMask from "react-input-mask";

interface InputProps {
  name?: string;
  labelText?: string;
  mask?: string;
  maskChar?: string;
  [key: string]: string | ReactNode;
}

export const Input: FC<InputProps> = ({
  labelText,
  mask,
  maskChar,
  name,
  ...rest
}) => {
  return (
    <div className="form__item">
      {labelText && (
        <label htmlFor={name} className="form__label">
          {labelText}
        </label>
      )}
      {mask ? (
        <Field name={name}>
          {({ meta, field }: any) => {
            return (
              <>
                <InputMask
                  {...rest}
                  {...field}
                  id={name}
                  mask={mask}
                  maskChar={maskChar}
                  className="form__input"
                />
                {meta.touched && meta.error ? (
                  <span className="form__error">{meta.error}</span>
                ) : null}
              </>
            );
          }}
        </Field>
      ) : (
        <>
          <Field
            {...rest}
            name={name}
            id={name}
            className="form__input"
          ></Field>
          <ErrorMessage name={name!}>
            {(errorMessage) => (
              <span className="form__error">{errorMessage}</span>
            )}
          </ErrorMessage>
        </>
      )}
    </div>
  );
};
