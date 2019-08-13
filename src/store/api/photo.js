import ajax from './ajax';
import { API } from '../../constants/api';

export const addPhotos = data => {
	const url = `${API}/upload_photos/${data.albumId.albumId}`;
  return ajax(
    url,
    {
      method: 'POST',
      body: JSON.stringify(data.photosData),
      headers: {
        'Content-Type': 'application/json',
      },
    },
    {
      token: data.token,
    },
  );
};

export const getPublicPhotos = data => {
  const url = `${API}/album/${data.albumId}/public`;
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

export const getPrivatePhotos = data => {
  const url = `${API}/album/${data.albumId}/private`;
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
