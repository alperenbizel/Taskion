import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [name, setname] = useState(''); // name'i username olarak değiştir
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // history yerine navigate kullanılmalı

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await AuthService.register(name, email, password); // burada username olarak gönder
            navigate('/'); 
        } catch (err) {
            setError('Kayıt başarısız!');
        }
    };

    return (
        <div>
            <h2>Kayıt Ol</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Kullanıcı Adı" 
                    value={name} 
                    onChange={(e) => setname(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Şifre" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Kayıt Ol</button>
            </form>
        </div>
    );
};

export default RegisterPage;
