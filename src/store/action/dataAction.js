import {GET_DATA} from "../../constans";

export const getData = (dispatch) => {
    const axios = require('axios').default;
    axios.get("https://support.stream-labs.com/api/products",{
    })
        .then(response => {
            dispatch({
                type: GET_DATA,
                loadForm: true,
                payload: response.data,
            });
        })
        .catch(error => {
            console.log(error)
        })
};