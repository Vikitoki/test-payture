import React from "react";
import { FC } from "react";
import { Form, Formik } from "formik";
import { FormControl } from "../UI/FormControl";
import * as Yup from "yup";

interface FormHomePageContainerState {
  userName: string;
  userEmail: string;
  userCard: string;
  userCardDate: string;
  userCardCVC: string;
}

export const FormHomePageContainer: FC = () => {
  const initialValues: FormHomePageContainerState = {
    userName: "",
    userEmail: "",
    userCard: "",
    userCardDate: "",
    userCardCVC: "",
  };

  const validationSchema = Yup.object({
    // userName: Yup.string().required("Поле обязательно для заполнения"),
    // userEmail: Yup.string()
    //   .email("Неверный формат email")
    //   .required("Поле обязательно для заполнения"),
    // userCard: Yup.string()
    //   .min(16, "Минимальная длина номера карты 16 чисел")
    //   .required("Поле обязательно для заполнения")
    //   .test(
    //     "no-includes(_)",
    //     "Это поле не может равняться нулю",
    //     (value) => String(value) !== "_"
    //   ),
    // // .matches(
    // //   /^[0-9,_]+$/,
    // //   "Это поле не должно содержать букв или других символов"
    // // )
    // userCardDate: Yup.string().required("Поле обязательно для заполнения"),
    // userCardCVC: Yup.string().required("Поле обязательно для заполнения"),
  });

  const onSubmit = (values: FormHomePageContainerState) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form className="form">
            <div className="form__items">
              <FormControl
                control="input"
                labelText="Введите имя"
                name="userName"
                type="text"
              />
              <FormControl
                control="input"
                labelText="Введите вашу почту"
                name="userEmail"
                type="email"
              />
              <FormControl
                control="input"
                labelText="Введите номер карты"
                name="userCard"
                type="text"
                mask="**** **** **** ****"
                maskChar="*"
              />
              <div className="form__block form__block_double">
                <FormControl
                  control="input"
                  labelText="Введите время действия карты"
                  name="userCardDate"
                  type="text"
                />
                <FormControl
                  control="input"
                  labelText="Введите код CVC"
                  name="userCardCVC"
                  type="password"
                />
              </div>
            </div>
            <div className="form__btns">
              <button
                disabled={!formik.isValid}
                type="submit"
                className="btn btn_white-outline"
              >
                Далее
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
