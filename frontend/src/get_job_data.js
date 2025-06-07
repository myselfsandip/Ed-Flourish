const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://indeed12.p.rapidapi.com/job/8a8507bee5b34497',
    params: { locality: 'in' },
    headers: {
        'x-rapidapi-host': 'indeed12.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();