// AdminDashboardStyles.js
import styled from 'styled-components';

export const AdminDashboardContainer = styled.div`
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: ${({ isOpen }) => (isOpen ? '250px' : '80px')}; /* Adjust margin based on sidebar state */
  transition: margin-left 0.3s ease;
`;

export const TopContent = styled.div`
  display: flex;
  gap: 20px;
  flex: 1; /* Take remaining space */
`;

export const BottomContent = styled.div`
  margin-top: 20px;
  display: flex; /* Make the content side by side */
  gap: 20px; /* Add gap between the components */
`;

export const Section = styled.section`
  margin-bottom: 40px;
  flex: 1; /* Make the sections expand to fill the available space */
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #2C3E50; /* Updated to a rich dark blue */
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Card = styled.div`
  background-color: #F8F9FA; /* Soft light gray */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(44, 62, 80, 0.1); /* Darker shadow for contrast */
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  flex: 1;
  max-width: 250px;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #2980B9; /* Vibrant blue for titles */
`;

export const CardContent = styled.p`
  font-size: 16px;
  color: #7F8C8D; /* Muted gray for readability */
`;

export const StudentDashboardContainer = styled.div`
  display: flex;
  padding-left: 240px;
`;

export const TeacherDashboardContainer = styled.div`
  display: flex;
  padding-left: 240px;
`;

