import React, { useReducer } from 'react';
import { FormWrapper, StyledForm, Input, TextArea, Button } from './contact.css.js';
import { H2 } from '../../styledComps';

const ContactForm = () => {
  const [state, updateState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { name: '', email: '', phone: '', message: '' }
  );
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  function formSubmit(e) {
    e.preventDefault();
    console.log('recieved form values', state);
    fetch('/', {
      method: 'POST',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      bodu: encode({
        'form-name': 'contact',
        ...state,
      }),
    }).catch(error => alert(error));
  }
  const { name, email, phone, message } = state;
  return (
    <>
      <H2>Contact Us</H2>
      <FormWrapper>
        <StyledForm
          name="contact"
          method="post"
          action="#"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={formSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <Input
            name="name"
            label="name"
            value={name}
            placeholder="Full Name"
            onChange={e => updateState({ name: e.target.value })}
            type="text"
          />
          <Input
            type="email"
            name="email"
            label="email"
            value={email}
            placeholder="Email Address"
            onChange={e => updateState({ email: e.target.value })}
          />
          <Input
            type="tel"
            name="phone"
            label="phone"
            value={phone}
            placeholder="xxx-xxx-xxxx"
            onChange={e => updateState({ phone: e.target.value })}
          />
          <TextArea
            name="message"
            label="message"
            value={message}
            placeholder="Please enter your message......"
            onChange={e => updateState({ message: e.target.value })}
          />
          <Button name="submit" type="submit">
            Send Message
          </Button>
        </StyledForm>
      </FormWrapper>
    </>
  );
};

export default ContactForm;
