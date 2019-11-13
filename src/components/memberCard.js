import React from "react";

const MemberCard = props => {
  return (
    <div className="member-wrapper">
      {props.members.map(teammate => (
      <div className="member" key={teammate.id}>
        <h2>{teammate.name}</h2>
        <p>{teammate.position}</p>
      </div>
    ))}
  </div>
  );
};

export default MemberCard;