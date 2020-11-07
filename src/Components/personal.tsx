import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";

interface Props {
  handleNext: () => void;
}

const Personal: React.FC<Props> = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", age: 0 }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));

          handleNext();
        }, 400);
      }}
    >
      {({ errors, touched, dirty, isValid }) => (
        <Form>
          <Field
            as={TextField}
            variant="standard"
            label="First Name"
            name="firstName"
            type="text"
            error={errors.firstName && touched.firstName}
            helperText={touched.firstName && errors.firstName}
          />
          <br />
          <br />
          <Field
            as={TextField}
            variant="standard"
            label="Last Name"
            name="lastName"
            type="text"
            error={errors.lastName && touched.lastName}
            helperText={touched.lastName && errors.lastName}
          />
          <br />
          <br />
          <Field
            as={TextField}
            variant="standard"
            label="Birthday"
            type="date"
            InputLabelProps={{
                shrink: true,
            }}
            helperText="optional"
          />
          <br />
          <br />
          <Button
            variant="outlined"
            type="submit"
            disabled={!dirty || !isValid}
          >
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Personal;