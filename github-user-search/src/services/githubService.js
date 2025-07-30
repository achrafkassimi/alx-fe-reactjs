import axios from 'axios';

// export const fetchUserData = async (username) => {
//   const response = await axios.get(`https://api.github.com/users/${username}`);
//   console.log(response.data);
//   return response.data;
// };

export const fetchAdvancedUserSearch = async (username, location, minRepos) => {
  let query = '';

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`;
  const response = await axios.get(url);

  return response.data.items;
};
