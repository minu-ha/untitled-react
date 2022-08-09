import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../component/common/Pagination';
import Posts from '../component/common/Posts';
import PostForm from '../component/common/PostForm';
import usePosts from '../hooks/usePosts';
/*
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },

  id : pk
  userId : 글쓴이
  title : 제목
  body : 내용
*/
function Todo(props) {
  const { posts, deletePost, createPost } = usePosts();



  // const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage, setPostPerPage] = useState(10);


  // console.log(posts);

  // const indexOfLast = currentPage * postPerPage;
  // const indexOfFirst = indexOfLast - postPerPage;
  // const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  // const paginate = (pageNum) => setCurrentPage(pageNum);

  return (
    <div>
      <Posts posts={posts} isLoading={!posts.length} deletePost={deletePost} />
      {/* <Pagination postPerPage={postPerPage} totalPost={posts.length} paginate={paginate} /> */}
      <PostForm createPost={createPost} />
    </div>
  );
}

export default Todo;
