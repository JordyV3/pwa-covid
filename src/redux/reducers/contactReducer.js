const initialState = [
  { id: 0, nombre: "Jordy", apellido: "Vega", edad: "20", email: "jordyvega15@gmail.com", telefono: 45187623, fecha_vacunacion: "00-00-00"}
];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "DELETE_CONTACT":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      return state;
    case "UPDATE_CONTACT":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
    case "RESET_CONTACT":
      state = [{ nombre: null, apellido: null, edad: null, email: null, telefono: null, fecha_vacunacion: null,}];
      return state;
    default:
      return state;
  }
};
