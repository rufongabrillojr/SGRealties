import ajax from './ajax';
import { API } from '../../constants/api';

export const getRejectedAlbums = data => {
  const url = `${API}/show_album_rejected_offset`;
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

export const getPendingAlbums = data => {
  const url = `${API}/show_album_pending_offset`;
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

export const getApprovedAlbums = data => {
  const url = `${API}/show_album_approved_offset`;
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

export const getAllAlbums = data => {
  const url = `${API}/all_albums`;
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

export const createAlbum = data => {
  const url = `${API}/albums`;
  return ajax(
    url,
    {
      method: 'POST',
      body: JSON.stringify(data.albumData),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      token: data.token
    }
  );
};

export const getMyAlbum = data => {
  const url = `${API}/my_albums`;
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

export const updateFeaturedAlbum = data => {
  const url = `${API}/album_update/${data.albumId}`;
  return ajax(
    url,
    {
      method: 'PUT',
      body: JSON.stringify(data.albumData),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      token: data.token
    }
  );
};

export const updateAlbumPicture = data => {
  const url = `${API}/update_album_picture/${data.albumId}`;
  return ajax(
    url,
    {
      method: 'PUT',
      body: JSON.stringify(data.albumData),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      token: data.token
    }
  );
};

export const updateAlbumVideo = data => {
  const url = `${API}/album_update/${data.albumId}`;
  return ajax(
    url,
    {
      method: 'PUT',
      body: JSON.stringify(data.albumData),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      token: data.token
    }
  );
};

export const getPublishedAlbums = data => {
  const url = `${API}/show_album_published_offset`;
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

export const updateAlbumStatus = data => {
  const url = `${API}/update_album_status/${data.albumId}`;
  return ajax(
    url,
    {
      method: 'PUT',
      body: JSON.stringify(data.albumData),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      token: data.token
    }
  );
};

export const publishAlbum = data => {
  const url = `${API}/publish_album/${data.albumId}`;
  return ajax(
    url,
    {
      method: 'PUT',
      body: JSON.stringify(data.albumData),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      token: data.token
    }
  );
};

export const updateAlbumInfo = data => {
  const url = `${API}/albums/${data.albumId}`;
  return ajax(
    url,
    {
      method: 'PUT',
      body: JSON.stringify(data.albumData),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      token: data.token
    }
  );
};

export const getAlbumInfo = data => {
  const url = `${API}/albums/${data.id}`;
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

export const removeAlbum = data => {
  const url = `${API}/albums/${data.id}`;
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
