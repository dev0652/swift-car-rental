import axios from 'axios';

axios.defaults.baseURL = 'https://65057fe1ef808d3c66f01c58.mockapi.io/adverts';
// gmail account

export const fetchAllCars = async () => {
  const controller = new AbortController();
  const signal = controller.signal;

  const response = await axios.get('/', { signal });

  return response;
};

export const fetchCarsByPage = async (page = 1, limit = 8) => {
  const params = {
    page,
    limit,
  };

  const controller = new AbortController();
  const signal = controller.signal;

  const response = await axios.get('?', { params, signal });

  return response;
};

export const fetchFilteredCars = async (query) => {
  const params = { ...query };

  const controller = new AbortController();
  const signal = controller.signal;

  const response = await axios.get('?', { params, signal });

  return response;
};
