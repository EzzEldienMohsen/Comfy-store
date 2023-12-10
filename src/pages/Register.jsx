/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { FormInput, SubmitBtn } from '../components'
import { Form, Link, redirect } from 'react-router-dom'
import { autoFetch } from '../utilities'
import { toast } from 'react-toastify'
export var action = async ({ request }) => {
  var formData = await request.formData()
  var data = Object.fromEntries(formData)
  try {
    var response = await autoFetch.post('/auth/local/register', data)
    toast.success('account created successfully')
    return redirect('/login')
  } catch (error) {
    var errorMessage =
      error?.response?.data?.error?.message ||
      'please double check your credentials'
    toast.error(errorMessage)
    return null
  }
}
const Register = () => {
  return (
    <div className="h-screen grid place-items-center">
      <Form
        method="Post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          already a member?
          <Link
            to="/login"
            className="link link-hover link-primary capitalize ml-2"
          >
            Login
          </Link>
        </p>
      </Form>
    </div>
  )
}

export default Register
