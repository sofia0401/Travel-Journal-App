import axios from 'axios';

const API = axios.create({ baseURL: 'https://travel-journal-project.herokuapp.com'});
// const API = axios.create({ baseURL: 'https://travel-journal-project.herokuapp.com/ http://localhost:5000'});



// this is going to happen before all the requests
// getting token from headers
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });
// endpoints to connect with server

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts/create', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);
