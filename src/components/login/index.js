

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser} from '../../state/action-creators';


const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className='container'>
      <div className='register'>
        <div className='register-card'>
            <h2>Login</h2>
            <form>
           
                <div className='mb-3'>
                <input type="email"  className='input-field' name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                </div>
                <div className='mb-3'>
                <input type="password" className='input-field' name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                </div>
                <div className='mb-3'>
                    <button onClick={handleSubmit} className='submit'>{"Login"}</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
