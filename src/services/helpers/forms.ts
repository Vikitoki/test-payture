import * as Yup from "yup";

export const validationNubmerField = () => {
  return Yup.string()
    .required("Поле обязательно для заполнения")
    .matches(
      /^[0-9]+$/,
      "Это поле не должно содержать букв или других символов"
    )
    .test(
      "not-is-0",
      "Это поле не может равняться нулю",
      (value) => Number(value) !== 0
    );
};
