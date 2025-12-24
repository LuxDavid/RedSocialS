import React from 'react';
import { useForm } from '../hooks/useForm.jsx';

const Login = () => {

    // const listOFUsers= async (e) => {
    //         e.preventDefault();
    //         const request= await fetch("http://localhost:8080/api/users/listUsers", {
    //           method:"GET",
    //           headers:{
    //             "Content_type": "application/json"
    //           }
    //         });

    //         const result= await request.json();
    //         console.log(result.data.docs);
            
    // }

    //   const getEmail= async (e) => {
    //         e.preventDefault();

    //         let userData= form;

    //         const request= await fetch("http://localhost:8080/api/users/email", {
    //           method:"POST",
    //           headers:{
    //             "Content-type": "application/json"
    //           },
    //           body:JSON.stringify(userData),
    //         });

    //         const result= await request.json();
    //         console.log(result.data[0].name);
            
    // }

      const {form, changed} = useForm({});

      const login= async (e) => {
            e.preventDefault();

            let userData= form;

            const request= await fetch("http://localhost:8080/api/session/login", {
              method:"POST",
              headers:{
                "Content-type": "application/json"
              },
              credentials:'include',
              body:JSON.stringify(userData),
            });

    }

  return (
    <>
        <form method='POST' onSubmit={login} className='form-page'>

                <label htmlFor="email" className='labels-login'>Email</label>
                <input type="email" name='email' className='login-input' onChange={changed}/>

                <label htmlFor="password" className='labels-login'>Password</label>
                <input type="password" name='password' className='login-input' onChange={changed}/>

                <input type="submit" value="Iniciar sesión"/>

        </form>
    </>
  )
}

export default Login