import React, {useState} from 'react';
import MemberCard from './components/MemberCard'
import MemberForm from './components/MemberForm'
import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Team Member 1",
      position: "The Main Guy"
    }
  ]);

  const addNewTeamMember = member => {
    const nextMember = {
      id: Date.now(),
      name: member.name,
      position: member.position
    };
    setMembers([...members, nextMember])
  }

  return (
    <div>
      <h1>Oh shit, there's the team</h1>
      <MemberCard members={members} />
      <h1>Oh shit, add even more team</h1>
      <MemberForm addNewTeamMember={addNewTeamMember} />
    </div>
  );
}

export default App;
