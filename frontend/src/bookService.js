// bookService.js

import axios from 'axios';

const baseURL = 'http://localhost:3001'; // Update with your API base URL

const instance = axios.create({
  baseURL,
});

const bookService = {
  buyBook: async (bookId) => {
    const response = await instance.post(`/books/${bookId}/buy`);
    return response.data; // The response from the API
  },
};

export default bookService;
