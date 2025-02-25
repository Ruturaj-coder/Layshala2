import React from "react";
import { Outlet, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentLogin = () => {
  return (
    <>
      <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
        <div className="position-relative" style={{ maxWidth: '400px', width: '100%' }}>
          <div 
            className="btn-group position-absolute w-100" 
            role="group" 
            style={{ top: '-30px', zIndex: 1 }}
          >
            <button type="button" className="btn" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '0px', backgroundColor:'#FFA800'}}>Student's Login</button>
            <button type="button" className="btn btn-light" style={{ borderTopRightRadius: '10px', borderTopLeftRadius: '0px' }}>Admin Login</button>
          </div>

          <div className="card p-4 shadow-sm" style={{ border: 'none', borderRadius: '10px', paddingTop: '60px' }}>
            <h2 className="text-center mb-4" style={{ fontFamily: 'Old Standard TT, serif', fontWeight: 'bold', color: '#800000' }}>Log in</h2>

            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Username"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Password"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  You agree to the <Link to="#" className="#" style={{color:'#800000', fontFamily:'Open Sans,serif', opacity:0.8}}>terms and conditions</Link>
                </label>
              </div>
              <Link to="/login/admin/home">
                <button type="submit" className="btn w-100" style={{backgroundColor:'#FFA800'}}>Log in</button>
              </Link>
            </form>

            <p className="text-center mt-3" style={{ color: '#808080', fontFamily: 'Kdam Thmor, sans-serif', fontSize: '14px' }}>
              Don't Have an Account? <Link to={'/register'} style={{ color: '#800000', fontFamily: 'Old Standard TT, serif', fontSize: '16px', textDecoration: 'none', fontWeight: 600 }}>Register</Link>
            </p>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default StudentLogin;





