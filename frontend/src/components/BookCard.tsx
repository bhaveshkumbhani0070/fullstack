import React, { useState } from 'react';
import bookService from '../bookService';

interface BookCardProps {
  title: string;
  discount: number;
  price: number;
}

const BookCard: React.FC<BookCardProps> = ({ title, discount, price }) => {
  const discountedPrice = price - (price * discount) / 100;
  const [bookId, setBookId] = useState(1); // Set the book ID you want to buy

  const handleBuyBook = async () => {
    try {
      const result = await bookService.buyBook(bookId);
      console.log('Book purchased:', result);
      // Update your state or display a message
    } catch (error) {
      console.error('Error buying book:', error);
      // Handle error, display an error message, etc.
    }
  };
  return (
    <div className="book-card" onClick={handleBuyBook}>
      <div className="img--space">
        <img src={'./startwithus.jpeg'} alt={title} />
      </div>
      <div className="book-content">
        <span className="book-txt">{title}</span>
        <div className="book-price">
          <span className="book-dicount">10%</span>
          <span className="book-price">
            <span className="discounted-price">{discountedPrice.toFixed(2)}원</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
