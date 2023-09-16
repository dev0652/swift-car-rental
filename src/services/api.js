import axios from 'axios';

// Backend: https://mockapi.io/projects/648a37bd5fa58521cab1030d

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// ############### User ##########################

export const register = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  setAuthHeader(data.token);
  return data;
};

export const login = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  setAuthHeader(data.token);
  return data;
};

export const logout = async () => {
  const { data } = await axios.post('/users/logout');
  clearAuthHeader();
  return data;
};

export const refresh = async token => {
  setAuthHeader(token);
  const { data } = await axios.get('/users/current');
  return data;
};

// Utility to add JWT
export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// ############### Contacts ##########################

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async newContact => {
  const { data } = await axios.post('/contacts', newContact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

export const editContact = async ({ id, editedContact }) => {
  const { data } = await axios.patch(`/contacts/${id}`, editedContact);
  return data;
};
