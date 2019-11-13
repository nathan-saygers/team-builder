import React, {useState} from 'react';
import MemberCard from './components/MemberCard';
import MemberForm from './components/MemberForm';
import styled from 'styled-components';
import './App.css';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`

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
    <AppWrapper>
      <h1>Oh shit, there's the team:</h1>
      <MemberForm addNewTeamMember={addNewTeamMember} />
      <MemberCard members={members} />
    </AppWrapper>
  );
}

export default App;
