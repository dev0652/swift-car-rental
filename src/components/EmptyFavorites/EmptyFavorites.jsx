import { Heading, Icon, Message, Wrapper } from './EmptyFavorites.styled';

export const EmptyFavorites = () => {
  return (
    <Wrapper>
      <Icon />
      <Heading>Favorites are empty</Heading>
      <Message>
        Your ads will appear here once you add them to favorites
      </Message>
    </Wrapper>
  );
};
