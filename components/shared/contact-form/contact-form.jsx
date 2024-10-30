import { Formik, Form, Field } from "formik";
import { useCallback } from "react";
import classNames from "classnames";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import Link from 'next/link';

import styles from "./contact-form.module.scss";
import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default function ContactForm() {
  const onSubmit = useCallback((values) => {
    const { name, email, phone, message } = values;

    const messageData = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      to_email: process.env.NEXT_PUBLIC_TO_EMAIL,
      reply_to: email,
      message,
    };

    try {
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        messageData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("Wysłano!");
    } catch (err) {
      toast.error("Coś poszło nie tak");
    }
  }, []);

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Required"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),
    message: yup
      .string()
      .min(2, "Too Short!")
      .max(2500, "Too Long!")
      .required("Required"),
    privacyPolicy: yup
      .boolean()
      .oneOf([true], "Musisz zaakceptować politykę prywatności")
      .required("Musisz zaakceptować politykę prywatności"),
  });

  return (
    <div id="contact-form" className={styles.formWrapper}>
      <h2>Skontaktuj się z nami</h2>
      <p>
        Skontaktuj się z nami już dziś, aby dowiedzieć się więcej o naszej
        ofercie i przekonać się, jak możemy spełnić Twoje potrzeby związane z{" "}
        <strong>budową i wyposażeniem kortów tenisowych</strong>. Jesteśmy
        gotowi dostarczyć Ci najlepsze rozwiązania, które zapewnią doskonałe
        warunki do <strong>gry w tenisa</strong> i spełnią Twoje oczekiwania.
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
          privacyPolicy: false,
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ dirty, errors, touched, isValid, isSubmitting }) => (
          <Form>
            <div className={styles.fieldsWrapper}>
              <Field
                id="name"
                className={classNames(styles.inputField, {
                  [styles.error]: errors.name && touched.name,
                })}
                name="name"
                placeholder="Imię"
                as="input"
              />

              <Field
                id="email"
                className={classNames(styles.inputField, {
                  [styles.error]: errors.email && touched.email,
                })}
                name="email"
                placeholder="Email"
                as="input"
              />

              <Field
                id="phone"
                className={classNames(styles.inputField, {
                  [styles.error]: errors.phone && touched.phone,
                })}
                name="phone"
                placeholder="Telefon"
                as="input"
              />

              <Field
                id="message"
                className={classNames(styles.textField, {
                  [styles.error]: errors.message && touched.message,
                })}
                name="message"
                placeholder="Wiadomość"
                as="textarea"
              />

              <div className={styles.checkboxWrapper}>
                <label className={styles.checkboxLabel}>
                  <Field
                    type="checkbox"
                    name="privacyPolicy"
                    className={styles.checkbox}
                  />
                  <span className={styles.checkboxText}>
                    Zapoznałem się z{" "}
                    <Link href="/rodo" className={styles.policyLink}>
                      polityką prywatności
                    </Link>
                  </span>
                </label>
                {errors.privacyPolicy && touched.privacyPolicy && (
                  <div className={styles.errorText}>{errors.privacyPolicy}</div>
                )}
              </div>

              <button
                className={classNames(styles.submitButton, {
                  [styles.active]: isValid && dirty && !isSubmitting,
                })}
                type="submit"
                disabled={!isValid || !dirty || isSubmitting}
              >
                Wyślij
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}