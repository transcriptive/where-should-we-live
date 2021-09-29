import tokenService from "./tokenService"

const BASE_URL = '/api/auth/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    console.log(res, '<-- response object')
    return res.json();
  })
  .then(json => {
    if(json.token) return json;
    console.log(json, '<-- the error')
    throw new Error(`${json.err}`)
  })
  .then(({ token }) => {
    tokenService.setToken(token)
  })
}

function getUser() {
  return tokenService.getUserFromToken()
}

function logout() {
  tokenService.removeToken()
}

function login(creds) {
  return fetch(BASE_URL + "login", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(creds),
  })
  .then((res) => {
    if (res.ok) return res.json();
    throw new Error("Bad Credentials!")
  })
  .then(({ token }) => tokenService.setToken(token));
}

// eslint-disable-next-line
export default {
  signup,
  getUser,
  logout,
  login,
};