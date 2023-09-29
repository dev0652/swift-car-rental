import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper, Overlay } from './Loader.styled';
import PropTypes from 'prop-types';

import { theme } from 'styles/theme';

const Loader = () => {
  return (
    <Overlay>
      <LoaderWrapper>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color={theme.colors.accent}
          ariaLabel="three-dots-loading"
          // wrapperStyle={{}}
          // wrapperClassName=""
          // visible={isLoading}
        />
      </LoaderWrapper>
    </Overlay>
  );
};

export default Loader;

// ####### PropTypes ######################

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
