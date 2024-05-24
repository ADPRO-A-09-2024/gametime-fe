import React from 'react';
import axios from 'axios';

type SearchingProps = {
    type: string;
    term: string;
    error: string;
    setType: (type: string) => void;
    setTerm: (term: string) => void;
    setError: (error: string) => void;
};

const Searching: React.FC<SearchingProps> = ({ type, term, error, setType, setTerm, setError }) => {
    const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await axios.get(`/product/search/${type}/${term}`);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (inputType: string, value: string) => {
        if (inputType === 'rating') {
            const ratingValue = parseFloat(value);
            if (isNaN(ratingValue) || ratingValue < 0.0 || ratingValue > 5.0) {
                setError('Rating must be a number between 0.0 and 5.0');
                return;
            }
        }
        setError('');
        setType(inputType);
        setTerm(value);
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <label>
                    Product Name:
                    <input type="text" onChange={(e) => handleInputChange('name', e.target.value)} />
                </label>
                <label>
                    Product Rating:
                    <input type="text" onChange={(e) => handleInputChange('rating', e.target.value)} />
                </label>
                <label>
                    Product Category:
                    <input type="text" onChange={(e) => handleInputChange('category', e.target.value)} />
                </label>
                <button type="submit">Search</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Searching;