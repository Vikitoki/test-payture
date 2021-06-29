import React from "react";
import { FC } from "react";
import { Form, Formik } from "formik";
import { FormControl } from "../UI/FormControl";
import * as Yup from "yup";
import { FormHomePageContainerState } from "../../../types/forms";
import { useDispatch } from "react-redux";
import { getNewUserPayment } from "../../../services/rest/userPaymentsActions";
import {
  validationCardField,
  validationEmailField,
  validationNubmerField,
  validationStringField,
} from "../../../services/helpers/forms";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useEffect } from "react";
import { removeSuccessStatusPayment } from "../../../store/usersPaymenst/action-creators";

export const FormHomePageContainer: FC = () => {
  const dispatch = useDispatch();
  const { error, loading, successPayment } = useTypedSelector(
    (state) => state.userPayments
  );

  useEffect(() => {
    if (successPayment) {
      console.log("set");
      setTimeout(() => {
        dispatch(removeSuccessStatusPayment());
      }, 3000);
    }
  }, [successPayment, dispatch]);

  const initialValues: FormHomePageContainerState = {
    userName: "",
    userEmail: "",
    userSum: "",
    userCard: "",
    userCardDate: "",
    userCardCVC: "",
  };

  const validationSchema = Yup.object({
    userName: validationStringField(),
    userEmail: validationEmailField(),
    userCard: validationCardField(),
    userSum: validationNubmerField(),
    userCardDate: validationNubmerField(),
    userCardCVC: validationNubmerField(),
  });

  const onSubmit = (values: FormHomePageContainerState, props: any) => {
    dispatch(getNewUserPayment(values));
    props.resetForm();
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
            {loading ? (
              <span className="form__status">
                Подождите несколько секунд...
              </span>
            ) : error ? (
              <span className="form__status">{error}</span>
            ) : successPayment ? (
              <span className="form__status">Ваша оплата прошла успешно!</span>
            ) : null}
          </Form>
        );
      }}
    </Formik>
  );
};
