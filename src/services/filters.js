export const filterAdverts = ({ make, price, from, to }, data) => {
  if (make !== '' && price !== '' && from !== '' && to !== '') {
    const filtered = data
      .filter((item) => item.make === make)
      .map((item) => ({
        ...item,
        rentalPrice: Number(item.rentalPrice.slice(1, item.rentalPrice.length)),
      }))
      .filter((item) => item.rentalPrice <= price)
      .map((item) => ({ ...item, rentalPrice: '$' + item.rentalPrice }))
      .filter((item) => item.mileage >= from && item.mileage <= to);
    return filtered;
  }

  if (make !== '' && price !== '' && from !== '' && to === '') {
    const filtered = data
      .filter((item) => item.make === make)
      .map((item) => ({
        ...item,
        rentalPrice: Number(item.rentalPrice.slice(1, item.rentalPrice.length)),
      }))
      .filter((item) => item.rentalPrice <= price)
      .map((item) => ({ ...item, rentalPrice: '$' + item.rentalPrice }))
      .filter((item) => item.mileage >= from);
    return filtered;
  }

  if (make !== '' && price !== '' && from === '' && to !== '') {
    const filtered = data
      .filter((item) => item.make === make)
      .map((item) => ({
        ...item,
        rentalPrice: Number(item.rentalPrice.slice(1, item.rentalPrice.length)),
      }))
      .filter((item) => item.rentalPrice <= price)
      .map((item) => ({ ...item, rentalPrice: '$' + item.rentalPrice }))
      .filter((item) => item.mileage <= to);
    return filtered;
  }

  if (make !== '' && price === '' && from !== '' && to !== '') {
    const filtered = data
      .filter((item) => item.make === make)
      .filter((item) => item.mileage >= from && item.mileage <= to);
    return filtered;
  }

  if (make === '' && price !== '' && from !== '' && to !== '') {
    const filtered = data
      .map((item) => ({
        ...item,
        rentalPrice: Number(item.rentalPrice.slice(1, item.rentalPrice.length)),
      }))
      .filter((item) => item.rentalPrice <= price)
      .map((item) => ({ ...item, rentalPrice: '$' + item.rentalPrice }))
      .filter((item) => item.mileage >= from && item.mileage <= to);
    return filtered;
  }

  if (make !== '' && price !== '' && from === '' && to === '') {
    const filtered = data
      .filter((item) => item.make === make)
      .map((item) => ({
        ...item,
        rentalPrice: Number(item.rentalPrice.slice(1, item.rentalPrice.length)),
      }))
      .filter((item) => item.rentalPrice <= price)
      .map((item) => ({ ...item, rentalPrice: '$' + item.rentalPrice }));
    return filtered;
  }

  if (make !== '' && price === '' && from !== '' && to === '') {
    const filtered = data
      .filter((item) => item.make === make)
      .filter((item) => item.mileage >= from);
    return filtered;
  }

  if (make === '' && price !== '' && from !== '' && to === '') {
    const filtered = data
      .map((item) => ({
        ...item,
        rentalPrice: Number(item.rentalPrice.slice(1, item.rentalPrice.length)),
      }))
      .filter((item) => item.rentalPrice <= price)
      .map((item) => ({ ...item, rentalPrice: '$' + item.rentalPrice }))
      .filter((item) => item.mileage >= from);
    return filtered;
  }

  if (make !== '' && price === '' && from === '' && to !== '') {
    const filtered = data
      .filter((item) => item.make === make)
      .filter((item) => item.mileage <= to);
    return filtered;
  }

  if (make === '' && price !== '' && from === '' && to !== '') {
    const filtered = data
      .map((item) => ({
        ...item,
        rentalPrice: Number(item.rentalPrice.slice(1, item.rentalPrice.length)),
      }))
      .filter((item) => item.rentalPrice <= price)
      .map((item) => ({ ...item, rentalPrice: '$' + item.rentalPrice }))
      .filter((item) => item.mileage <= to);
    return filtered;
  }

  if (make === '' && price === '' && from !== '' && to !== '') {
    const filtered = data.filter(
      (item) => item.mileage >= from && item.mileage <= to
    );
    return filtered;
  }

  if (make !== '' && price === '' && from === '' && to === '') {
    const filtered = data.filter((item) => item.make === make);
    return filtered;
  }

  if (make === '' && price !== '' && from === '' && to === '') {
    const filtered = data
      .map((item) => ({
        ...item,
        rentalPrice: Number(item.rentalPrice.slice(1, item.rentalPrice.length)),
      }))
      .filter((item) => item.rentalPrice <= price)
      .map((item) => ({ ...item, rentalPrice: '$' + item.rentalPrice }));
    return filtered;
  }

  if (make === '' && price === '' && from !== '' && to === '') {
    const filtered = data.filter((item) => item.mileage >= from);
    return filtered;
  }

  if (make === '' && price === '' && from === '' && to !== '') {
    const filtered = data.filter((item) => item.mileage <= to);
    return filtered;
  }
};
