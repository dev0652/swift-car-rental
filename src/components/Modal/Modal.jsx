import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import placeholderImage from 'assets/placeholder-image.jpg';

import {
  Caption,
  CardContent,
  Image,
  Meta,
  Thumbnail,
  Tag,
  CloseButton,
  Overlay,
  ModalContent,
  Accented,
  FeaturesList,
  Section,
  Heading,
  Group,
  FeaturesGroup,
  ConditionsList,
  ConditionTag,
  Value,
  RentMeLink,
} from './Modal.styled';

import { RemoveIcon } from 'components/icons/RemoveIcon';
import { phoneNumber } from 'data/phone';

// #######################################

const modalRoot = document.querySelector('#modal-root');

// #######################################

export const Modal = ({ onClose, car }) => {
  //
  const {
    id,
    year,
    make,
    model,
    type,
    mileage,
    photoLink,
    description,
    fuelConsumption,
    engineSize,
    address,
    functionalities,
    accessories,
    rentalConditions,
    rentalPrice,
  } = car;

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  const accentedModel = <Accented>{model}</Accented>;

  const formattedMileage = mileage.toLocaleString('en-US');

  const formattedPrice = rentalPrice.slice(1, rentalPrice.length) + '$';

  const makeToLC = make.toLowerCase();
  const formattedMake = makeToLC.charAt(0).toUpperCase() + makeToLC.slice(1);

  const arr = address.split(', ');
  const country = arr[arr.length - 1];
  const city = arr[arr.length - 2];
  // const [ , city, country ] = arr;

  const makeConditionsObj = (stringWithBreaks) => {
    const array = stringWithBreaks.split('\n');

    const conditions = array.map((el) => {
      if (el.includes(':')) {
        const arr = [el.split(': ')];
        return Object.fromEntries(arr);
      }

      return { [el]: '' };
    });

    return [
      ...conditions,
      { Mileage: formattedMileage },
      { Price: formattedPrice },
    ];
  };

  const conditions = makeConditionsObj(rentalConditions);

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton type="button" onClick={onClose}>
          <RemoveIcon width={24} height={24} />
        </CloseButton>

        <CardContent>
          <Thumbnail>
            <Image
              src={photoLink || placeholderImage}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = placeholderImage;
              }}
              width={250}
              height={250}
              alt={`${formattedMake} ${model} ${type}`}
            />
          </Thumbnail>
          <Caption>
            {make} {accentedModel}, {year}
          </Caption>
          <Meta>
            <Tag>{city}</Tag>
            <Tag>{country}</Tag>
            <Tag>Id: {id}</Tag>
            <Tag>Year: {year}</Tag>
            <Tag>Type: {type}</Tag>
            <Tag>Fuel Consumption: {fuelConsumption}</Tag>
            <Tag>Engine Size: {engineSize}</Tag>
          </Meta>

          <Group>
            {description}

            <Section>
              <Heading> Accessories and functionalities:</Heading>

              <FeaturesGroup>
                <Features data={accessories} />
                <Features data={functionalities} />
              </FeaturesGroup>
            </Section>

            <Section>
              <Heading>Rental conditions:</Heading>

              <Conditions data={conditions} />
            </Section>

            <RentMeLink as="a" href={`tel:${phoneNumber}`}>
              Rent this car
            </RentMeLink>
          </Group>
        </CardContent>
      </ModalContent>
    </Overlay>,
    modalRoot
  );
};

// ****** PropTypes *******************************

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

// ###########################################

const Features = ({ data }) => {
  return (
    <FeaturesList>
      {data.map((el) => (
        <Tag key={el}>{el}</Tag>
      ))}
    </FeaturesList>
  );
};

// ****** PropTypes *******************************

Features.propTypes = {
  data: PropTypes.array,
};

// ###########################################

const Conditions = ({ data }) => {
  return (
    <ConditionsList>
      {data.map((obj) => {
        for (const key in obj) {
          return obj[key] ? (
            <ConditionTag key={key}>
              {key}: <Value>{obj[key]}</Value>
            </ConditionTag>
          ) : (
            <ConditionTag key={key}>{key}</ConditionTag>
          );
        }
      })}
    </ConditionsList>
  );
};

// ****** PropTypes *******************************

Conditions.propTypes = {
  data: PropTypes.array,
};
