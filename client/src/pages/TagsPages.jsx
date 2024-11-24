import React, { useState, useEffect } from 'react';
import TagService from '../services/TagService';
import TagCard from '../components/TagCard';

const TagsPage = () => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchTags = async () => {
            const data = await TagService.getTags();
            setTags(data);
        };
        fetchTags();
    }, []);

    return (
        <div>
            <h2>Etiketler</h2>
            {tags.map((tag) => (
                <TagCard key={tag._id} tag={tag} />
            ))}
        </div>
    );
};

export default TagsPage;
