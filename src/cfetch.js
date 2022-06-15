//Dependencies
const fetch = require("node-fetch");

function cfetch(API_URL, inputFunction){
    //Check wether the input is empty
    if ( Object.keys(inputFunction).length == 0){
        throw new Error('Insert the parameters correctly');
    }

    //Creates a header's instance 
    const headers = new fetch.Headers();
    const headersObject = Object.entries(inputFunction.headers);
    headersObject.map(element => {
        headers.append(element[0], element[1]);
    })

    //Creates the Request object
    const inputRequest = {
        ...inputFunction,
        headers: headers,
    };

    //Default parameters if client does not type
    if (!('method' in inputRequest)){
        inputRequest['method'] = "GET";
    }
    if ( (inputRequest['method'] !== "GET") && (!('body' in inputRequest))){
        throw new Error('Request body is missing');
    }
    const request = new fetch.Request(API_URL, inputRequest); 

    //Pass the parameters to fetch function
    fetch(request)
    .then(response => {
        if (response.status === 200) {
        return response.json();
        } else {
        throw new Error('Something went wrong on API server!');
        }
    })
    .then(response => {
        console.debug(response);
    }).catch(error => {
        console.error(error);
    });
}

module.exports = { cfetch };