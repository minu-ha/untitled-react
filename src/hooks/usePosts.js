import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function usePosts() {
    const [posts, setPosts] = useState([]);
    const pk = useRef(101);

    useEffect(() => {
        (async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
        })()
    }, []);

    const createPost = ({ userId, title, body }) => {
        setPosts([...posts, {
            id: pk.current++,
            userId,
            title,
            body
        }])
    }

    const deletePost = (deleteId) => {
        setPosts(posts.filter(({ id }) => id !== deleteId));
    }

    return {
        posts,
        createPost,
        deletePost
    }
}

export default usePosts;
