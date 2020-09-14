import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [users, setUsers]= useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
      const res = await fetch("/api/users");
      res
        .json()
        .then(res => {
          setUsers(res);
        })
      } catch(err) {
        // error handling code
      } 
    }
    fetchData();
  }, []);

  
  return (
    <div>
      <div className="text-center my-3 text-secondary">
        <h1>Welcome to Mandaragat Server</h1>
        <h4>For Testing Purposes</h4>
      </div>
      <div className="container">
        <form action="/api/users" method="POST" className="mb-3">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="form-control"></input>
          </div>
          <input type="submit" value="Add User" className="btn btn-primary btn-block"></input>
        </form>
      </div>
      <div className="container">
        <ul className="list-group">
          {Array.isArray(users)
            ? users.map(user => (
                <li className="list-group-item">{ user.name }</li>
              ))
            :
            ''
          }
        </ul>
      </div>
    </div> 
  );
}

export default App;
