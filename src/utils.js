// import axios from "axios";

// const omdb = axios.create({
//     baseURL: "https://spotify23.p.rapidapi.com/search/",
//     timeout: 15000,
//     params: {
//         apikey: "9781dc1dc8msh1dc8b835973791fp139060jsnb5f82cc91032"
//     }
// });
// export {omdb};

import axios from "axios";

const omdb = axios.create({
    baseURL: "https://www.omdbapi.com/",
    timeout: 15000,
    params: {
        apikey: "536bc7f5"
    }
});

export {omdb};