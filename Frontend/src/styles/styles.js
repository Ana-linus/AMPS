// Updated src/styles/styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #3A6EA5;
  color: #F0F8FF;
  font-family: 'Roboto', sans-serif;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const NavigationLinks = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const NavLink = styled(Link)`
  margin-right: 20px;
  color: #F0F8FF;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    color: #FFCC00;
  }

  @media screen and (max-width: 768px) {
    margin: 0 10px;
    font-size: 16px;
  }
`;

export const AboutContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  text-align: center;
  margin: 0 auto;
  max-width: 1200px;
`;

export const AboutTitle = styled.h1`
  font-size: 2.5em;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const AboutDescription = styled.p`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 30px;
`;

export const AboutImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 20px auto;
  display: block;
  border-radius: 10px;
`;

export const Section = styled.div`
  margin-top: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 2em;
  color: #333;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const SectionText = styled.p`
  font-size: 1.1em;
  color: #666;
`;

