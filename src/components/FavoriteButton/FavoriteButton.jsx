import { HeartIcon } from 'components/icons/HeartIcon';
import PropTypes from 'prop-types';
import { FavButton } from './FavoriteButton.styled';

export const FavoriteButton = ({ isFavorite, onClick }) => {
  return (
    <FavButton
      type="button"
      $isFavorite={isFavorite}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      onClick={onClick}
    >
      <HeartIcon
        width={18}
        height={18}
        title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      />
    </FavButton>
  );
};

// ****** PropsTypes *******************************

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool,
  onClick: PropTypes.func,
};
