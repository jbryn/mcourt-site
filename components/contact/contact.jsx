import { Formik, Form, Field } from "formik";
import { useCallback } from "react";
import classNames from "classnames";
import styles from "./contact.module.scss";

export default function Contact() {
  const onSubmit = useCallback((values) => {
    console.log(values);
  }, []);

  return (
    <section className="pb-[232px]">
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <img className={styles.left} src="./img/left.png" alt="logo-left" />
          <img className={styles.mid} src="./img/mid.png" alt="logo-mid" />
          <img
            className={styles.right}
            src="./img/right.png"
            alt="logo-right"
          />
        </div>
        <div className={styles.formWrapper}>
          <h2>Skontaktuj się z nami</h2>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "",
            }}
            onSubmit={onSubmit}
          >
            {({ dirty }) => (
              <Form>
                <div className={styles.fieldsWrapper}>
                  <Field
                    id="name"
                    className={styles.inputField}
                    name="name"
                    placeholder="Imię"
                    as="input"
                  />

                  <Field
                    id="email"
                    className={styles.inputField}
                    name="email"
                    placeholder="Email"
                    as="input"
                  />

                  <Field
                    id="phone"
                    className={styles.inputField}
                    name="phone"
                    placeholder="Telefon"
                    as="input"
                  />

                  <Field
                    id="message"
                    className={styles.textField}
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
