import axios from 'axios';

//const API_BASE_URL = 'http://127.0.0.1:5000/api';
const API_BASE_URL = 'https://t7g774dx4e.execute-api.us-east-1.amazonaws.com/dev/api';

export const fetchArticles = async (category = '', page = 1, limit = 10) => {
    console.log("dentro de fetch articles")
  const response = await axios.get(`${API_BASE_URL}/articles`, {
    params: { category, page, limit },
  });
  return response.data;
};

export const fetchArticleBySlug = async (slug) => {
  const response = await axios.get(`${API_BASE_URL}/articles/${slug}`);
  return response.data;
};

export const fetchCategories = async () => {
  const response = await axios.get(`${API_BASE_URL}/categories`);
  return response.data;
};