import { Field } from "formik"
import Input from "./Input"

const FormField = (props) => {
  const { children, className, ...otherProps } = props

  return (
    <Field {...otherProps}>
      {({ field, meta: { touched, error } }) => (
        <div className={className}>
          <label className="block font-bold mt-1">
            {children}
            <Input className="w-full" {...field} {...otherProps} />
          </label>

          <label htmlFor="password" className="sr-only">
            Password
          </label>

          {touched && error ? (
            <p className="text-red-500 p-2 text-sm">{error}</p>
          ) : null}
        </div>
      )}
    </Field>
  )
}

export default FormField
