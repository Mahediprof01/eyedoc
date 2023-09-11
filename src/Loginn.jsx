import React, { useState } from 'react'
import { database } from './Fbconfig';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import logineye from '../src/img/logineye.png'

function Loginn() {
    const [login,setLogin] = useState(false);
    const history = useNavigate()
    const handleSubmit = (e,type)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(type === 'signup'){
            createUserWithEmailAndPassword(database,email,password).then(data=>{
                console.log(data,"authData");
                history('/home')
            }).catch(err=>{
                alert(err.code)
                setLogin(true);
            })
        }else{
            signInWithEmailAndPassword(database,email,password).then(data=>{
                console.log(data,"authData");
                history('/home')
            }).catch(err=>{
                alert(err.code)
            })
        }
        
       
    }
  return (
    <>
        <section className="footer-header mb-5">
         <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto nav-border p-4">
        <div className="row p-4">
            <div className="col-md-6 col-12  ">
        <h1 className='text-color text-center'>{login?'Sign In':'Sign Up'}</h1>
            <form onSubmit={(e)=>handleSubmit(e,login?'signin':'signup')}>
                  <div className="mb-3 text-color">
                    <label className="form-label text-color">Email</label>
                    <input className="form-control"  type="text" name="email" id=""  placeholder='Enter Your Email'/>
                  </div>
                  <div className="text-color">
                  <label className="form-label text-color">Password</label>
                  <input className="form-control"  type="password" name="password" placeholder='Enter Your Password'/><br /><br />
                  </div>
                  <div className="text-center mb-4">
                  <button className='btn-doc2'>{login?'sign In':'sign Up'}</button>
                  </div>   
         </form>
            </div>
            <div className="col-md-6 border-color">
            <img className='img-fluid animated' src={logineye}  alt="#" />
            </div>
        </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Loginn