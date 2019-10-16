import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const StyledForm = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const Input = styled.input`
  padding: 5px;
  border-radius: 20px / 30px;
  margin: 20px 0;
  border: 1px inset #1c317880;
  height: 30px;
  :hover {
    background: #c21b3440;
  }
`;

export const TextArea = styled.textarea`
  padding: 5px 10px;
  border-radius: 20px / 30px;
  margin: 10px 0;
  height: 70px;
  border: 1px inset #1c317880;
  :hover {
    background: #c21b3440;
  }
`;

export const Button = styled.button`
  margin: 20px 0;
  border-radius: 20px / 30px;
  border: 3px outset #1c317880;
  height: 30px;
  width: 50%;
  align-self: center;
  :hover {
    background: #c21b3440;
  }
`;
