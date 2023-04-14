import React from 'react';
import Add from '../img/addImg.png'


const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].value[0];

    }
    return ( 
        <div className='formContainer '>
            <div className='formWrapper'>
                <span className="logo">Hotline</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='display name'/>
                    <input type='email' placeholder='email'/>
                    <input type='password' placeholder='password'/>
                    <input style={{display:'none'}}type='file' id='file'/>
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Have an account? Login!</p>

            </div>
        </div>
     );
}
 
export default Register;