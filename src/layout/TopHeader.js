

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logoutUser} from '../state/action-creators';


const TopHeader = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(state=> state?.reducer?.currentUser);
  const isAuthenticated  = useSelector(state=>state?.reducer?.isAuthenticated)
  const handleLogout=()=>{
    dispatch(logoutUser());
  }
  
  return (
    <header className='top-header'>
      <div className='container'>
        <div className='top-header__menu'>
          <ul>
            <li><Link to="">Forum</Link></li>
            <li><Link to="">Forum</Link></li>
            <li><Link to="">Forum</Link></li>
            <li><Link to="">Forum</Link></li>
            <li><Link to="">Forum</Link></li>
          </ul>
          <div>
            <ul className='auth'>
             {isAuthenticated?
              <li><Link >{currentUser?.email}</Link></li> :<li><Link to="/register">Register</Link></li>}
              {isAuthenticated? <li onClick={handleLogout}><Link to="/login">Logout</Link></li>:<li><Link to="/login">Login</Link></li>
             }
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopHeader
