import axios from 'axios';

const SubmitFormAPI = async (data: any) => {
    try {
        const response = await axios.post('http://127.0.0.1:5000/save_settings', {
            results: data, // Include the 'results' parameter in the request body
            // Optionally, you can include other parameters like 'key'
            key: 'value',
        });
        console.log("posted", response.data); // Log the response data if needed
        return response.data; // Return response data if needed
    } catch (err: any) {
        console.error(err);
        throw new Error(err);
    }
};

const CalendarCredentialsAPI = async () => {
    try{
        const response = await axios.get('http://127.0.0.1:5000/get_credentials')
        console.log(response.data)
        return response.data
    } catch(err: any){
        console.error(err)
        throw new Error(err)
    }
}

export  { SubmitFormAPI, CalendarCredentialsAPI}