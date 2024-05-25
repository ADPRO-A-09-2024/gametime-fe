import React from 'react';
import axios from 'axios';

type ViewProfileProps = {
    email: string;
    user: any;
    setEmail: (email: string) => void;
    setUser: (user: any) => void;
};

const ViewProfile: React.FC<ViewProfileProps> = ({ email, user, setEmail, setUser }) => {
    const fetchUser = async () => {
        try {
            const response = await axios.get(`/user/${email}`);
            setUser(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Profile Page</h1>
            <input
                type="text"
                placeholder="Enter email to fetch user"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={fetchUser}>Fetch User</button>
            {user && (
                <div>
                    <h2>User Details</h2>
                    <p>Email: {user.email}</p>
                </div>
            )}
        </div>
    );
};

export default ViewProfile;