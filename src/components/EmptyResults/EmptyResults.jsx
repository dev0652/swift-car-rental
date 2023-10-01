import { Icon, Message, Wrapper } from './EmptyResults.styled';

export const EmptyResults = () => {
  return (
    <Wrapper>
      <Icon />
      <Message>Sorry, there no results matching your search </Message>
    </Wrapper>
  );
};
