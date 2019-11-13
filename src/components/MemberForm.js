import React, { useState } from "react";
import styled from "styled-components";

const formWrapper = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  border: blue solid 2px;
  height: 5rem;
`

const MemberForm = props => {
  const [newMember, setNewMember] = useState({name: "", position: ""})

  const handleChanges = event => {
    setNewMember({...newMember, [event.target.name]: event.target.value})
  }

  const submitForm = event => {
    event.preventDefault()
    props.addNewTeamMember(newMember)
    setNewMember({name: "", position: ""})
  }

  return (
    <formWrapper>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" onChange={handleChanges} value={newMember.name} />
        <label htmlFor="position">Position: </label>
        <input type="text" id="position" name="position" onChange={handleChanges} value={newMember.position}/>
        <button type="submit">Create New Member</button>
      </form>
    </formWrapper>
  )
}

export default MemberForm;