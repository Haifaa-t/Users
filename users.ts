import axios from 'axios';

export const getUsers = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
};
export const getUserById = async (id: string) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
  };
  
  export const getUserPosts = async (userId: string) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return response.data.slice(0, 3); // First 3 posts
  };
  
  export const getUserAlbums = async (userId: string) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    return response.data.slice(0, 3); // First 3 albums
  };
  
  export const getUserTodos = async (userId: string) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    return response.data.slice(0, 3); // First 3 todos
  };
  export const getPostsByUserId = async (userId: string) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return response.data;
  };
  export const getPhotosByAlbumId = async (albumId: string) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    return response.data;
  };
  