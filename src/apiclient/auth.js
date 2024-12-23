// ./src/apiclient/auth.js
// Brick Jong
// purpose: provides a function for augmenting headers to include authorization (JWT)
// creation date: 2024-11-12
// authors: Brett DeWitt

import apiClient from "./apiClient.js";

/**
 * Sets or removes the Authorization header for API requests based on the provided JWT token.
 *
 * If a token is provided, it sets the `Authorization` header to `Bearer <token>`.
 * If no token is provided, it removes the `Authorization` header.
 *
 * @param {string} [token] - The JWT token to be used in the `Authorization` header. If `null` or `undefined`, the header is removed.
 */
export const setAuthToken = (token) => {
    if (token) {
        apiClient.defaults.headers['Authorization'] = `Bearer ${token}`;
    } else {
        delete apiClient.defaults.headers['Authorization'];
    }
};
