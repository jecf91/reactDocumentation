import React from 'react';

export default function Post (props) {
  const { posts } = props;
  const listPosts = posts.map(post => <li key={post.toString()}>{post}</li>);
  return (
    <ul>
      {listPosts}
    </ul>
  )
}