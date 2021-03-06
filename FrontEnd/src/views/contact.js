import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TransitionEffect from '../styles/transitioneffect';

const Contact = () => {
  const [newName, setNewName] = useState('');
  const [newEmailAddress, setEmailAddress] = useState('');
  const [newMessage, setMessage] = useState('');

  const reset = () => {
    setNewName('');
    setEmailAddress('');
    setMessage('');
  };

  const onNameChange = (event) => {
    setNewName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmailAddress(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleContact = (event) => {
    event.preventDefault();

    const contactData = {
      name: newName,
      email: newEmailAddress,
      message: newMessage,
    };

    axios.post('/send', contactData).then((response) => {
      if (response.data.status === 'success') {
        alert('Message Sent.');
        reset();
      } else if (response.data.status === 'fail') {
        alert('Message failed to send.');
        reset();
      }
    });
  };

  return (
    <TransitionEffect>
      <ContactContainer>
        <form onSubmit={handleContact}>
          <FormGroup>
            <label htmlFor="name">
              Name
              <input type="text" value={newName} onChange={onNameChange} />
            </label>
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">
              Email
              <input
                type="email"
                value={newEmailAddress}
                onChange={onEmailChange}
              />
            </label>
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">
              Message
              <textarea rows="5" value={newMessage} onChange={onMessageChange} />
            </label>
          </FormGroup>
          <FormGroup>
            <button type="submit">Submit</button>
          </FormGroup>
        </form>
      </ContactContainer>
    </TransitionEffect>
  );
};

const ContactContainer = styled.div`
color:rgb(253, 255, 254);
background-color: rgba(60, 60, 60, 0.5);
border-radius: 1rem;
padding: 2rem;
width: 15rem;
margin-bottom: 2rem;
@media (max-width: 600px) {
  margin-bottom: 23rem;
}
`;

const FormGroup = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
textarea {
  width: 13rem;
  border-radius: 0.5rem;
  resize: vertical;
  min-height: 8rem;
  max-height: 15rem;
  }
}
`;

export default Contact;
