import React from "react";
import styled from "styled-components";

const MembersWrapper = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
const MembCard = styled.div`
  text-align: center;
  height: 20rem;
  width: 20rem;
  color: white;
  background: grey;
  border: solid black 2px;
  border-radius: 10px;
`

const MemberCard = props => {
  return (
    <MembersWrapper>
      {props.members.map(teammate => (
      <MembCard key={teammate.id}>
        <h2>{teammate.name}</h2>
        <p>{teammate.position}</p>
      </MembCard>
    ))}
  </MembersWrapper>
  );
};

export default MemberCard;