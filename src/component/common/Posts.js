import React, { useEffect } from 'react';
import * as $ from './Posts.styled';

const Post = ({ id, title, deletePost }) => {
  useEffect(() => {
    console.log(title)
  }, [])
  return (
    <$.Post>
      {title}
      <$.YellowButton
        onClick={() => { deletePost(id) }}
      >
        삭제
    </$.YellowButton>
    </$.Post>
  )
}

function Posts({ posts, isLoading, deletePost }) {
  useEffect(() => {
    console.log(posts)
  }, [posts])

  if (isLoading) {
    return <h4>loading</h4>;
  }


  return (
    <$.Posts>
      {posts.map(({ id, title }) => {
        return (
          <Post id={id} title={title} key={`post-${id}`} deletePost={deletePost} />
        );
      })}
    </$.Posts>
  );
}

export default Posts;
