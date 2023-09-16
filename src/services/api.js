import axios from 'axios';

axios.defaults.baseURL = 'https://65057fe1ef808d3c66f01c58.mockapi.io/adverts';
// gmail account

export const fetchCars = async (page, limit, query) => {
  const params = {
    page,
    limit,
    ...query,
  };

  const controller = new AbortController();
  const signal = controller.signal;

  const response = await axios.get('/?', { params, signal });

  return response;
};
