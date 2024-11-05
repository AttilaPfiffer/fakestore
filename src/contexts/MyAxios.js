/* saját axios példány létrehozása */

import axios from "axios";

export const myAxios = axios.create ({
    baseURL: "https://fakestoreapi.com",
    timeout: 10000,
    headers: {
        'Context-type': 'application/json',
    },
});