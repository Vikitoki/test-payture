import React from "react";
import { FC } from "react";
import { Form, Formik } from "formik";
import { FormControl } from "../UI/FormControl";
import * as Yup from "yup";
import { FormHomePageContainerState } from "../../../types/forms";
import { useDispatch } from "react-redux";
import { getNewUserPayment } from "../../../services/rest/userPaymentsActions";
import { validationNubmerField } from "../../../services/helpers/forms";

export const FormHomePageContainer: FC = () => {
  const dispatch = useDispatch();

  const initialValues: FormHomePageContainerState = {
    userName: "",
    userEmail: "",
    userSum: "",
    userCard: "",
    userCardDate: "",
    userCardCVC: "",
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required("Поле обязательно для заполнения"),
    userEmail: Yup.string()
      .email("Неверный формат email")
      .required("Поле обязательно для заполнения"),
    userCard: Yup.string()
      .min(16, "Минимальная длина номера карты 16 чисел")
      .required("Поле обязательно для заполнения")
      .test(
        "no-includes(*)",
        "Это поле не должно иметь пропущенных цифр",
        (value) => !String(value).includes("*")
      ),
    userSum: validationNubmerField(),
    userCardDate: validationNubmerField(),
    userCardCVC: validationNubmerField(),
  });

  const onSubmit = (values: FormHomePageContainerState) => {
    dispatch(getNewUserPayment(values));
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
              <FormControl
                control="input"
                labelText="Введите сумму заказа"
                name="userSum"
                type="text"
              />
              <div className="form__block form__block_double">
                <FormControl
                  control="input"
                  labelText="Введите время действия карты"
                  name="userCardDate"
                  type="text"
                  mask="**/**"
                />
                <FormControl
                  control="input"
                  labelText="Введите код CVC"
                  name="userCardCVC"
                  type="text"
                  mask="***"
                />
              </div>
            </div>
            <div className="form__btns">
              <button type="submit" className="btn btn_white-outline">
                Далее
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
