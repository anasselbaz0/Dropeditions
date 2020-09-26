import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../Button';
import Input from '../Input/Input';
import Link from '../Link/Link';
import ButtonGroup from '../Button/ButtonGroup';
import axios from "axios";
import {setIsLoggedIn, updateProfile} from "../../redux/actions/authActions";
import {useDispatch} from "react-redux";

function Login() {

  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  }

  const dispatch = useDispatch();

  const trySignUp = (username, password, role) => {
    console.log('hiiiii')
    axios.post(
        `http://localhost:8080/auth/signup`,
        {
          username,
          password,
          role
        },
        axiosConfig)
        .then(response => console.log(response))
        .catch(error => console.log(error));
  }

  const trySignIn = (username, password) => {
    axios.post(`http://localhost:8080/auth/signin`, {username, password}, axiosConfig)
        .then(response => {
          dispatch(setIsLoggedIn(true));
          dispatch(updateProfile(response.data));
        })
        .catch(error => console.log(error));
  }

  const [panel, setPanel] = useState('LOGIN');
  const switchPanel = () =>
    panel === 'LOGIN' ? setPanel('SIGNUP') : setPanel('LOGIN');
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      role: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Required'),
      password: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('Required'),
    }),
    validateOnChange: true,
    onSubmit: values => {
      panel === 'LOGIN' ? trySignIn(values.username, values.password) : trySignUp(values.username, values.password, [values.role]);
    },
  });
  return (
    <React.Fragment>
      <div className="text-2xl md:text-3xl font-semibold text-center">
        Welcome to <span className="text-blue-500">Dropeditions's test</span>{' '}
      </div>
      <div className="mt-4 shadow-md rounded-sm bg-white p-2 md:p-4 py-2 md:py-4 w-4/5 max-w-xl flex flex-col m-auto">
        <div className="text-center">
          <div className="uppercase font-bold text-blue-600">{panel}</div>
        </div>
        <form
          className="m-auto flex-auto bg-white p-2 w-full rounded-lg"
          onSubmit={formik.handleSubmit}
        >
          <Input
            focus
            label="Username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            error={
              formik.touched.username && formik.errors.username
                ? formik.errors.username
                : null
            }
          />
          {(panel !== 'LOGIN') &&
          <select
              className="p-4 md:p-6 bg-gray-200 text-gray-700 mb-3 w-full rounded-sm"
              value={formik.values.role}
              onChange={formik.handleChange}
              name="role"
          >
            <option value="privateUser1"> User type 1 </option>
            <option value="privateUser2"> User type 2 </option>
            <option value="privateUser3"> User type 3 </option>
          </select>}
          <Input
            label="Password"
            type="password"
            placeholder="**********"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null
            }
          />
          <div className="flex mb-0">
            <ButtonGroup>
              <Button
                disabled={!formik.isValid}
                type="submit"
              >
                {panel === 'LOGIN' ? 'Login' : 'Signup'}
              </Button>
            </ButtonGroup>
          </div>
          <div className="text-right mt-1 md:mt-2">
            <Link onClick={() => switchPanel()}>
              {panel === 'LOGIN' ? 'Signup' : 'Login'}
            </Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
