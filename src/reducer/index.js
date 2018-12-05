const initialState = {
  todos: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "NEWTODOS":
      console.log(payload);
      return { todos: [...state.todos, payload] };
    default:
      return state;
  }
};
