

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser} from '../../state/action-creators';


const Register = () => {
  const dispatch = useDispatch();
const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {

    e.preventDefault();
 
    dispatch(registerUser(formData));
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
            <h2>Register</h2>
            <form>
            <div className='mb-3'>
            <input type="text" name="name"  className='input-field' value={formData.name} onChange={handleChange} placeholder="Name" />
                </div>
                <div className='mb-3'>
                <input type="email" name="email"  className='input-field' value={formData.email} onChange={handleChange} placeholder="Email" />
                </div>
                <div className='mb-3'>
                <input type="password" name="password"  className='input-field' value={formData.password} onChange={handleChange} placeholder="Password" />
                </div>
                <div className='mb-3'>
                    <button className='submit' onClick={handleSubmit}>Register</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register
