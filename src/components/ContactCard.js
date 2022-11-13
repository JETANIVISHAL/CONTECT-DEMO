import React from 'react'
import user from '../Images/user.png';
const ContactCard = (props) => {
  const {  name, email } = props.contect
  return (
  
    <div className='ui container ' style={{display: "flex", margin: "10px",background:"pink" }}>
      <div style={{ margin:"10px" }}>
      <img className='ui avatar image 'style={{ margin: "10px" }} src={user} alt="user" />
      </div>
      <div className='contect '>
        <div className='header right ' style={{ margin: "5px" }}>{name}</div>
        <div>{email}</div>
      </div>
      
      <div className='ui container ' style={{display: "flex", flexDirection:"row-reverse",  margin: "10px", background:"pink" }}>
        
        <i className='trash alternate outline icon right' style={{ color: "red", marginTop:"10px", margin:"10px" }}></i>
      </div>
      </div>
     
     
  )
}

export default ContactCard
