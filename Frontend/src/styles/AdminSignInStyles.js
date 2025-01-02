// AdminSignInStyles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdminSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #4A90E2, #1D9BF0, #FFD700); /* Updated gradient */
  min-height: 100vh; /* Full height of the viewport */
  padding: 20px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 350px; /* Slightly increased max-width for better usability */
  padding: 25px;
  border: 2px solid #4A90E2;
  border-radius: 10px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin: 12px 0;
  border: 2px solid #90EE90;
  border-radius: 6px;
  background-color: #fdfdfd; /* Light background for input fields */
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 5px #FFD700;
  }
`;

export const SubmitButton = styled(Link)`
  width: 100%;
  padding: 14px;
  margin-top: 25px;
  border: none;
  border-radius: 8px;
  background-color: #FF6347; /* Softened red-orange */
  color: #FFFFFF;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #FF4500;
    transform: scale(1.05); /* Adds a hover effect */
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

