import React, { useState } from 'react'
import axios from 'axios'
import './contact.css'

const Contact = () => {

    const [newName, setNewName] = useState('')
    const [newEmailAddress, setEmailAddress] = useState('')
    const [newMessage, setMessage] = useState('')

    const onNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const onEmailChange = (event) => {
        console.log(event.target.value)
        setEmailAddress(event.target.value)
    }

    const onMessageChange = (event) => {
        console.log(event.target.value)
        setMessage(event.target.value)
    }

    const handleContact = (event) => {
        console.log("in handle contact")
        event.preventDefault();

        const contactData = {name:newName, email:newEmailAddress, message:newMessage}

        axios({
            method: "POST", 
            url:"http://localhost:3001/send", 
            data:  contactData
          }).then((response)=>{
            if (response.data.status === 'success'){
              alert("Message Sent."); 
            reset()
            }else if(response.data.status === 'fail'){
              alert("Message failed to send.")
            reset()
            }
          })
    }

    const reset = () =>{
        setNewName('')
        setEmailAddress('')
        setMessage('')
    }

    return (
        <div className="contact-container">
            <form id="contact-form" onSubmit={handleContact}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" value={newName} onChange={onNameChange} />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" value={newEmailAddress} onChange={onEmailChange} />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" rows="5" value={newMessage} onChange={onMessageChange} />
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact