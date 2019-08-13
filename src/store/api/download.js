import ajax from './ajax';
import { API } from '../../constants/api';

export const getAllDownloadLinks = () => {
  const url = `${API}/download_links`;
  return ajax(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const addDownload = data => {
  const url = `${API}/uploader/${data.userId}/upload_photos_from_local`;
  return ajax(
    url,
    {
      method: 'POST',
      body: JSON.stringify(data.downloadData),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      token: data.token
    }
  );
};

export const editDownload = data => {
  const url = `${API}/downloads/${data.downloadId}`;
  return ajax(
    url,
    {
      method: 'PUT',
      body: JSON.stringify(data.downloadData),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      token: data.token
    }
  );
};

export const deleteDownload = data => {
  const url = `${API}/downloads/${data.downloadlinkId}`;
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
