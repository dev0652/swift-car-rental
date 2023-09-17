import PropTypes from 'prop-types';
import { Title, Wrapper } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
}

// ****** PropTypes *******************************

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
