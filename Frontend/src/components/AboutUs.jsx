// src/components/AboutUs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Logo, NavigationLinks, NavLink, AboutContainer, AboutTitle, AboutDescription, Section, SectionTitle, SectionText, AboutImage } from '../styles/styles'; 
import aboutImage from '../assets/about-image.jpg'; // You can add a relevant image for the page

const AboutUs = () => {
  return (
    <>
      <Navbar>
        <Logo src={aboutImage} alt="Students.jpeg" />
        <NavigationLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/choose-user">Choose User</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </NavigationLinks>
      </Navbar>
      
      {/* Main about container */}
      <AboutContainer>
        <AboutTitle>About AMPS School</AboutTitle>

        {/* About section */}
        <AboutDescription>
          <p>
            AMPS School is a leading institution committed to providing top-notch education, fostering holistic development for students, and promoting a nurturing environment that encourages innovation, creativity, and personal growth.
          </p>
        </AboutDescription>

        <AboutImage src={aboutImage} alt="AMPS.jpg" />
        
        {/* Mission Statement Section */}
        <Section>
          <SectionTitle>Our Mission</SectionTitle>
          <SectionText>
            Our mission is to cultivate excellence in every aspect of education and community development. We strive to equip our students with the tools and knowledge to succeed academically, socially, and professionally.
          </SectionText>
        </Section>

        {/* Vision Section */}
        <Section>
          <SectionTitle>Our Vision</SectionTitle>
          <SectionText>
            Our vision is to become the leading school in providing innovative, globally recognized educational experiences, ensuring that each student is empowered to achieve their full potential.
          </SectionText>
        </Section>

        {/* Values Section */}
        <Section>
          <SectionTitle>Our Core Values</SectionTitle>
          <SectionText>
            - Integrity: Upholding the highest ethical standards<br />
            - Excellence: Striving for excellence in all that we do<br />
            - Innovation: Embracing creativity and technology<br />
            - Community: Building a supportive, inclusive environment for all
          </SectionText>
        </Section>

        {/* Footer */}
        <div>
          <Link to="/">Back to Home</Link>
        </div>
      </AboutContainer>
    </>
  );
};

export default AboutUs;

