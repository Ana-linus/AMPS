// src/styles/styles.js (or create a new aboutStyles.js)

import styled from 'styled-components';

// Main container for AboutUs
export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  font-family: 'Arial', sans-serif;
`;

// Title for AboutUs
export const AboutTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 20px;
`;

// Description section
export const AboutDescription = styled.div`
  font-size: 1.2rem;
  color: #34495e;
  text-align: center;
  margin-bottom: 40px;
  p {
    margin-bottom: 20px;
  }
`;

// Section for mission, vision, values
export const Section = styled.div`
  background-color: white;
  padding: 30px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Section title (e.g., Mission, Vision, Core Values)
export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
`;

// Text within sections
export const SectionText = styled.p`
  font-size: 1.2rem;
  color: #7f8c8d;
  line-height: 1.6;
  text-align: center;
`;

// About image (you can change or add more styles for the image)
export const AboutImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  margin: 30px 0;
  display: block;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Navbar and other components (use your existing styles or create new)
export const Navbar = styled.nav`
  background-color: #2980b9;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const NavigationLinks = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
  color: white;
  margin-left: 20px;
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
  }
`;


