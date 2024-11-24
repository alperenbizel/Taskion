import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';


const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await UserService.getProfile();
                setUser(data);
            } catch (err) {
                setError('Kullanıcı bilgileri alınamadı!');
            }
        };

        fetchUser();
    }, []);

    return (
        <div>
            <h2>Profil</h2>
            {error && <p>{error}</p>}
            {user && (
                <div>
                    <p>Ad: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
