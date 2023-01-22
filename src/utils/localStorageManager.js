export const KEY_ACCESS_TOKEN = "MY_ACCESS_TOKEN";

export function getAccessToken(key) {
    return localStorage.getItem(key);
}

export function setAccessToken(key, value) {
    localStorage.setItem(key, value);
}

export function removeAccessToken(key) {
    localStorage.removeItem(key);
}