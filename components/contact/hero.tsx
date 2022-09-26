import { useCallback, useMemo, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { CustomFieldTypes } from "../../utils/interfaces/shared";
import { Button, Field } from "../shared";
import { CreateYupSchema } from "../../utils/functions";
import { Spinner } from "../../utils/icons";

const Hero = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const MESSAGE_FIELDS = useMemo<CustomFieldTypes[]>(
    () => [
      {
        name: "name",
        id: "name",
        type: "text",
        placeholder: "Name",
        validationtype: "string",
        validations: [
          {
            type: "required",
            params: ["this field is required"],
          },
        ],
      },
      {
        name: "email",
        id: "email",
        type: "text",
        placeholder: "Email",
        validationtype: "string",
        validations: [
          {
            type: "required",
            params: ["this field is required"],
          },
        ],
      },
      {
        name: "number",
        id: "number",
        type: "text",
        placeholder: "Number",
        validationtype: "string",
        validations: [
          {
            type: "required",
            params: ["this field is required"],
          },
        ],
      },
      {
        name: "message",
        id: "message",
        type: "textarea",
        placeholder: "Message",
        validationtype: "string",
        validations: [
          {
            type: "required",
            params: ["this field is required"],
          },
        ],
      },
    ],
    []
  );

  const submitHandler = useCallback(async (values) => {
    try {
      setLoading(true);
      console.log(values);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <section className="mt-40">
      <div className="w-full px-10 lg:px-0 lg:w-10/12 mx-auto items-center">
        <div className="w-10/12 md:w-6/12 border-b-4 border-primary flex flex-col lg:flex-row lg:items-end text-white pb-4 mt-12 xl:mt-0 mb-12">
          <h2 className="capitalize">Contact</h2>
          <span className="text-sm lg:ml-8 mt-4 lg:mt-0 font-medium">
            a quote maybe
          </span>
        </div>

        <Formik
          initialValues={{ name: "", email: "", number: "", message: "" }}
          onSubmit={submitHandler}
          validationSchema={Yup.object().shape(
            MESSAGE_FIELDS.reduce(CreateYupSchema, {})
          )}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="flex flex-col lg:flex-row gap-4">
                {MESSAGE_FIELDS.slice(0, 3).map((field) => (
                  <div key={field.id} className="w-full">
                    <Field
                      {...field}
                      classnames={{ wrapper: "w-full ", input: "w-full p-4" }}
                    />

                    {/* @ts-ignore */}
                    {touched[field.name] && errors[field.name] && (
                      <small className="text-white">
                        {/* @ts-ignore */}
                        {errors[field.name]}
                      </small>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <Field
                  key={MESSAGE_FIELDS[3].id}
                  {...MESSAGE_FIELDS[3]}
                  classnames={{
                    wrapper: "w-full mt-4 lg:mt-8",
                    input: "w-full h-40 p-4",
                  }}
                />

                {/* @ts-ignore */}
                {touched[MESSAGE_FIELDS[3].name] &&
                  /* @ts-ignore */
                  errors[MESSAGE_FIELDS[3].name] && (
                    <small className="text-white">
                      {/* @ts-ignore */}
                      {errors[MESSAGE_FIELDS[3].name]}
                    </small>
                  )}
              </div>

              <div className="flex justify-end border-b-4 border-primary w-10/12 lg:w-7/12 ml-auto py-4">
                <Button type="submit" className="w-32 p-0 h-12">
                  {loading ? (
                    <span className="h-6 flex justify-center">
                      <Spinner />
                    </span>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Hero;
