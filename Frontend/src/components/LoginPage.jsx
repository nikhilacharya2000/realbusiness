import React, { useState } from "react";
import { API_ENDPOINT } from "../constant";
// main login component attached in OldApi.jsx
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    fetch(`${API_ENDPOINT}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        // Handle the response data
        console.log(responseData);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });
  };

  return (
    // <div>
    //   <h1>Login Page</h1>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="email">Email:</label>
    //       <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password:</label>
    //       <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    //     </div>
    //     <div>
    //       <input type="submit" value="Login" />
    //     </div>
    //   </form>
    // </div>
    <div>
      <form onSubmit={handleSubmit}>
        <label className="label-form" for="chk" aria-hidden="true">
          Login
        </label>
        <input
          className="input-login"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="input-login"
          type="password"
          name="pswd"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login-btn">Loginsss</button>
      </form>
    </div>
  );
}

export default LoginPage;
