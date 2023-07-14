import React, { useState } from 'react'
import axios from 'axios';


const Login = () => {
	const data ={name : "", email : "",password: ""};
	const [inputData, setInputdata]= useState(data);
	
	const handleData=(e)=>{
		setInputdata({...inputData,[e.target.name]:[e.target.value]})
	}
	const handleSubmit=(e)=>{
		e.preventDefault();
		axios.post("https://jsonplaceholder.typicode.com/users")
		.then((response)=>{
			console.log(response)
		})
	}
  return (
    <div className='body-login' >

<div class="main-login">  	
		<input className="input-login" type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form>
					<label className="label-form" for="chk" aria-hidden="true">Sign up</label>
					<input className="input-login" type="text" name="name" value={inputData.name} onChange={handleData} placeholder="User name" required=""/>
					<input className="input-login" type="email" name="email" value={inputData.email} onChange={handleData} placeholder="Email" required=""/>
					<input className="input-login" type="password"  name="password" value={inputData.password} onChange={handleData} placeholder="Password" required=""/>
          {/* <input className="input-login" type="password" name="cpswd" 
		  value={cpswd} onChange={(e)=>{setCPswd(e.target.value)}} placeholder="confirm Password" required=""/> */}
					<button type='button' onClick={handleSubmit} className='login-btn'>Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label className="label-form" for="chk" aria-hidden="true">Login</label>
					<input className="input-login" type="email" name="email" placeholder="Email" required=""/>
					<input className="input-login" type="password" name="pswd" placeholder="Password" required=""/>
					<button className='login-btn'>Login</button>
				</form>
			</div>
	</div>
    </div>
  )
}


export default Login
