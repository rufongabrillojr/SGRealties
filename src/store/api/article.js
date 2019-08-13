import ajax from './ajax';
import { API } from '../../constants/api';

export const getRejectedArticles = data => {
  const url = `${API}/article_rejected`;
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

export const getApprovedArticles = data => {
  const url = `${API}/article_approved`;
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

export const getPendingArticles = data => {
  const url = `${API}/article_pending`;
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

export const getAllArticles = data => {
  const url = `${API}/all_articles`;
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

export const getMyArticles = data => {
  const url = `${API}/my_articles`;
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

export const createArticle = data => {
  const url = `${API}/articles`;
  return ajax(
    url,
    {
      method: 'POST',
      body: JSON.stringify(data.articleData),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      token: data.token
    }
  );
};

export const getPublishedArticles = data => {
  const url = `${API}/article_published`;

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

export const getArticleInfo = data => {
  const url = `${API}/articles/${data.id}`;
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

export const updateArticleStatus = data => {
  const url = `${API}/update_article_status/${data.articleId}`;
  return ajax(
    url,
    {
      method: 'PUT',
      body: JSON.stringify(data.articleData),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      token: data.token
    }
  );
};

export const publishArticle = data => {
  const url = `${API}/publish_article/${data.articleId}`;
  return ajax(
    url,
    {
      method: 'PUT',
      body: JSON.stringify(data.articleData),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      token: data.token
    }
  );
};

export const updateArticleInfo = data => {
  const url = `${API}/articles/${data.contentId}`;
  return ajax(
    url,
    {
      method: 'PUT',
      body: JSON.stringify(data.articleData),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      token: data.token
    }
  );
};

export const updateArticleFeatured = data => {
  const url = `${API}/update_featured/${data.contentId}`;
  return ajax(
    url,
    {
      method: 'PUT',
      body: JSON.stringify(data.articleData),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      token: data.token
    }
  );
};

export const removeArticle = data => {
  const url = `${API}/articles/${data.id}`;
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
