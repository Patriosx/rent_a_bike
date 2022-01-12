/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  //   payload = data;
  const { payload, type } = action;

  switch (type) {
    case "USER":
      return {
        ...state,
        user: payload,
      };
    case "GET_SCHEDULES":
      return {
        ...state,
        schedules: payload,
      };
    default:
      return state;
  }
};
