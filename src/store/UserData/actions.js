export const ADD_USER_DATA = "USER::ADD_USER_DATA";
export const DELETE_USER_DATA = "USER::DELETE_USER_DATA";

export const addUserData = (data) => ({
  type: ADD_USER_DATA,
  payload: data,
});

export const deleteUserData = () => ({
  type: DELETE_USER_DATA,
});
