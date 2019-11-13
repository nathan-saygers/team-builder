import React, { useState } from "react";
import styled from "styled-components";

const MemberForm = props => {
  const [newMember, setNewMember] = useState({name: "", postion: ""})

  return (
    <form>
      <label htmlFor="Name"></label>
      <input type="text"/>
      <label htmlFor="Position"></label>
      <input type="text"/>
      <button type="submit">Create New Member</button>
    </form>
  )
}

export default MemberForm;