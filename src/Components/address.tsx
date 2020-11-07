import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@material-ui/core";

interface Props {
  handleNext: () => void;
}

const Address: React.FC<Props> = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{ country: "", state: "", city: "" , address: "" }}
      validationSchema={Yup.object({
        country: Yup.string().required("Required").min(4, "Invalid"),
        state: Yup.string().required("Required").min(4, "Invalid"),
        city: Yup.string().required("Required").min(4, "Invalid"),
        address: Yup.string().required("Required").max(200 , "Invalid")
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
            label="Country"
            variant="standard"
            name="country"
            type="text"
            error={touched.country && errors.country}
            helperText={touched.country && errors.country}
          />
          <br />
          <br />
          <Field
            as={TextField}
            label="State"
            variant="standard"
            name="state"
            type="text"
            error={touched.state && errors.state}
            helperText={touched.state && errors.state}
          />
          <br />
          <br />
          <Field
            as={TextField}
            label="City"
            variant="standard"
            name="city"
            type="text"
            error={touched.city && errors.city}
            helperText={touched.city && errors.city}
          />
          <br />
          <br />
          <Field
            as={TextField}
            label="Address"
            variant="standard"
            name="address"
            type="text"
            error={touched.address && errors.address}
            helperText={touched.address && errors.address}
          />
          <br />
          <br />
          <Button
            variant="outlined"
            disabled={!isValid || !dirty}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Address;