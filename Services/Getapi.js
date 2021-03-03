import axios from 'axios'



const api ='http://dummy.restapiexample.com/api/v1/employees'

// Make a request for a user with a given ID

export const getApi = async () => {
    try {
        const resp = await axios.get(api);
        console.log(resp.data);

        return (resp.data.data)
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};



