import { ADD_CONTACT, DELETE_CONTACT } from "./types";

export const addContact = data => {
  return {
    type: ADD_CONTACT,
    payload: data
  };
};

export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id
  };
};
