import { useNavigate } from 'react-router-dom';
import { Wrapper, HeroButton } from './Home.styled';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h1>Welcome to Swift Car Rental Ukraine!</h1>

      <HeroButton
        type="button"
        onClick={() => {
          navigate('/catalog');
        }}
      >
        Rent Your Car
      </HeroButton>
    </Wrapper>
  );
};
