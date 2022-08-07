import React, { useState } from 'react';

function PostForm({ createPost }) {
  const [content, setContent] = useState('');

  const createPostHandler = () => {
    if (content) {
      createPost({
        userId: 1,
        title: content,
        body: '124'
      });
      setContent('')
    }
  }


  return (
    <>
      <input
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        onClick={createPostHandler}
      >
        등록
  </button>
    </>
  );
}

export default PostForm;
