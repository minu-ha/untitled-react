import React from 'react';
import styled from 'styled-components';

const List = styled.li`
  background: grey;
  padding: 20px;
`;

let YellowBtn = styled.button`
  background: yellow;
  color: #000;
  padding: 10px;
  font-size: 1px;
`;

function Post({ posts, loading }) {
  if (loading) {
    return <h4>loading</h4>;
  }

  return (
    <ul>
      {posts.map((post, index) => {
        return (
          <>
            <List key={post.id}>
              {post.title}
              <YellowBtn
                onClick={() => {
                  let copy = [...posts];
                  copy.splice(index, 1);
                }}
              >
                삭제
              </YellowBtn>
            </List>
          </>
        );
      })}
    </ul>
  );
}

export default Post;
