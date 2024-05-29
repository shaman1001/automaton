import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/calendar">Calendar</Link>
        </nav>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/calendar" component={Calendar} />
        </Switch>
      </div>
    </Router>
  );
};

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:5000/register', { username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:5000/login', { username, password });
    setToken(response.data.token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
      {token && <p>Token: {token}</p>}
    </form>
  );
};

const Calendar = () => {
  return (
    <div>
      <h2>Calendar</h2>
      {/* Here you would integrate a calendar component, like FullCalendar */}
      <p>Calendar will be here</p>
    </div>
  );
};

export default App;
