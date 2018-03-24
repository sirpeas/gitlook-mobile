import axios, { create } from 'axios';

const apiClient = create({
  baseURL: 'https://api.github.com',
});

const { get } = apiClient;

export const Search = {
  repositories: (query) =>  (
    get(`/search/repositories?q=${query}`)
  ),
  users: (query) => (
    get(`/search/users?q=${query}`)
  )
};