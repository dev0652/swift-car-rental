import axios from 'axios';

axios.defaults.baseURL = 'https://65057fe1ef808d3c66f01c58.mockapi.io/adverts';
// gmail account

export const fetchAllCars = async () => {
  const controller = new AbortController();
  const signal = controller.signal;

  const response = await axios.get('/', { signal });

  return response;
};

// const defaultPageLimit = 8;
const defaultPageLimit = window.innerWidth > 1440 ? 10 : 8;

export const fetchCarsByPage = async (page = 1, limit = defaultPageLimit) => {
  const params = {
    page,
    limit,
  };

  const controller = new AbortController();
  const signal = controller.signal;

  const response = await axios.get('?', { params, signal });

  return response;
};

export const fetchCars = async ({ limit = 8, ...query }) => {
  const params = { limit, ...query };

  const controller = new AbortController();
  const signal = controller.signal;

  const response = await axios.get('?', { params, signal });

  return response;
};
