import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

export default function Topbar() {
    const user=true;
  return (
    <div className="top">
       
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              {/* HOME */}
              BLOG-LIST
            </Link>
          </li>

            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>

            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
           
          <li className="topListItem">
            <Link className="link" to="/write">
              CREATE-YOUR-BLOG
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
       
     
      {/* <div className="topRight">
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
      </div> */}

       <div>
        <h1 className='heading_style'> Blogger</h1>
        </div>
    </div>
  );
}