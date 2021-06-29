import * as Yup from "yup";

export const validationNubmerField = () => {
  return Yup.string()
    .required("Поле обязательно для заполнения")
    .matches(
      /^[0-9/]+$/,
      "Это поле не должно содержать букв или других символов"
    )
    .test(
      "not-is-0",
      "Это поле не может равняться нулю",
      (value) => Number(value) !== 0
    )
    .test(
      "no-includes(*)",
      "Это поле не должно иметь пропущенных цифр",
      (value) => !String(value).includes("*")
    );
};

export const validationCardField = () => {
  return Yup.string()
    .min(16, "Минимальная длина номера карты 16 чисел")
    .required("Поле обязательно для заполнения")
    .test(
      "no-includes(*)",
      "Это поле не должно иметь пропущенных цифр",
      (value) => !String(value).includes("*")
    );
};

export const validationEmailField = () => {
  return Yup.string()
    .email("Неверный формат email")
    .required("Поле обязательно для заполнения");
};

export const validationStringField = () => {
  return Yup.string().required("Поле обязательно для заполнения");
};
