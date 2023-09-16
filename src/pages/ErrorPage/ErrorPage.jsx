import { useRouteError } from 'react-router-dom';
import { Container, ErrorMessage, Text, Title } from './ErrorPage.styled';

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Container id="error-page">
      <Title>Oops!</Title>

      <Text>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>Here's what happened:</p>

        <ErrorMessage>
          <i>{error.statusText || error.message}</i>
        </ErrorMessage>
      </Text>
    </Container>
  );
};
