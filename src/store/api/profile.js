import ajax from './ajax';
import { API } from '../../constants/api';

export const getAllProfiles = data => {
  const url = `${API}/profiles`;
  return ajax(
    url,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      token: data.token
    }
  );
};

export const addProfile = data => {
  const url = `${API}/profiles`;
  return ajax(
    url,
    {
      method: 'POST',
      body: JSON.stringify(data.profileData),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      token: data.token
    }
  );
};

export const getProfileInfo = data => {
  const url = `${API}/profiles/${data.profileId}`;
  return ajax(
    url,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      token: data.token
    }
  );
};

export const deleteProfile = data => {
  const url = `${API}/profiles/${data.profileId}`;
  return ajax(
    url,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      token: data.token
    }
  );
};

export const editProfile = data => {
  const url = `${API}/profiles/${data.profileId}`;
  return ajax(
    url,
    {
      method: 'PUT',
      body: JSON.stringify(data.profileData),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      token: data.token
    }
  );
};
