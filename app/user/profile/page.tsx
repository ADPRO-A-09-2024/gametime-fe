import React from 'react';
import axios from 'axios';

type UpdateProfileProps = {
    email: string;
    newEmail: string;
    user: any;
    setEmail: (email: string) => void;
    setNewEmail: (newEmail: string) => void;
    setUser: (user: any) => void;
};

const UpdateProfile: React.FC<UpdateProfileProps> = ({ email, newEmail, user, setEmail, setNewEmail, setUser }) => {
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
            {user && (
                <div>
                    <h2>Update User Details</h2>
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

export default UpdateProfile;