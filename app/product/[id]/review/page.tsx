'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import api from './api';
import { Product, Review } from './types';

const ReviewPage = () => {
  const pathname = usePathname();
  const id = pathname.split('/')[2];

  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({rating: 0, content: ''});
  const [userId, setUserId] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [editingReviewId, setEditingReviewId] = useState('');
  const [editingContent, setEditingContent] = useState('');
  const [editingRating, setEditingRating] = useState('');

  const fetchProduct = async (id: string) => {
    if (id) {
      const response = await api.get(`/product/get/${id}`);
      setProduct(response.data);
    }
  };

  const fetchReviews = async (id: string) => {
    if (id) {
      const response = await api.get(`/review/product/${id}`);
      setReviews(response.data);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
        const storedIdUser = localStorage.getItem('idUser');
        const storedEmail = localStorage.getItem('email');
        setUserId(storedIdUser || '');
        setUserEmail(storedEmail || '');
    }

    fetchProduct(id as string);
    fetchReviews(id as string);
  }, [id]);

  const handleReviewChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setNewReview(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmitReview = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    await api.post('/review', {
      productId: id,
      authorId: userId,
      content: newReview.content,
      rating: newReview.rating.toString()
    });
    setNewReview({ rating: 0, content: '' });
    fetchReviews(id as string);
    fetchProduct(id as string);
  };

  const handleEditReview = (review: Review) => {
    setEditingReviewId(review.id);
    setEditingContent(review.content);
    setEditingRating(review.rating);
  };

  const handleSaveEditReview = async () => {
    await api.put(`/review/${editingReviewId}`, {
      productId: id,
      authorId: userId,
      content: editingContent,
      rating: editingRating
    });
    setEditingReviewId('');
    setEditingContent('');
    setEditingRating('');
    fetchReviews(id as string);
    fetchProduct(id as string);
  };

  const handleCancelEdit = () => {
    setEditingReviewId('');
    setEditingContent('');
    setEditingRating('');
  };

  const handleDeleteReview = async (reviewId: string) => {
    if (confirm('Are you sure you want to delete this review?')) {
      await api.delete(`/review/${reviewId}`);
      fetchReviews(id as string);
      fetchProduct(id as string);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-lg">Price: {product.price}</p>
        <p className="text-lg">Rating: {product.rating}</p>
      </div>

      <form onSubmit={handleSubmitReview} className="mb-8">
        <div className="mb-4">
          <label className="block mb-2">Rating:</label>
          <input
            type="number"
            name="rating"
            value={newReview.rating}
            onChange={handleReviewChange}
            min="0"
            max="5"
            step="0.1"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Content:</label>
          <textarea
            name="content"
            value={newReview.content}
            onChange={handleReviewChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-700 hover:bg-blue-900 text-white rounded">Submit Review</button>
      </form>

      {reviews.map(review => (
        <div key={review.id} className="p-4 mb-4 border border-gray-300 rounded">
          <p>Rating: {review.rating}</p>
          <p>Content: {review.content}</p>
          <p>Author: {review.author.email}</p>
          {review.author.email === userEmail && (
            <div className="mt-2">
              <button onClick={() => handleEditReview(review)} className="mr-2 px-4 py-2 bg-blue-700 hover:bg-blue-900 text-white rounded">Edit</button>
              <button onClick={() => handleDeleteReview(review.id)} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded">Delete</button>
              {editingReviewId === review.id && (
                <div className="mt-4">
                  <div className="mb-4">
                    <label className="block mb-2">Rating:</label>
                    <input
                      type="number"
                      value={editingRating}
                      onChange={(e) => setEditingRating(e.target.value)}
                      min="0"
                      max="5"
                      step="0.1"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Content:</label>
                    <textarea
                      value={editingContent}
                      onChange={(e) => setEditingContent(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <button onClick={handleSaveEditReview} className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded">Save</button>
                  <button onClick={handleCancelEdit} className="px-4 py-2 bg-gray-700 hover:bg-gray-900 text-white rounded ml-2">Cancel</button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewPage;
