import React, { useState } from 'react';
import BookCard from './components/BookCard';

import './App.css';

const books = [
  {
    title: 'Book 1',
    description: 'Description for Book 1',
    discount: 20,
    coverImage: 'url_to_cover_image_1',
    price: 15,
  },
  {
    title: 'Book 1',
    description: 'Description for Book 1',
    discount: 20,
    coverImage: 'url_to_cover_image_1',
    price: 15,
  },
  {
    title: 'Book 1',
    description: 'Description for Book 1',
    discount: 20,
    coverImage: 'url_to_cover_image_1',
    price: 15,
  },
  {
    title: 'Book 1',
    description: 'Description for Book 1',
    discount: 20,
    coverImage: 'url_to_cover_image_1',
    price: 15,
  },
  {
    title: 'Book 1',
    description: 'Description for Book 1',
    discount: 20,
    coverImage: 'url_to_cover_image_1',
    price: 15,
  },
  {
    title: 'Book 1',
    description: 'Description for Book 1',
    discount: 20,
    coverImage: 'url_to_cover_image_1',
    price: 15,
  },
  {
    title: 'Book 1',
    description: 'Description for Book 1',
    discount: 20,
    coverImage: 'url_to_cover_image_1',
    price: 15,
  },
  {
    title: 'Book 1',
    description: 'Description for Book 1',
    discount: 20,
    coverImage: 'url_to_cover_image_1',
    price: 15,
  },
  {
    title: 'Book 1',
    description: 'Description for Book 1',
    discount: 20,
    coverImage: 'url_to_cover_image_1',
    price: 15,
  },
  {
    title: 'Book 1',
    description: 'Description for Book 1',
    discount: 20,
    coverImage: 'url_to_cover_image_1',
    price: 15,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Bookstore</h1>
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>
    </div>
  );
}

export default App;
