import { Apiurls } from "../helpers/url";
import * as types from "./actionTypes";
import { creatorData } from '../assets/dummy-data-files/data';

export const tokenConfig = () => {
    return {
        headers: {
            "Content-Type": "application/json",
        },
    };
};

export const returnError = (msg) => {
    return {
        type: types.DASHBOARD_ERROR,
        payload: msg,
    };
};

export const setIsLoading = (value) => {
  return {
      type: types.DASHBOARD_LOADING,
      payload: value,
  };
};

export const getCreatorData = (name) => (dispatch) => {
    dispatch(setIsLoading(true));
    const res = creatorData.find(creator => creator.about.name === name);
    if(res === undefined) {
        dispatch({
            type: types.CREATOR_NOT_FOUND,
        });
    }
    else {
        dispatch({
            type: types.CREATOR_DATA_FOUND,
            payload: res,
        });
    }
};