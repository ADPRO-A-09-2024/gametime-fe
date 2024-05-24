import React from 'react';
import axios from 'axios';

type ProfilePageProps = {
    email: string;
    newEmail: string;
    user: any;
    setEmail: (email: string) => void;
    setNewEmail: (newEmail: string) => void;
    setUser: (user: any) => void;
};

const ProfilePage: React.FC<ProfilePageProps> = ({ email, newEmail, user, setEmail, setNewEmail, setUser }) => {
    const fetchUser = async () => {
        try {
            const response = await axios.get(`/user/${email}`);
            setUser(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const updateUserEmail = async () => {
        try {
            const updatedUser = { ...user, email: newEmail };
            const response = await axios.put(`/user/${email}`, updatedUser);
            setUser(response.data);
            setEmail(newEmail);
            setNewEmail('');
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
                    <input
                        type="text"
                        placeholder="Enter new email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                    />
                    <button onClick={updateUserEmail}>Update Email</button>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;