import React from 'react';
import axios from 'axios';

const Searching = () => {
    const [name, setName] = React.useState('');
    const [rating, setRating] = React.useState('');
    const [category, setCategory] = React.useState('');

    const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await axios.get('/api/products/search', {
                params: {
                    name: name || undefined,
                    rating: rating || undefined,
                    category: category || undefined,
                },
            });

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <label>
                    Product Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Product Rating:
                    <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
                </label>
                <label>
                    Product Category:
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                </label>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default Searching;