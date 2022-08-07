import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../component/common/Pagination';
import Post from '../component/common/Post';

function Todo(props) {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = async () => {
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
      setLoading(false);
    };
    data();
  }, []);

  console.log(posts);

  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  const paginate = (pageNum) => setCurrentPage(pageNum);

  return (
    <div>
      <Post posts={currentPosts} />
      <Pagination postPerPage={postPerPage} totalPost={posts.length} paginate={paginate} />
      <input
        onChange={(e) => {
          setContent(e.target.value);
          console.log(content);
        }}
      />
      <button
        onClick={() => {
          let copy = [...posts];
          copy.unshift(content);
          setPosts(copy);
        }}
      >
        등록
      </button>
    </div>
  );
}

export default Todo;
