import { Formik } from "formik"
import { useCallback, useContext } from "react"
import * as yup from "yup"
import { AppContext } from "../src/components/AppContext"
import { emailValidator, passwordValidator } from "../src/validators/validators"
import FormField from "../src/components/formUI/FormField"
import Button from "../src/components/Button"

const initialValues = {
  email: "",
  password: "",
}

const validationSchema = yup.object().shape({
  email: emailValidator.required(),
  password: passwordValidator.required(),
})

const Login = () => {
  const { login } = useContext(AppContext)
  const handleFormSubmit = useCallback(
    ({ email, password }, { resetForm }) => {
      login({ email, password })
      resetForm()
    },
    [login]
  )

  return (
    <div className="flex justify-center">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, isValid, handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <FormField name="email" type="email">
              E-mail
            </FormField>
            <FormField name="password" type="password">
              Password
            </FormField>
            <Button
              type="submit"
              //find a way to disable the button from the beginning
              disabled={isSubmitting || !isValid}
              variant="btnValidation"
              size="lg"
            >
              Log in
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Login
