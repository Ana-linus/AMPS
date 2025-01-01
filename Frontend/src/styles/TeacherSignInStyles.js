// TeacherSignInStyles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TeacherSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(45deg, #6A5ACD, #00CED1, #3CB371); /* Updated gradient background */
  min-height: 100vh; /* Full height of the viewport */
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 300px; /* Limit form width */
  padding: 20px;
  border: 1px solid #B0C4DE; /* Refined border color */
  border-radius: 8px;
  background-color: #FFFFFF; /* Clean white background */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15); /* Enhanced shadow for depth */
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #B0C4DE; /* Consistent border color */
  border-radius: 4px;
`;

export const SubmitButton = styled(Link)`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: #4682B4; /* Calming blue for the button */
  color: white;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5F9EA0; /* Lighter blue on hover */
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

