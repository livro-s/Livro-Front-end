import { local } from "d3";

export const getStorage = (key) => {
  return localStorage.getItem(key);
}

export const setStorage = (key, value) => {
  localStorage.setItem(key, value);
}

export const removeStorage = (key) => {
  localStorage.removeItem(key);
}

export const clearStorage = () => {
  localStorage.clear();
}