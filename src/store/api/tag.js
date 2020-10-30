import ajax from './ajax';
import { API } from '../../constants/api';

export const getTags = data => {
  const url = `${API}/tags`;
  return ajax(
    url,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    {
      token: data.token,
    },
  );
};

export const addTag = data => {
  const url = `${API}/tags`;
  return ajax(
    url,
    {
      method: 'POST',
      body: JSON.stringify(data.tagData),
      headers: {
        'Content-Type': 'application/json',
      },
    },
    {
      token: data.token,
    },
  );
};

export const deleteTag = data => {
  const url = `${API}/tags/${data.tagId}`;
  return ajax(
    url,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    {
      token: data.token,
    },
  );
};
