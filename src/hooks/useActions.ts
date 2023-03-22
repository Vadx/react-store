import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

const actions = {
  // ...Actions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
