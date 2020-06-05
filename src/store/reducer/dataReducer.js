import {GET_DATA} from "../../constans";


export const initState = {
    data: null,
    loadForm: false,
};

export const  getSate = (state=initState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                data: action.payload,
                loadForm: action.loadForm,
            };
        default:
            return state;
    }
};