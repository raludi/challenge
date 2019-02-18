
import base64 from 'base-64';

const endPoint = 'https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions'

const generateBasicAuth = () => base64.encode('code-challenge:payvisioner');

export const getTransactions = async () => {
    const response = await fetch(endPoint, {
        method: 'GET',
        headers: {
            'Authorization' : `Basic ${generateBasicAuth()}`
        }
    });
    const json = await response.json();
    return json;
}

export const filterTransactions = async () => {
    const response = await fetch(`${endPoint}?action=payment`, {
        method: 'GET',
        headers: {
            'Authorization' : `Basic ${generateBasicAuth()}`
        }
    });
    const json = await response.json();
    return json;
}