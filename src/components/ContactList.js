import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props)

    const renderContectlist = props.contects.map((contect) =>{
        return(
            <ContactCard contect={contect} />
        )
    });
  return (
    <div className='ui celled list'>
     {renderContectlist}
    </div>
  )
}

export default ContactList
