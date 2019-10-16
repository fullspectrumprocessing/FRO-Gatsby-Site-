import React, { useReducer } from 'react';
import { FormWrapper } from './contact.css.js';
import { H3, StyledDiv } from '../../styledComps';

const ContactForm = () => {
  const [state, updateState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { name: '', email: '', phone: '', message: '' }
  );
  function formSubmit(e) {
    e.preventDefault();
    console.log('recieved form values', state);
  }
  const { name, email, phone, message } = state;
  return (
    <>
      <StyledDiv>
        <H3>Contact Us</H3>
        <FormWrapper>
          <form
            name="contact"
            method="post"
            action="#"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={formSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              name="name"
              label="name"
              value={name}
              placeholder="Full Name"
              onChange={e => updateState({ name: e.target.value })}
              type="text"
            />
            <input
              type="email"
              name="email"
              label="email"
              value={email}
              placeholder="Email Address"
              onChange={e => updateState({ email: e.target.value })}
            />
            <input
              type="tel"
              name="phone"
              label="phone"
              value={phone}
              placeholder="xxx-xxx-xxxx"
              onChange={e => updateState({ phone: e.target.value })}
            />
            <textarea
              name="message"
              label="message"
              value={message}
              placeholder="Please enter your message......"
              onChange={e => updateState({ message: e.target.value })}
            ></textarea>
            <button name="submit" type="submit">
              Send Message
            </button>
          </form>
        </FormWrapper>
      </StyledDiv>
    </>
  );
};

export default ContactForm;
