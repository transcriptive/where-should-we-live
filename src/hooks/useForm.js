import { useState } from 'react';

// useForm hook groups all seperate state variables into one "state" object variable -cm
export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
    }
  ]
}