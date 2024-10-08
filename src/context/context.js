const type = {
  NAV: "NAV",
  COLOR: "COLOR",
  CURSOR: "CURSOR",
};

import React, { createContext, useReducer } from "react";
import { activeSection } from "../utilits";
const context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case type.NAV:
      return {
        ...state,
        nav: action.payload,
      };
    case type.COLOR:
      return {
        ...state,
        color: action.payload,
      };
    case type.CURSOR:
      return {
        ...state,
        megicCursor: action.payload,
      };

    default:
      return state;
  }
};

const StateProvider  = (props) => {
  const initialState = {
    nav: "home",
    color: "#4169e1",
    megicCursor: "show",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeNav = (value) => {
    dispatch({
      type: type.NAV,
      payload: value,
    });
    activeSection(value);
  };
  const getMagicCursor = (value) => {
    let cursor = localStorage.getItem("rsa-megic-cursor");
    dispatch({
      type: type.CURSOR,
      payload: cursor ? cursor : value,
    });
    document
      .querySelector(".rs_tm_all_wrap")
      .setAttribute("data-magic-cursor", cursor ? cursor : value);
  };

  const changeCursor = (value) => {
    document
      .querySelector(".rs_tm_all_wrap")
      .setAttribute("data-magic-cursor", value);
    localStorage.setItem("rsa-megic-cursor", value);
    dispatch({
      type: type.CURSOR,
      payload: value,
    });
  };

  const getColor = (value) => {
    let color = localStorage.getItem("rsa-color");
    document.documentElement.style.setProperty(
      "--main-color",
      color ? color : value
    );
    dispatch({
      type: type.COLOR,
      payload: color ? color : value,
    });
  };

  const colorChange = (value) => {
    document.documentElement.style.setProperty("--main-color", value);
    localStorage.setItem("rsa-color", value);
    dispatch({
      type: type.COLOR,
      payload: value,
    });
  };

  return (
    <context.Provider
      value={{
        changeNav: changeNav,
        nav: state.nav,
        colorChange: colorChange,
        getColor: getColor,
        color: state.color,
        getMagicCursor: getMagicCursor,
        changeCursor: changeCursor,
        megicCursor: state.megicCursor,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default StateProvider ;

export { context };
