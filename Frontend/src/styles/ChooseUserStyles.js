// ChooseUserStyles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChooseUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  align-items: center;    /* Center content horizontally */
  height: 100vh;
  width: 100%;           /* Ensure full width usage */
  background-color: #f5f5dc; /* Soft beige background color */

  @media screen and (min-width: 768px) {
    flex-direction: row; /* Horizontal layout for larger screens */
    justify-content: space-evenly; /* Spread items evenly across the screen */
    align-items: center; /* Keep content centered vertically */
  }
`;

export const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  align-items: center;    /* Center content horizontally */
  padding: 20px;
  width: 100%;            /* Occupy full width by default */

  @media screen and (min-width: 768px) {
    width: 30%;           /* Restrict section width on larger screens */
    margin: 10px;         /* Add spacing between sections */
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #1e90ff; /* Bright blue for emphasis */
  text-align: center; /* Center-align text */

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Button = styled(Link)`
  background-color: #32cd32; /* Vibrant green for buttons */
  color: white;
  border: none;
  padding: 12px 24px;
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #228b22; /* Darker green on hover */
  }

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

