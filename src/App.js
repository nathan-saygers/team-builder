import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Team Member 1",
      position: "The Main Guy"
    }
  ]);

  return (
    <div>
      <h1>hello, World</h1>
    </div>
  );
}

export default App;
