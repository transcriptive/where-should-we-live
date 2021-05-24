import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import authService from "../../services/authService";
import { useForm } from '../../hooks/useForm'

export default function Signup (props) {
  const history = useHistory();
  const formRef = useRef();
  const [message, updateMessage] = useState('')
  const [formInvalid, setValidForm] = useState(true)
  const [formValue, handleChange] = useForm({
    email: "",
    password: "",
    passwordConf: "",
  });

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
    updateMessage('');
  }, [formValue]);
  
  const handleSubmit = async (e) => {
    const { handleSignupOrLogin } = props;
    console.log(formValue.email, formValue.password)
    e.preventDefault();
    try {
      if(formValue.password !== formValue.passwordConf)
        throw Error("Passwords must match")
      await authService.signup(formValue);
      handleSignupOrLogin()
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

    return (
      <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex justify-center">
          <img width="150" 
          src="/images/Auto-Mastery-fav.png" 
          alt='logo'
          />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign Up for an account</h2>
          <div className="mt-8">
       
            <div className="mt-6">
              <form ref={formRef} autoComplete='off' onSubmit={handleSubmit}className="space-y-6">  
              {message && <p>{message}</p>}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="on"
                      onChange={handleChange}
                      value={formValue.email}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="off"
                      onChange={handleChange}
                      value={formValue.password}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="passwordConf" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="confim"
                      name="passwordConf"
                      type="password"
                      autoComplete="off"
                      onChange={handleChange}
                      value={formValue.passwordConf}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                {/* ADD later when you figure this out */}

                {/* <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot your password?
                    </a>
                  </div>
                </div> */}

                <div>
                  <button
                    disabled={formInvalid}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              &nbsp;&nbsp;
              <Link to='/login'>
              <h3>Already have an account? <p className='text-red-500 font-bold' href='/login'>Log in</p></h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/car-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
    );
  }



