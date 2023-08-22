import { Formik, Form, Field } from "formik";
import { useCallback } from "react";
import classNames from "classnames";
import styles from "./contact.module.scss";

import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default function Contact() {
  const onSubmit = useCallback((values) => {
    console.log(values);
  }, []);

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),
    message: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <section className="pb-[232px]">
      <div className={styles.wrapper}>
        <img src="./img/mcourt-sygnet.png" alt="sygnet" />

        <div className={styles.formWrapper}>
          <h2>Skontaktuj się z nami</h2>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ dirty, errors }) => (
              <Form>
                <div className={styles.fieldsWrapper}>
                  <Field
                    id="name"
                    className={classNames(styles.inputField, {
                      [styles.error]: errors.name,
                    })}
                    name="name"
                    placeholder="Imię"
                    as="input"
                  />

                  <Field
                    id="email"
                    className={classNames(styles.inputField, {
                      [styles.error]: errors.email,
                    })}
                    name="email"
                    placeholder="Email"
                    as="input"
                  />

                  <Field
                    id="phone"
                    className={classNames(styles.inputField, {
                      [styles.error]: errors.phone,
                    })}
                    name="phone"
                    placeholder="Telefon"
                    as="input"
                  />

                  <Field
                    id="message"
                    className={classNames(styles.textField, {
                      [styles.error]: errors.message,
                    })}
                    name="message"
                    placeholder="Wiadomość"
                    as="input"
                  />

                  <button
                    className={classNames(styles.submitButton, {
                      [styles.active]: dirty,
                    })}
                    type="submit"
                  >
                    Wyślij
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
