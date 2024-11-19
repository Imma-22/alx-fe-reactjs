/* eslint-disable no-unused-vars */
import React from 'react';
import { isError, useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, refetch, isFetching, } = useQuery('posts', fetchPosts, {
    staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
    cacheTime: 1000 * 60 * 10, // Unused data is cached for 10 minutes
    refetchOnWindowFocus: true, // Refetch when window regains focus
    keepPreviousData: true, // Keeps previous data while fetching new data 
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading posts: {error.message}</p>;

  return (
    <div>
      <button onClick={refetch} disabled={isFetching} style={{ marginBottom: '10px' }}>
      {isFetching ? 'Refreshing...' : 'Refetch Posts'}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;