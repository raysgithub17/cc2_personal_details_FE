import React, { useState } from 'react';
import axios from 'axios';


function Update() {
  const [userid, setuserid] = useState();
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleuseridChange = (e) => {
    setuserid(e.target.value);
    console.log(setuserid);
  };

  const handleusernameChange = (e) => {
    setusername(e.target.value);
  };

  const handleemailChange = (e) => {
    setemail(e.target.value);
  };

  const handlepasswordChange = (e) => {
    setpassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const chuma = { "userid" : userid , "username" : username , "email" : email , "password" : password  };
    axios.put("http://localhost:8080/put",chuma);
    window.location.reload()
    console.log(chuma);

  };

  return (
    <div className="container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h2>UPDATE PERSON DETAILS</h2>
        <div className="form-group">
          <label htmlFor="name">userid:</label>
          <input
            type="text"
            id="userid"
            name="userid"
            value={userid}
            onChange={handleuseridChange}
          />
        </div><div className="form-group">
          <label htmlFor="username">username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleusernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleemailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlepasswordChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Update;