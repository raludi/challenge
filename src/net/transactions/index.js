
import base64 from 'base-64';
import axios from 'axios';
import qs from 'qs';
const endPoint = 'https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions'

const generateBasicAuth = () => base64.encode('code-challenge:payvisioner');

export const getTransactions = async () => {
    const response = await axios.get(endPoint, {
        headers: {
            'Authorization' : `Basic ${generateBasicAuth()}`
        }
    });
    return response.data;
}

export const filterTransactions = async (filters) => {
    //const filters = getParams(filters
    const response = await axios.get(endPoint, {
        'params': {'action': filters[0].map(value => value.toLowerCase()),
                'currencyCode': filters[1]},
        'paramsSerializer': (params) => {
           return qs.stringify(params, {arrayFormat: 'repeat'})
        },
        headers: {
            'Authorization' : `Basic ${generateBasicAuth()}`
        },
    })
    return response.data;
}
