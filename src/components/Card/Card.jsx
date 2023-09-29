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
  MakeModelYear,
  HiddenTitle,
} from './Card.styled';

import Modal from 'components/Modal';
import { useState } from 'react';

import placeholderImage from 'assets/placeholder-image.jpg';
import { FavoriteButton } from 'components/FavoriteButton/FavoriteButton';

// *************************************************

export const Card = ({ car, isFavorite, onFavCLick }) => {
  const {
    id,
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
        <HiddenTitle />

        <Thumbnail>
          <Image
            src={photoLink || placeholderImage}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = placeholderImage;
              // onLoad()
            }}
            // onLoad={onLoad}
            width={250}
            height={250}
            alt={`${formattedMake} ${model} ${type}`}
          />

          <FavoriteButton
            isFavorite={isFavorite}
            onClick={() => onFavCLick(id)}
          />
        </Thumbnail>

        <Caption>
          <MakeModelYear>
            {make} {accentedModel}, {year}
          </MakeModelYear>

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

// ****** PropTypes *******************************

Card.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    year: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    type: PropTypes.string,
    mileage: PropTypes.number,
    photoLink: PropTypes.string,
    rentalPrice: PropTypes.string,
    rentalCompany: PropTypes.string,
    address: PropTypes.string,
    functionalities: PropTypes.array,
  }),

  isFavorite: PropTypes.bool,
  onFavCLick: PropTypes.func,
};
