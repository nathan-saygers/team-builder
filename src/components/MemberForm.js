import React, { useState } from "react";
import styled from "styled-components";

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
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" onChange={handleChanges} value={newMember.name} />
      <label htmlFor="position">Position</label>
      <input type="text" id="position" name="position" onChange={handleChanges} value={newMember.position}/>
      <button type="submit">Create New Member</button>
    </form>
  )
}

export default MemberForm;