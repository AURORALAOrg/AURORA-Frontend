/**
 * Parses JWT token to get user information
 */
export function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
}

/**
 * Checks if token is expired
 */
export function isTokenExpired(token) {
  const decodedToken = parseJwt(token);
  if (!decodedToken) return true;

  const currentTime = Date.now() / 1000;
  return decodedToken.exp < currentTime;
}

/**
 * Stores token in localStorage
 */
export function storeToken(token) {
  localStorage.setItem("authorizationToken", token);
}

/**
 * Retrieves token from localStorage
 */
export function getToken() {
  return localStorage.getItem("authorizationToken");
}

/**
 * Removes token from localStorage
 */
export function removeToken() {
  localStorage.removeItem("authorizationToken");
}

/**
 * Sets authorization header for axios
 */
export function setAuthHeader(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
