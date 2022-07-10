import * as types from "../actions/actionTypes";

const initialState = {
    about: {},
    videos: [],
    videoLink: "",
    taggedProducts: [],
    otherProducts: [],
    error: "",
    isLoading: false,
    creatorFound: true,
};

const dashboard = (state = initialState, action) => {
    switch (action.type) { 
        case types.DASHBOARD_LOADING:
          return {
            ...state,
            isLoading: action.payload,
          };
        case types.DASHBOARD_ERROR:
          return {
            ...state,
            error: action.payload,
        };
        case types.CREATOR_DATA_FOUND:
          return {
            ...state,
            about: action.payload.about,
            videos: action.payload.videos,
            videoLink: action.payload.videos[0].videoLink,
            taggedProducts: action.payload.videos[0].taggedProducts,
            otherProducts: action.payload.videos[0].otherProducts,
            isLoading: false,
            creatorFound: true,
          };
        case types.CREATOR_NOT_FOUND:
            return {
              ...state,
              creatorFound: false,
              isLoading: false,
            };
        default:
            return state;
    }
};

export default dashboard;