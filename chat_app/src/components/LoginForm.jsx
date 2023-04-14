import { useState } from 'react';
import axios from 'axios';
//import { useNavigate } from "react-router-dom";

const projectID = '8b141629-215f-4eba-908f-4738fb9cf16e';

const LoginForm = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject })

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
    axios
      .post("http://localhost:3001/login", { username, password })
      .then((r) => props.onAuth({ ...r.data, password })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  // let navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">UnaDoctrina</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
        <div align="center">
              <button className='button' >
                Sign Up
              </button>
        </div>
      </div>
    </div>
    

  );
};

export default LoginForm;
