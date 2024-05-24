import React from 'react';
import axios from 'axios';

const Filtering = () => {
    const [rating, setRating] = React.useState('');
    const [price, setPrice] = React.useState('');

    const handleFilter = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            let response;
            if (rating !== '') {
                const ratingValue = parseFloat(rating);
                if (ratingValue >= 0 && ratingValue <= 5.0) {
                    response = await axios.get(`/product/filter/rating/less/${ratingValue}`);
                } else {
                    response = await axios.get(`/product/filter/rating/greater/${ratingValue}`);
                }
            } else if (price !== '') {
                const priceValue = parseInt(price);
                if (priceValue >= 0) {
                    response = await axios.get(`/product/filter/price/less/${priceValue}`);
                } else {
                    response = await axios.get(`/product/filter/price/greater/${priceValue}`);
                }
            }

            if (response) {
                console.log(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleFilter}>
                <label>
                    Rating:
                    <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
                </label>
                <label>
                    Price:
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                </label>
                <button type="submit">Filter</button>
            </form>
        </div>
    );
};

export default Filtering;