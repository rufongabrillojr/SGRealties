import ajax from './ajax';
import { API } from '../../constants/api';

export const getBanners = data => {
  const url = `${API}/banners`;
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

export const createBanner = data => {
  const url = `${API}/banners`;
  return ajax(
    url,
    {
      method: 'POST',
      body: JSON.stringify(data.bannerData),
      headers: {
        'Content-Type': 'application/json',
      },
    },
    {
      token: data.token,
    },
  );
};

export const deleteBanner = data => {
  const url = `${API}/banners/${data.id}`;
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
