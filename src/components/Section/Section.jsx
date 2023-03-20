import PropTypes from 'prop-types';
import { StyledSection, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <Title>{title}</Title>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};