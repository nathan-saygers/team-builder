import React from "react";
import styled from "styled-components";

const MembersWrapper = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2.5rem 0 2.5rem 0;
`
const MembCard = styled.div`
  text-align: center;
  height: 10rem;
  width: 20rem;
  color: white;
  background: grey;
  border: solid black 2px;
  border-radius: 10px;
  margin: 1rem;
`

const MemberCard = props => {
  return (
    <MembersWrapper>
      {props.members.map(teammate => (
      <MembCard key={teammate.id}>
        <h2>{`Name: ${teammate.name}`}</h2>
        <p>{`Email: ${teammate.email}`}</p>
        <p>{`Position: ${teammate.position}`}</p>
      </MembCard>
    ))}
  </MembersWrapper>
  );
};

export default MemberCard;