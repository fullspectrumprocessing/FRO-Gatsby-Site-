import React, { useReducer, useEffect } from 'react';
import { FormWrapper } from './contact.css.js';
import { H3, StyledDiv } from '../../styledComps';

const ContactForm = () => {
  const [state, updateState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { name: '', email: '', password: '' }
  );

  const { name, email, phone, message } = state;
  return (
    <>
      <StyledDiv>
        <H3>Contact Us</H3>
        <FormWrapper>
          <form>
            <input
              name="name"
              label="name"
              value={name}
              placeholder="Full Name"
              onChange={e => updateState({ name: e.target.value })}
            />
            <input
              name="email"
              label="email"
              value={email}
              placeholder="Email Address"
              onChange={e => useReducer({ email: e.target.value })}
            />
            <input />
            <input />
          </form>
        </FormWrapper>
      </StyledDiv>
    </>
  );
};

export default ContactForm;
