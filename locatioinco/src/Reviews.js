import React, { useState } from 'react';
import './Reviews.css';

const initialReview = {
  id: 0,
  author: '',
  rating: 0,
  content: '',
  date: '',
};

const reviewsData = [
  {
    id: 1,
    author: 'Oliver Green',
    rating: 4,
    content:
      'Wow! I really enjoyed my stay when booking with Locatio Inc., their 24h service is great!',
    date: '2023-07-20',
  },
  {
    id: 2,
    author: 'Chris Griffin',
    rating: 5.0,
    content:
      'Great! Will definitely be booking again with Locatio, thank you so much!',
    date: '2022-10-13',
  },
  {
    id: 3,
    author: 'Bruce Wayne',
    rating: 5.0,
    content:
      'I brought my butler with me on vacation and needed a quick booking, Locatio really helped.',
    date: '2023-03-21',
  },
];

function Reviews() {
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(reviewsData);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date().toISOString().slice(0, 10);
    const newReview = {
      id: reviews.length + 1,
      author: name,
      rating: rating,
      content: reviewText,
      date: currentDate,
    };

    setReviews([newReview, ...reviews]);

    setName('');
    setReviewText('');
    setRating(0);
  };

  const rows = [];
  for (let i = 0; i < reviews.length; i += 3) {
    const row = reviews.slice(i, i + 3);
    rows.push(row);
  }

  return (
    <div className="review-container">
      <h2>Reviews</h2>

      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Review"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
        />
        <div className="rating-container">
          <span>Rating:</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <label key={star}>
              <input
                type="radio"
                name="rating"
                value={star}
                checked={rating === star}
                onChange={() => setRating(star)}
              />
              <span className="star">&#9733;</span>
            </label>
          ))}
        </div>
        <button type="submit">Submit Review</button>
      </form>

      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="review-row">
          {row.map((review) => (
            <div key={review.id} className="review-item">
              <div>
                <p className="author">{review.author}</p>
                <p className="rating">Rating: {review.rating}</p>
                <p className="content">{review.content}</p>
                <p className="date">Date: {review.date}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Reviews;




