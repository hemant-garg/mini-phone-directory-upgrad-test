import { DELETE_CONTACT, ADD_CONTACT } from "../actions/types";
const initialState = [
  {
    id: 23,
    name: "Hemant",
    phone: 9879879284
  },
  {
    id: 423,
    name: "Manish",
    phone: 4682327688
  }
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [action.payload, ...state];
    case DELETE_CONTACT:
      return [...state.filter(contact => contact.id !== action.payload)];
    default:
      return state;
  }
};
export default contactReducer;
