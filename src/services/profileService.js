import tokenService from '../services/tokenService';
const BASE_URL = '/api/profile/';

export function create(profile) {
  return fetch(BASE_URL, {
      method: "POST",
      headers: {
          'content-type': 'application/json', 
          'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(profile)
  }, {mode: "cors"})
  .then(res => res.json());
}

// check to see if user has profile, used to render profile page empty or full
export function getAllByCurrentUser(userid) {
  return fetch(`${BASE_URL}user/${userid}`, {mode: 'cors'})
      .then(res => res.json())
}

export function getCurrentUserProfile(id) {
  return fetch(`${BASE_URL}${id}`, {mode: 'cors'})
      .then(res => res.json())
}

export function deleteProfile(id) {
  return fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`},
  }, {mode: 'cors'})
  .then(res => res.json())
}

export function update(profile) {
  return fetch(`${BASE_URL}${profile._id}`, {
      method: "PUT", 
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(profile)
  }, {mode: 'cors'})
  .then(res => res.json());
}


