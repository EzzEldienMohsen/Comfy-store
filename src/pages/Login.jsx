/* eslint-disable react-refresh/only-export-components */
import { FormInput, SubmitBtn } from '../components';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { autoFetch } from '../utilities';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/UserSlice';
import { useDispatch } from 'react-redux';
export var action =
  (store) =>
  async ({ request }) => {
    var formData = await request.formData();
    var data = Object.fromEntries(formData);
    try {
      var response = await autoFetch.post('/auth/local', data);
      store.dispatch(loginUser(response.data));
      toast.success('successfully logged in');
      return redirect('/');
    } catch (error) {
      var errorMessage =
        error?.response?.data?.error?.message ||
        'please check your credentials';
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  var dispatch = useDispatch();
  var navigate = useNavigate();
  var handleGuestUser = async () => {
    try {
      var response = await autoFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser(response.data));
      toast.success('logged in as a guest');
      navigate('/');
    } catch (error) {
      var errorMessage =
        error?.response?.data?.error?.message ||
        'please double check your credentials';
      toast.error(errorMessage);
      return null;
    }
  };
  return (
    <div className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 bg-base-100 shadow-lg p-8 flex flex-col gap-y-4"
      >
        <h2 className="text-center text-3xl font-bold">Login</h2>
        <FormInput type="email" label="email" name="identifier" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button
          onClick={handleGuestUser}
          type="button"
          className="btn btn-secondary btn-block uppercase"
        >
          guest user
        </button>
        <p className="text-center">
          not a member yet?{' '}
          <Link
            to="/register"
            className="link link-hover link-primary capitalize ml-2"
          >
            register
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
