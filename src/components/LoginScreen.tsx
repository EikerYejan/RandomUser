import React, { useState, useEffect, ChangeEvent, FormEvent } from "react"
import cogoToast from "cogo-toast"
import Loader from "./Loader"

import image from "../assets/images/login.jpg"
import google from "../assets/images/google.png"
import "../assets/styles/components/Login.scss"

type LoginScreenProps = {
  withGoogle: () => void
  withEmail: (email: string, password: string) => any
  createUser: (email: string, password: string) => any
  error: string | undefined
  loading: boolean
}

const LoginScreen: React.FC<LoginScreenProps> = ({
  withGoogle,
  withEmail,
  createUser,
  error,
  loading,
}) => {
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [action, setAction] = useState("Login")

  /** Alternative action  **/
  const altAction = action === "Login" ? "Register" : "Login"

  /**
   * Handle input change
   * @param e
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  /**
   * Handle form submit
   * @param e
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const authFunction = action === "Login" ? withEmail : createUser
    authFunction(formData.email, formData.password)
  }

  /**
   * Show errors
   */
  useEffect(() => {
    if (!loading && error)
      cogoToast.error(error, {
        position: "top-right",
        heading: "Random users says:",
        hideAfter: 3,
      })
  }, [error, loading])

  /**
   * Returns input props
   */
  const getInputProps = (
    type: string,
    name: string,
    placeholder: string
  ): object => ({
    type,
    name,
    placeholder,
    required: true,
    onChange: handleChange,
  })

  return (
    <div className="columns is-multiline login-wrapper">
      <div className="column is-6 login-form">
        <div
          className={`login-form__inner ${loading ? "form--is-loading" : ""}`}
        >
          <Loader loading={loading} />
          <h1>Welcome to Random Users</h1>
          <form onSubmit={handleSubmit}>
            <input {...getInputProps("email", "email", "Email")} />
            <input
              minLength={6}
              {...getInputProps("password", "password", "Password")}
            />
            <button className="btn-white" type="submit">
              {action}
            </button>
          </form>
          <button className="btn-with-icon google-login" onClick={withGoogle}>
            <img src={google} alt="google-icon" />
            {action} with Google
          </button>
          <button className="btn-light" onClick={() => setAction(altAction)}>
            {altAction}
          </button>
        </div>
      </div>
      <div className="column is-6 login-image is-paddingless">
        <img src={image} alt="login" />
      </div>
    </div>
  )
}

export default LoginScreen
