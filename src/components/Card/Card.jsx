import PropTypes from 'prop-types';
import {
  Caption,
  CardWrapper,
  CardContent,
  Image,
  Meta,
  Thumbnail,
  Tag,
  Button,
  Accented,
  FavoriteButton,
} from './Card.styled';

import { HeartIcon } from 'components/icons/HeartIcon';
import Modal from 'components/Modal';
import { useState } from 'react';

//

export const Card = ({ car }) => {
  const {
    year,
    make,
    model,
    type,
    mileage,
    photoLink,
    rentalPrice,
    rentalCompany,
    address,
    functionalities,

    // eslint-disable-next-line no-unused-vars
    isFavorite = false,
  } = car;

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const accentedModel = <Accented>{model}</Accented>;

  const formattedMileage = mileage.toLocaleString('en-US');

  const makeToLC = make.toLowerCase();
  const formattedMake = makeToLC.charAt(0).toUpperCase() + makeToLC.slice(1);

  const arr = address.split(', ');
  const country = arr[arr.length - 1];
  const city = arr[arr.length - 2];

  return (
    <CardWrapper>
      <CardContent>
        <Thumbnail>
          <Image
            src={photoLink}
            width={250}
            height={250}
            alt={`${formattedMake} ${model} ${type}`}
          />

          <FavoriteButton type="button">
            <HeartIcon width={18} height={18} />
          </FavoriteButton>
        </Thumbnail>

        <Caption>
          <div>
            {make} {accentedModel}, {year}
          </div>

          <div>{rentalPrice}</div>
        </Caption>

        <Meta>
          <Tag>{city}</Tag>
          <Tag>{country}</Tag>
          <Tag>{rentalCompany}</Tag>
          <Tag>{type}</Tag>
          <Tag>{formattedMake}</Tag>
          <Tag>{formattedMileage}</Tag>
          <Tag>{functionalities[0]}</Tag>
        </Meta>
      </CardContent>

      <Button type="button" onClick={toggleModal}>
        Learn more
      </Button>

      {showModal && <Modal onClose={toggleModal} car={car} />}
    </CardWrapper>
  );
};

Card.propTypes = {
  car: PropTypes.object,

  year: PropTypes.string,
  make: PropTypes.string,
  model: PropTypes.string,
  type: PropTypes.string,
  mileage: PropTypes.string,
  photoLink: PropTypes.string,
  rentalPrice: PropTypes.string,
  rentalCompany: PropTypes.string,
  address: PropTypes.string,
  functionalities: PropTypes.string,
  isFavorite: PropTypes.bool,
};
