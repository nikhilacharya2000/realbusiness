import React, { useState } from 'react'
import LoginPage from './LoginPage';

// this is login and signup component
const OldApi = () => {
	const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new user object with the provided data
    const user = {
      name,
      email,
      password
    };

    try {
      const response = await fetch('http://192.168.0.103/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        console.log('User registered successfully!');
        // Handle successful registration, e.g., show a success message or redirect the user
      } else {
        console.log('Registration failed.');
        // Handle registration failure, e.g., show an error message
      }
    } catch (error) {
      console.log('Error:', error);
      // Handle any network or fetch-related errors
    }
  };


// loginh form api start



// loginh form api start
	
  return (
    <div className='body-login' >

<div class="main-login">  	
		<input className="input-login" type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form onSubmit={handleSubmit}>
					<label className="label-form" for="chk" aria-hidden="true">Sign up</label>
					

                    <input className="input-login" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="User name" />


					


                    <input placeholder="Email" className="input-login" type="email" value={email} onChange={(e) => setEmail(e.target.value)}   />

					



                    <input className="input-login" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>


          {/* <input className="input-login" type="password" name="cpswd" 
		  value={cpswd} onChange={(e)=>{setCPswd(e.target.value)}} placeholder="confirm Password" required=""/> */}
					<button type='submit' className='login-btn'>Sign up</button>
				</form>
			</div>

			<div class="login">
				{/* <form>
					<label className="label-form" for="chk" aria-hidden="true">Login</label>
					<input className="input-login" type="email" name="email" placeholder="Email" required=""/>
					<input className="input-login" type="password" name="pswd" placeholder="Password" required=""/>
					<button className='login-btn'>Login</button>
				</form> */}
        <LoginPage/>
			</div>
      
	</div>
    </div>
  )
}


export default OldApi
