import { Field } from "formik";

import { CustomFieldTypes } from "../../utils/interfaces/shared";

const FieldComponent: React.FC<CustomFieldTypes> = (props) => {
  switch (props.type) {
    case "text":
    case "email":
    case "date":
    case "number":
    case "password":
    case "textarea": {
      return (
        <div className={props.classnames?.wrapper ?? ""}>
          {props.label && (
            <label htmlFor={props.id} className={props.classnames?.label ?? ""}>
              {props.label}
            </label>
          )}
          {props.type === "textarea" ? (
            <Field
              {...props}
              component="textarea"
              className={`${props.classnames?.input ?? ""}`}
            />
          ) : (
            <Field {...props} className={`${props.classnames?.input ?? ""}`} />
          )}

          {props.description && (
            <p className={props.classnames?.description ?? ""}>
              {props.description}
            </p>
          )}
        </div>
      );
    }

    case "select": {
      return (
        <div className={props.classnames?.wrapper}>
          {props.label && (
            <label htmlFor={props.id} className={props.classnames?.label ?? ""}>
              {props.label}
            </label>
          )}
          <Field
            {...props}
            as="select"
            className={props.classnames?.input ?? ""}
          >
            <option
              disabled
              hidden
              selected
              className={props.classnames?.option ?? ""}
              value=""
            >
              {props.placeholder ?? "Select"}
            </option>
            {props.choices?.map((choice) => (
              <option
                key={choice.value.trim()}
                className={props.classnames?.option ?? ""}
                value={choice.value}
              >
                {choice.text}
              </option>
            ))}
          </Field>

          {props.description && (
            <p className={props.classnames?.description ?? ""}>
              {props.description}
            </p>
          )}
        </div>
      );
    }

    case "radio":
    case "checkbox": {
      return (
        <div className={props.classnames?.wrapper ?? ""} role="group">
          {props.choices.map((choice) => (
            <label
              key={`${props.name}.${choice.value}`}
              htmlFor={`${props.name}.${choice.value}`}
              className={props.classnames?.label ?? ""}
            >
              <Field
                {...props}
                id={`${props.name}.${choice.value}`}
                placeholder={props.placeholder ?? ""}
                value={choice.value}
                className={props.classnames?.option ?? ""}
              />
              <div className="inline-block">{choice.text} </div>
            </label>
          ))}

          {props.description && (
            <p className={props.classnames?.description ?? ""}>
              {props.description}
            </p>
          )}
        </div>
      );
    }

    default: {
      return <></>;
    }
  }
};

export default FieldComponent;
