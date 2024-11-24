import React from 'react';
import './css/List.css'
const List = ({ items, onDelete }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    {item.name}
                    <button onClick={() => onDelete(item.id)}>Sil</button>
                </li>
            ))}
        </ul>
    );
};

export default List;
