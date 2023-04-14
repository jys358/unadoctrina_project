import { ChatEngine } from 'react-chat-engine';
//import { useState } from "react";
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
//import SignupForm from './components/SignupForm';
import './App.css';
//import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


  
const projectID = '8b141629-215f-4eba-908f-4738fb9cf16e';

// const App = () => {
//   if (!localStorage.getItem('username')){
//     return(
//     <Router>
//       <nav>
//         <Link to ="/"> Home </Link>
//         <Link to ="/SignUpForm"> Home </Link>
//       </nav>
//       <Routes>
//         <Route path = "/" element={<LoginForm/>}/>
//         <Route path = "/SignupForm" element={<SignupForm/>}/>
//       </Routes>
//     </Router>
//       )
//   };
//   return (
//     <ChatEngine
//       height="100vh"
//       projectID={projectID}
//       userName={localStorage.getItem('username')}
//       userSecret={localStorage.getItem('password')}
//       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
//       onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
//     />
//   );
// };

// export default App;

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};


export default App;
